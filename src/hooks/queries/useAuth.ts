import {useMutation, useQuery} from '@tanstack/react-query';
import {
  postSignup,
  postLogin,
  getAccessToken,
  ResponseToken,
  getProfile,
  logout,
} from '../../api/auth';

import {
  useMutatuonCustomOptions,
  useQueryCustomOptions,
} from '../../types/common';

import {
  setEncryptStorage,
  setHeader,
  removeHeader,
  removeEncryptStorage,
} from '../../utils';
import {useEffect} from 'react';
import queryClient from '../../api/queryClient';

// 회원가입을 위한 훅
const useSignup = (mutationOptions?: useMutatuonCustomOptions) => {
  return useMutation({
    mutationFn: postSignup,
    ...mutationOptions,
  });
};

// 로그인을 위한 훅
const useLogin = (mutationOptions?: useMutatuonCustomOptions) => {
  return useMutation({
    mutationFn: postLogin,
    // 성공 시 헤더 설정: refreshToken 저장, Authorization 헤더 설정
    onSuccess: ({refreshToken, accessToken}) => {
      setEncryptStorage('refreshToken', refreshToken);
      setHeader('Authorization', `Bearer ${accessToken}`);
    },
    // 성공 실패 상관없이 항상 실행 : 토큰 만료 시 토큰 갱신 위해 항상 실행
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['auth', 'getAccessToken']});
      queryClient.invalidateQueries({queryKey: ['auth', 'getProfile']});
    },
    ...mutationOptions,
  });
};

// 토큰 갱신을 위한 훅
const useGetRefreshToken = () => {
  const {isSuccess, data, isError} = useQuery<ResponseToken>({
    queryKey: ['auth', 'getAccessToken'],
    queryFn: getAccessToken,
    // 27분 마다 자동으로 토큰 갱신
    staleTime: 1000 * 60 * 30 - 1000 * 60 * 3,
    refetchInterval: 1000 * 60 * 30 - 1000 * 60 * 3,
    // 네트워크 재연결 시 자동으로 토큰 갱신
    refetchOnReconnect: true,
    // 백그라운드에서 자동으로 토큰 갱신
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (isSuccess) {
      setHeader('Authorization', `Bearer ${data?.accessToken}`);
      setEncryptStorage('refreshToken', data?.refreshToken);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) {
      removeHeader('Authorization');
    }
  }, [isError]);

  return {isSuccess, isError};
};

// 프로필 조회를 위한 훅
const useGetProfile = (queryOptions?: useQueryCustomOptions) => {
  return useQuery({
    queryKey: ['auth', 'getProfile'],
    queryFn: getProfile,
    ...queryOptions,
  });
};

// 로그아웃을 위한 훅
const useLogout = (mutationOptions?: useMutatuonCustomOptions) => {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      removeHeader('Authorization');
      removeEncryptStorage('refreshToken');
    },
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['auth']});
    },
    ...mutationOptions,
  });
};

// 회원 관련 훅
const useAuth = () => {
  const signupMutation = useSignup();
  const refreshTokenQuery = useGetRefreshToken();
  const logoutMutation = useLogout();
  const getProfileQuery = useGetProfile({
    enabled: refreshTokenQuery.isSuccess,
  });
  const isLogin = getProfileQuery.isSuccess;
  const loginMutation = useLogin();

  return {
    signupMutation,
    loginMutation,
    getProfileQuery,
    isLogin,
    logoutMutation,
  };
};

export default useAuth;
