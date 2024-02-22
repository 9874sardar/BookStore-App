import { View,Image, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const Book = ({name , price , image,author , onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image style={styles.image} source={image}/>
        <View style={styles.infoContainer} >
            <Text style={styles.name}>Title : {name}</Text>
            <Text style={styles.author}>Author :{author}</Text>
            <Text style={styles.price}>Price :₹{" "}{price}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Book

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '4%',
        paddingTop:15
    },
    image: {
        height:160,
        width:"90%",
        aspectRatio: 2/3,
        resizeMode:"cover",
    },
    infoContainer: {
        padding: 20 ,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    author:{
        fontSize: 18,
        // fontWeight:"400"
    },
    price: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 8
    }
})