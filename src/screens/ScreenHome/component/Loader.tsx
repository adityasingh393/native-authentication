import React from "react";
import { Text, View } from "react-native";
import styles from '../styles/stylesLoader'
const Loader: React.FC = () => {
  return (
  <View style={styles.loader}>
    <View style={styles.spinner}>

    </View>
  </View>
  );
};

export default Loader;