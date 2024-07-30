import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/slice.ts/authslice';
import { User } from './utils/interface';
import schema from './utils/validation';
import { SignupScreenProps } from '../../utlis/interfaces';
import styles from './StylesSignup';

const Signup: React.FC<SignupScreenProps> = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm<User>({
        resolver: yupResolver(schema),
    });
    const dispatch = useDispatch();

    const onSubmit = (data: User) => {
        // navigation.navigate('Login');
        dispatch(signup(data));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Signup Page</Text>
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
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

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

            <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Phone"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.phone && <Text style={styles.error}>{errors.phone.message}</Text>}

            <Button title="Signup" onPress={handleSubmit(onSubmit)} />
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

export default Signup;
