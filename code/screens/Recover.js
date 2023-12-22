import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { gStyles } from "../styles";

export default function MainScreen() {
  const navigation = useNavigation();
  const [allowedToChangePassword, setAllowed] = useState(false);
  if (allowedToChangePassword) {
    return (
      <View style={gStyles.container}>
        <View style={gStyles.main}>
          <Text style={gStyles.titleText}>Cмена пароля</Text>
          <TextInput
            style={[gStyles.textInput, gStyles.shadow]}
            placeholder="✔ Новый пароль"
          ></TextInput>
          <TextInput
            style={[gStyles.textInput, gStyles.shadow]}
            placeholder="✔ Повторите пароль"
          ></TextInput>
          <TouchableOpacity>
            <Text
              style={[gStyles.confirmationButton, gStyles.shadow]}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Подтвердить
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={gStyles.container}>
        <View style={gStyles.main}>
          <Text style={gStyles.titleText}>Сброс пароля</Text>
          <TextInput
            style={[gStyles.textInput, gStyles.shadow]}
            placeholder="✉ Почта"
          ></TextInput>
          <TouchableOpacity>
            <Text
              style={[gStyles.confirmationButton, gStyles.shadow]}
              onPress={() => null}
            >
              Отправить код
            </Text>
          </TouchableOpacity>
          <TextInput
            style={[gStyles.textInput, gStyles.shadow]}
            placeholder="Код"
          ></TextInput>
          <TouchableOpacity>
            <Text
              style={[gStyles.confirmationButton, gStyles.shadow]}
              onPress={() => {
                setAllowed(true);
              }}
            >
              Сбросить
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
