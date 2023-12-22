import React from "react";
import Main from "./screens/Main";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Recover from "./screens/Recover";
import Scan from "./screens/Scan";
import Test from "./screens/Test";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Вход", headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Главная", headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Регистрация", headerShown: false }}
        />
        <Stack.Screen
          name="Recover"
          component={Recover}
          options={{ title: "Восстановление пароля", headerShown: false }}
        />
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{ title: "Закончить сканирование" }}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={{ title: "Назад" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
