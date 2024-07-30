import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Signup from '../screens/ScreenSingup/Signup';
import Login from '../screens/ScreenLogin/Login';
import Home from '../screens/ScreenHome/Home';
import { AuthStackParamList } from '../utlis/interfaces';
import { checkAuth } from '../redux/slice.ts/authslice';

const Stack = createStackNavigator<AuthStackParamList>();

const Routes = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                {isAuthenticated ? (
                    <Stack.Screen name="Home" component={Home} />
                ) : (
                    <>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Signup" component={Signup} />
                        {/* abhi yaha ye ho rha ki startingn pafe hi login ka ho gya hai agar mai waha handle ni kr rha to  */}
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
