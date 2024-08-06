import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../redux/slice.ts/authslice';
import { HeaderProps } from '../../utils/types';
import styles from './StylesHeader';

const Header: React.FC<HeaderProps> = ({ userName }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Hello, {userName}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};


export default Header;
