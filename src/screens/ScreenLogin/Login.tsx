import React, { useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { loginUser, loginWithGoogle } from '../../utlis/firebaseAuth';
import { LoginFormData } from './utils/interface';
import schema from './utils/validation';
import { LoginScreenProps } from '../../utlis/interfaces';
import styles from './StylesLogin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1098194118072-asmjk2jcfr382c7vog3j9cbs9g6igkdg.apps.googleusercontent.com',
    });
  }, []);

  const onSubmit = (data: LoginFormData) => {
    loginUser(data.email, data.password, dispatch);
  };

  const handleGoogleLogin = () => {
    loginWithGoogle(dispatch);
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
      <Button title="Login with Google" onPress={handleGoogleLogin} />
    </View>
  );
};

export default Login;
