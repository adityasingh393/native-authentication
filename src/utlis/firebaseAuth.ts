import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../redux/slice.ts/authslice';
import { User } from './interfaces';
import { Alert } from 'react-native';
import { AppDispatch } from '../redux/store';

export const signupUser = async (user: User, dispatch: AppDispatch) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(user.email, user.password);
    const idToken = await userCredential.user.getIdToken();
    await AsyncStorage.setItem('authToken', idToken);
    const newUser: User = {
      email: user.email,
      name: user.name,
      phone: user.phone,
      password: user.password,
    };
    dispatch(setUser(newUser));
  } catch (error) {
    Alert.alert('Cannot sign up, please try again.');
  }
};

export const loginUser = async (email: string, password: string, dispatch: AppDispatch) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    const idToken = await userCredential.user.getIdToken();
    await AsyncStorage.setItem('authToken', idToken);

    const currentUser = auth().currentUser;
    if (currentUser) {
      const user: User = {
        email: currentUser.email!,
        name: currentUser.displayName!,
        phone: '',
        password: '',
      };
      dispatch(setUser(user));
    }
  } catch (error) {
    dispatch(setUser(null));
    Alert.alert('Error occurred, cannot log you in. Please check your credentials and try again.');
  }
};

export const loginWithGoogle = async (dispatch: AppDispatch) => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
    const userCredential = await auth().signInWithCredential(googleCredential);
    const idToken = await userCredential.user.getIdToken();
    await AsyncStorage.setItem('authToken', idToken);

    const currentUser = auth().currentUser;
    if (currentUser) {
      const user: User = {
        email: currentUser.email!,
        name: currentUser.displayName!,
        phone: '',
        password: '',
      };
      dispatch(setUser(user));
    }
  } catch (error) {
    console.error("Google Sign-In Error: ", error);
    Alert.alert('Error occurred, cannot log you in with Google. Please try again.');
  }
};


export const logoutUser = async (dispatch: AppDispatch) => {
  try {
    await auth().signOut();
    await AsyncStorage.removeItem('authToken');
    dispatch(setUser(null));
  } catch (error) {
    Alert.alert('Cannot log you out, please try again.');
  }
};
