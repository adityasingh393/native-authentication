import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#B5CFB7',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  card: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#F5EDED',
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  title: {
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
