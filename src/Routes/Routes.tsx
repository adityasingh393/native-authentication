import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Signup from '../screens/ScreenSingup/Signup';
import Login from '../screens/ScreenLogin/Login';
import Home from '../screens/ScreenHome/Home';
// import { checkAuth } from '../redux/slice.ts/authslice';
import { AuthStackParamList, AppStackParamList } from '../utlis/interfaces';

const AuthStack = createStackNavigator<AuthStackParamList>();
const AppStack = createStackNavigator<AppStackParamList>();

const Routes = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(checkAuth());
    // }, [dispatch]);

    return (
        <NavigationContainer>
            {isAuthenticated ? (
                <AppStack.Navigator initialRouteName="Home">
                    <AppStack.Screen name="Home" component={Home} options={{headerShown:true}} />
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
