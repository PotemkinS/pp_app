import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { gStyles } from "../styles";
import { useState } from "react";
import axios from "axios";

export default function MainScreen() {
  const signUpUrl = "http://91.107.124.140:8000/auth/";
  const navigation = useNavigation();
  const [username, setUsernName] = useState();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={gStyles.container}>
      <View style={gStyles.main}>
        <Text style={gStyles.titleText}> Регистрация</Text>
        <TextInput
          style={[gStyles.textInput, gStyles.shadow]}
          placeholder="✉ Почта"
          onChangeText={(newtext) => setEmail(newtext)}
        ></TextInput>
        <TextInput
          style={[gStyles.textInput, gStyles.shadow]}
          placeholder="логин"
          onChangeText={(newtext) => setUsernName(newtext)}
        ></TextInput>
        <TextInput
          style={[gStyles.textInput, gStyles.shadow]}
          placeholder="Фио"
          onChangeText={(newtext) => setFullName(newtext)}
        ></TextInput>
        <TextInput
          style={[gStyles.textInput, gStyles.shadow]}
          placeholder="✔ Пароль"
          onChangeText={(newtext) => setPassword(newtext)}
        ></TextInput>
        <TouchableOpacity>
          <Text
            style={[
              gStyles.confirmationButton,
              gStyles.shadow,
              gStyles.wideButton,
            ]}
            onPress={() => (
              axios.post(signUpUrl, {
                username: username,
                password: password,
                email: email,
                fullname: fullName,
              }),
              navigation.navigate("Login")
            )}
          >
            {" "}
            Зарегестрироваться
          </Text>
          <Text
            style={gStyles.text}
            onPress={() => navigation.navigate("Login")}
          >
            {" "}
            У вас уже есть аккаунт?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
