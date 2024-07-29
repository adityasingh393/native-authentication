import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { logout } from '../../redux/slice.ts/authslice';
import styles from './StyleHome';
import { HomeScreenProps } from '../../utlis/interfaces';

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigation.navigate('Login');
  //   }
  // }, [isAuthenticated]);

  const handleLogout = () => {
    dispatch(logout());
    // navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {user?.name}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Home;
