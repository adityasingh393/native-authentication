import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store'
import { logout } from '../../redux/slice.ts/authslice';
import { StackScreenProps } from '@react-navigation/stack';

const Home: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    console.log("he;;p")
    navigation.navigate('Login');
  };
  return (
    <View>
      <Text>Hello, {user?.name}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Home;
