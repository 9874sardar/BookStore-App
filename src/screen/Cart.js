import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Image,
  Text,
  Button,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { CartContext } from "../CardContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Cart({ navigation }) {
  const { items, getItemsCount, getTotalPrice } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    saveCartItems(items); // Save cart items to AsyncStorage when items change
  }, [items]);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    }, []);
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total :-</Text>
        <Text style={styles.mainTotal}>₹ {total}</Text>
      </View>
    );
  }

  function renderItem({ item }) {

    return (
      <>
        <View style={styles.cartLine}>
          <Image style={styles.image} source={item.book.image} />
          <Text style={styles.lineLeft}>
            {item.book.name} x {item.qty} ={" "}
            <Text style={styles.productTotal}>₹{item.totalPrice}</Text>
          </Text>
        </View>
      </>
    );
  }

  function handleButtonPress() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }

  async function saveCartItems(cartItems) {
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
      const storedItems = await AsyncStorage.getItem('cartItems');
      console.log("get items from local storage",storedItems);
    } catch (error) {
      console.error('Error saving cart items:', error);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 600,
              textAlign: "center",
              padding: 30,
            }}
          >
            After Purchasing Page
          </Text>
          <ActivityIndicator
            style={{ marginTop: 10 }}
            size="large"
            color="#0000ff"
          />
        </>
      ) : (
        <View>
          <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.book.id.toString()}
            ListFooterComponent={Totals}
          />
          <View style={{padding:15}}>
          <Button title="Buy Now" onPress={handleButtonPress} color="orange" />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
    width: "80%",
    paddingVertical: 10,
  },
  image: {
    width: "25%",
    aspectRatio: 1,
    marginRight: 5,
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "black",
    borderTopWidth: 1,
    padding: 5,
    backgroundColor: "lightgray",
  },
  productTotal: {
    fontWeight: "bold",
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "left",
  },
  mainTotal: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
    paddingRight: 20,
  },
  itemsList: {
    backgroundColor: "#eeeeee",
    padding:8
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
