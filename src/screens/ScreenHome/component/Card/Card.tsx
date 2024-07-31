import React from 'react';
import { View, Image, Text } from 'react-native';
import {ImageCardProps} from '../../utils/types';
import styles from './StylesCard';
import EyeIcon from '../../../../Assests/Eye';
import HeartIcon from '../../../../Assests/Heart';
import DownloadIcon from '../../../../Assests/Download';
const ImageCard: React.FC<ImageCardProps> = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.previewURL }} style={styles.image} />
      <Text style={styles.title}>{item.tags}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}><EyeIcon/> {item.views}</Text>
        <Text> <DownloadIcon/> {item.downloads}</Text>
        <Text style={styles.infoText}><HeartIcon/> {item.likes}</Text>
      </View>
    </View>
  );
};

export default ImageCard;
