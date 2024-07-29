import React, { useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import { RootState } from '../../redux/store';
import { loginUser } from '../../utlis/loginAuth';
import { LoginFormData } from './utils/interface';
import schema from './utils/validation';

const Login: React.FC<StackScreenProps<any>> = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: yupResolver(schema),
    });
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    useEffect(() => {
        if (isAuthenticated) {
            navigation.navigate('Home');
        }
    }, [isAuthenticated]);

    const onSubmit = (data: LoginFormData) => {
        loginUser(data.email, data.password, dispatch);
    };

    return (
        <View>
            <Text>Login</Text>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput placeholder="Email" onBlur={onBlur} onChangeText={onChange} value={value} />
                )}
            />
            {errors.email && <Text>{errors.email.message}</Text>}

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput placeholder="Password" onBlur={onBlur} onChangeText={onChange} value={value} secureTextEntry />
                )}
            />
            {errors.password && <Text>{errors.password.message}</Text>}

            <Button title="Login" onPress={handleSubmit(onSubmit)} />
            <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
        </View>
    );
};

export default Login;
