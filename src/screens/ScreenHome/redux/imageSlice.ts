import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Image, ImageStateArray } from '../utils/types';

const initialState: ImageStateArray = {
  images: [],
  loading: false,
  error: '',
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    fetchImagesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchImagesSuccess: (state, action: PayloadAction<Image[]>) => {
      state.images = action.payload;
      state.loading = false;
    },
    fetchImagesFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure } = imageSlice.actions;
export default imageSlice.reducer;

export type imageSliceTypes =
  | ReturnType<typeof fetchImagesRequest>
  | ReturnType<typeof fetchImagesSuccess>
  | ReturnType<typeof fetchImagesFailure>;
