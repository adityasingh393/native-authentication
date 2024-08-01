import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    cardContainer: {
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#E2DAD6',
      borderRadius: 5,
    },
    cardImage: {
      width: '100%',
      height: 200,
      borderRadius: 5,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 5,
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
    },
    infoText: {
      fontSize: 14,
      color: '#555',
    },
  });
  export default styles;