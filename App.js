import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigator/AppNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BookList from "./src/screen/BookList";
import BookDetails from "./src/screen/BookDetails";
import { Cart } from "./src/screen/Cart";
import { CartProvider } from "./src/CardContext";
import { CartIcon } from "./src/components/CartIcon";

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="books" component={BookList} options={({navigation}) => ({title: 'Books', headerRight: () => <CartIcon navigation={navigation} />})} />
        <Stack.Screen name="BookDetails" component={BookDetails} options={({navigation}) => ({title: 'Books', headerRight: () => <CartIcon navigation={navigation} />})} />
        <Stack.Screen name="Cart" component={Cart} options={({navigation}) => ({title: 'Books', headerRight: () => <CartIcon navigation={navigation} />})} />
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}
