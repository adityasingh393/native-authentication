import React from 'react';
import { View, Image, Text } from 'react-native';
import {ImageCardProps} from '../utils/types';
import styles from '../styles/StylesCard';
const ImageCard: React.FC<ImageCardProps> = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.previewURL }} style={styles.image} />
      <Text style={styles.title}>{item.tags}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Views: {item.views}</Text>
        <Text style={styles.infoText}>Likes: {item.likes}</Text>
      </View>
    </View>
  );
};

export default ImageCard;
