import React, { useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { loginUser } from '../../utlis/loginAuth';
import { LoginFormData } from './utils/interface';
import schema from './utils/validation';
import { LoginScreenProps } from '../../utlis/interfaces';
import styles from './StylesLogin';

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: yupResolver(schema),
    });
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         navigation.navigate('Home');
    //     }
    // }, [isAuthenticated]);

    const onSubmit = (data: LoginFormData) => {
        loginUser(data.email, data.password, dispatch);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry
                    />
                )}
            />
            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

            <Button title="Login" onPress={handleSubmit(onSubmit)} />
            <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
        </View>
    );
};

export default Login;
