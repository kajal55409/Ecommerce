import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../screens/about";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AboutScreen"
      headerMode="screen"
      screenOptions={{
        header: (props) => <Header {...props} />
      }}
    >
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "About";
          return { headerTitle: routeName };
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
