import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function ResultDetails({result}) {
  return (
    <View style={styles.container}>
        <Image 
        style={styles.image}
        source={result.image_url ? {uri: result.image_url} : null}
        />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} <AntDesign name="star" size={15} color="#ff6f3c" /> Yıldızlı Restoran, {result.review_count} Değerlendirme</Text>
      

    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    marginLeft: 10,
  },
  image: {
    width: 270, 
    height: 120,
    borderRadius: 8,
    marginBottom: 5,
  },
  name:{
    fontWeight: 'bold'
  }
})