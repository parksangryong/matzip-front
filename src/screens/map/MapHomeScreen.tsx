import {View, Text, Button} from 'react-native';

// 회원 관련 훅
import useAuth from '../../hooks/queries/useAuth';

const MapHomeScreen = () => {
  const {logoutMutation} = useAuth();

  return (
    <View>
      <Text>MapHomeScreen</Text>
      <Button title="로그아웃" onPress={() => logoutMutation.mutate({})} />
    </View>
  );
};

export default MapHomeScreen;
