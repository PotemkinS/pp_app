import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { gStyles } from "../styles";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={gStyles.container}>
      <View style={gStyles.main}>
        <Text style={[gStyles.titleText]}>Вход</Text>
        <TextInput
          style={[gStyles.textInput, gStyles.shadow]}
          placeholder="✉ Почта"
        />
        <TextInput
          style={[gStyles.textInput, gStyles.shadow]}
          placeholder="✔ Пароль"
        />
        <TouchableOpacity>
          <Text
            style={[gStyles.confirmationButton, gStyles.shadow]}
            onPress={() => navigation.navigate("Main")}
          >
            Войти
          </Text>
          <Text
            style={gStyles.text}
            onPress={() => navigation.navigate("Recover")}
          >
            Забыли пароль?
          </Text>
          <Text
            style={gStyles.text}
            onPress={() => navigation.navigate("SignUp")}
          >
            Зарегестрироваться
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
