import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { getBookId } from "../services/BookService";
import { CartContext } from "../CardContext";

const BookDetails = ({ route }) => {
  // console.log("coming here")
  const { bookId } = route.params;
  const [book, setBook] = useState({});

  useEffect(() => {
    setBook(getBookId(bookId));
  }, []);

  const {addItemToCart} = useContext(CartContext)

  function onAddToCart(){
    addItemToCart(bookId)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={book.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{book.name}</Text>
          <Text style={styles.price}>$ {book.price}</Text>
          <Text style={styles.description}>{book.description}</Text>
          <Button onPress={onAddToCart} title="Add To Cart" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    height:500,
        width:"80%",
        aspectRatio: 3/5,
        resizeMode:"cover",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});
