import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SaloonScreen from "../screens/SaloonScreen";
import AppointmentScreen from "../screens/AppointmentScreen";

const screenOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SaloonScreen" component={SaloonScreen} />
      <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
