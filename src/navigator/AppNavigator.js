import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BookList from "../screen/BookList";

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="splash"
          component={BookList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
