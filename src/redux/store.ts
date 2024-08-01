import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import authReducer from './slice.ts/authslice';
import imageReducer from '../screens/ScreenHome/redux/imageSlice';
import { rootEpic } from './rootEpic';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    images: imageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
