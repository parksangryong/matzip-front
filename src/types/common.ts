import {AxiosError} from 'axios';
import {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';

// Axios 에러 타입을 확장한 커스텀 에러 타입
type ResponseError = AxiosError<{
  statusCode: string;
  message: string;
  error: string;
}>;

// React Query의 mutation 옵션을 커스터마이징한 타입
type UseMutationCustomOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, Error, TVariables, unknown>,
  'mutationFn'
>;

// React Query의 query 옵션을 커스터마이징한 타입
type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, Error, TData, QueryKey>,
  'queryKey'
>;

export type {ResponseError, UseMutationCustomOptions, UseQueryCustomOptions};
