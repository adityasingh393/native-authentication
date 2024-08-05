import React, { useEffect } from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchImagesRequest } from '../ScreenHome/redux/imageSlice';
import { HomeScreenProps } from '../../utlis/interfaces';
import Loader from './component/Loader/Loader';
import Header from './component/Header/Header';
import ImageCard from './component/Card/Card';
import styles from './StylesHome';
import { Image } from './utils/types';

const Home: React.FC<HomeScreenProps> = () => {
  const { images, loading } = useSelector((state: RootState) => state.images);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImagesRequest());
  }, [dispatch]);


  return (
    <View style={styles.container}>
      <Header userName={user?.name} />
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={images}
          renderItem={ ({ item }: ListRenderItemInfo<Image>) => <ImageCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Home;
