import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import authReducer from './slice.ts/authslice';
import imageReducer from '../screens/ScreenHome/redux/imageSlice';
import { fetchImagesEpic } from '../screens/ScreenHome/redux/epics';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    images: imageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(combineEpics(fetchImagesEpic));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
