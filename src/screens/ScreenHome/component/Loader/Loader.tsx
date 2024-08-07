import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styles from './stylesLoader'
const Loader: React.FC = () => {
  return (
  <View style={styles.loader}>
    <ActivityIndicator size='large'/>
  </View>
  );
};

export default Loader;