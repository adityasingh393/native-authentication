import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Signup from '../screens/ScreenSingup/Signup';
import Login from '../screens/ScreenLogin/Login';
import Home from '../screens/ScreenHome/Home';
import auth from '@react-native-firebase/auth';
import { AuthStackParamList, AppStackParamList } from '../utlis/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../redux/slice.ts/authslice';
import Loader from '../screens/ScreenHome/component/Loader/Loader';

const AuthStack = createStackNavigator<AuthStackParamList>();
const AppStack = createStackNavigator<AppStackParamList>();

const Routes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          const currentUser = auth().currentUser;
          if (currentUser) {
            const user = {
              email: currentUser.email!,
              name: currentUser.displayName!,
              phone: '',
              password: '',
            };
            dispatch(setUser(user));
          }
        } else {
          dispatch(setUser(null));
        }
      } catch (error) {
        dispatch(setUser(null));
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, [dispatch]);

  if (isLoading) {
    return <Loader/>; 
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppStack.Navigator initialRouteName="Home">
          <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </AppStack.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="Signup" component={Signup} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
