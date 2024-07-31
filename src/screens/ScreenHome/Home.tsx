import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchImagesRequest } from '../ScreenHome/redux/imageSlice';
import { HomeScreenProps } from '../../utlis/interfaces';
import Loader from './component/Loader/Loader';
import Header from './component/Header/Header';
import ImageCard from './component/Card/Card';
import styles from './StylesHome';
import {Image,} from './utils/types';

const Home: React.FC<HomeScreenProps> = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const images = useSelector((state: RootState) => state.images.images);
  const loading = useSelector((state: RootState) => state.images.loading);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImagesRequest());
  }, [dispatch]);

  const renderItem = ({ item }:{item:Image}) => <ImageCard item={item} />;

  return (
    <View style={styles.container}>
      <Header userName={user?.name} />
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Home;
