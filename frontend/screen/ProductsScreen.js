import React, {useEffect, useState, useContext} from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Product } from '../components/Product.js';

const { width, height } = Dimensions.get('screen');


export function ProductsScreen ({navigation}) {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch('https://testapi.rii-songoo.pw/api/articles/');
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        console.log("data.articles = ",data.data)
        setProducts(data.data);
      } else {
        console.error('Failed to fetch articles:', data.message);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  function renderProduct({item: product}) {
    return (
      <Product 
        {...product} 
        width={'48%'}
        onPress={() => {
      
        }}
      />
    );
  }

  return (
    <View style={{ paddingHorizontal: 5}}>
      <Text style={{marginTop:10, marginLeft:20, fontSize:15, fontWeight:'bold'}}>
        {products.length} Articles
      </Text>
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item._id.toString()}
        numColumns={2}
        data={products}
        renderItem={renderProduct}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingBottom: width*0.2,
  },
  row: {
    justifyContent: 'center',
    marginBottom: 0,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  image: {
    height: width*0.3,
    resizeMode: 'contain',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  }
});
