import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import { View, Text, Image, StyleSheet } from 'react-native';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const { selectedItem } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedItem.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{selectedItem.title}</Text>
        <Text style={styles.description}>{selectedItem.description}</Text>
        <Text style={styles.price}>Price: ${selectedItem.price}</Text>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    padding: 10,
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
});
