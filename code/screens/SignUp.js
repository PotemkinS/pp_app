import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { gStyles } from "../styles";

export default function MainScreen() {
  const navigation = useNavigation();
  return (
    <View style={gStyles.container}>
      <View style={gStyles.main}>
        <Text style={gStyles.titleText}> Регистрация</Text>
        <TextInput
          style={[gStyles.textInput, gStyles.shadow]}
          placeholder="✉ Почта"
        ></TextInput>
        <TextInput
          style={[gStyles.textInput, gStyles.shadow]}
          placeholder="✔ Пароль"
        ></TextInput>
        <TextInput
          style={[gStyles.textInput, gStyles.shadow]}
          placeholder="Фамилия"
        ></TextInput>
        <TextInput
          style={[gStyles.textInput, gStyles.shadow]}
          placeholder="Имя"
        ></TextInput>
        <TextInput
          style={[gStyles.textInput, gStyles.shadow]}
          placeholder="Отчество"
        ></TextInput>
        <TouchableOpacity>
          <Text
            style={[
              gStyles.confirmationButton,
              gStyles.shadow,
              gStyles.wideButton,
            ]}
            onPress={() => navigation.navigate("Login")}
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
