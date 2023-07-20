import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { fetchProducts } from '../redux/actions/productActions';
import { RootState } from '../redux/reducers/rootReducer';
import { Product } from '../redux/reducers/types';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  function generateRandomId(): string {
    const randomId = Math.random().toString(36).substr(2, 9);
    return randomId;
  }

  const handleAddToCart = (product: Product) => {
    const isItemInCart = cartItems.some(item => item.title === product.title);
    if (isItemInCart) {
      const newProduct: Product = {
        ...product,
        id: generateRandomId(),
      };
      dispatch(addToCart(newProduct));
      return;
    }
    dispatch(addToCart(product));
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        testID="category-item"
        style={styles.itemInnerContainer}
        onPress={() => navigation.navigate('Detail', { selectedItem: item })}
      >
        <View>
          <Image
            style={styles.image}
            source={{ uri: item.image }}
          />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
          <TouchableOpacity onPress={() => handleAddToCart(item)}>
            <Image
              source={require('../assets/images/cart-plus.png')}
              style={styles.cartIcon}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  itemInnerContainer: {
    width: width * 0.45,
    height: width * 0.6,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 5,
  },
  cartIcon: {
    width: 20,
    height: 20,
  },
});



