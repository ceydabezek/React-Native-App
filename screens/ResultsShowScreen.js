import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const [categories, setCategories] = useState([]);
  const id = route.params.id;

  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
    setCategories(response.data.categories);
  };

  useEffect(() => {
    getResults(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>

      <Text style={styles.address}>
        {result.location.address1}, {result.location.city}, {result.location.state}, {result.location.zip_code}
      </Text>

      <View style={styles.iconContainer}>
        {result.is_closed ? (
          <AntDesign name="closecircleo" size={30} color="black" />
        ) : (
          <MaterialIcons name="delivery-dining" size={30} color="green" />
        )}
      </View>

      <FlatList
        data={result.photos}
        renderItem={({ item, index }) => {
          const photoCategory = categories[index] ? categories[index].title : 'Size Özel';

          if (!item) {
            return null;
          }

          return (
            <View style={styles.photoContainer} key={index}>
              <Image style={styles.image} source={{ uri: item }} />
              <Text style={styles.category}>{photoCategory}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#141010',
  },
  phone: {
    fontSize: 20,
    textAlign: 'center',
    color: 'gray',
  },
  address: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
    color: 'gray',
  },
  iconContainer: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  photoContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    height: 180,
    width: 300,
    borderRadius: 20,
    borderColor: '#ff6f3c',
    borderWidth: 2,
  },
  category: {
    marginTop: 5,
    fontSize: 18, // Daha büyük yazı tipi
    color: '#FFFFFF', // Beyaz metin rengi
    backgroundColor: '#FF4500', // Turuncu arka plan rengi
    padding: 10, // Daha fazla iç boşluk
    borderRadius: 20, // Yuvarlatılmış köşeler
    textAlign: 'center',
  },
  
});
