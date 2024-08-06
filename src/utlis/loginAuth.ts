// import { MMKV } from 'react-native-mmkv';
// import { User } from './interfaces';
// import { AppDispatch } from '../redux/store';
// import { loginSuccess, loginFailure } from '../redux/slice.ts/authslice';
// import { Alert } from 'react-native';
// const storage = new MMKV();

// export const loginUser = (email: string, password: string, dispatch: AppDispatch) => {
//   const userString = storage.getString('user');
//   if (userString) {
//     const user: User = JSON.parse(userString);
//     if (user.email === email && user.password === password) {
//       dispatch(loginSuccess(user));
//     } else {
//       dispatch(loginFailure());
//       Alert.alert('Invalid credentials');
//     }
//   }
// };
