import { AppDispatch } from '../redux/store';
import auth from '@react-native-firebase/auth';
import { setUser } from '../redux/slice.ts/authslice';
import { User } from './interfaces';
import { Alert } from 'react-native';


export const signupUser = async (user: User, dispatch: AppDispatch) => {
  try {
    await auth().createUserWithEmailAndPassword(user.email, user.password);
    await auth().currentUser?.updateProfile({ displayName: user.name });
    const newUser: User = {
      email: user.email,
      name: user.name,
      phone: user.phone,
      password: user.password, 
    };
    dispatch(setUser(newUser));
  } catch (error) {
    Alert.alert('can not singup you please try again')
  }
};

export const loginUser = async (email: string, password: string, dispatch: AppDispatch) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
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
    Alert.alert(" error has occured can not log you in please check your credentials and try again");
  }
};

export const logoutUser = async (dispatch: AppDispatch) => {
  try {
    await auth().signOut();
    dispatch(setUser(null));
  } catch (error) {
    Alert.alert('cannot log you out please try again')
  }
};

export const checkAuthStatus = (dispatch: AppDispatch) => {
  auth().onAuthStateChanged(user => {
    if (user) {
      const currentUser: User = {
        email: user.email!,
        name: user.displayName!,
        phone: '', 
        password: '', 
      };
      dispatch(setUser(currentUser));
    } else {
      dispatch(setUser(null));
    }
  });
};
