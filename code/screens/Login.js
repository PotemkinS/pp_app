import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { gStyles } from "../styles";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Login() {
  const [token, setToken] = useState({ access_token: "", token_type: "" });
  const [tryingToLogin, setTryingToLogin] = useState(false);
  const [info, setInfo] = useState({
    email: "",
    fullname: "",
    username: "",
    id: "",
  });
  function func() {
    setTryingToLogin(false);
  }
  const [tests, setTests] = useState([
    {
      id: 1,
      name: "",
      answers: ["A", "B", "C", "D", "A", "D"],
      teacher_id: 4207,
    },
  ]);
  useEffect(() => {
    if (tryingToLogin) {
      console.log("trying to login");
      axios
        .post(
          loginUrl,
          `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`
        )
        .then((response) => setToken(JSON.parse(response.request._response)));
      axios
        .get(getInfoUrl, {
          headers: { Authorization: `Bearer ${token.access_token}` },
        })
        .then((resp) => setInfo(JSON.parse(resp.request._response)));
      axios
        .get(getTestsUrl, {
          headers: { Authorization: `Bearer ${token.access_token}` },
        })
        .then((resp) => setTests(JSON.parse(resp.request._response)));
      if (
        !(token.access_token === "") &&
        !(info.email === "") &&
        tryingToLogin
      ) {
        navigation.navigate("Main", {
          token: token,
          info: info,
          tests: tests,
        });
        setTimeout(() => func(), 3000);
      }
    }
  });
  const loginUrl = "http://91.107.124.140:8000/auth/token";
  const getInfoUrl = "http://91.107.124.140:8000/auth/";
  const getTestsUrl = "http://91.107.124.140:8000/test/";
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  return (
    <View style={gStyles.container}>
      <View style={gStyles.main}>
        <Text style={[gStyles.titleText]}>Вход</Text>
        <TextInput
          style={[gStyles.textInput, gStyles.shadow]}
          onChangeText={(newText) => setEmail(newText)}
          placeholder="✉ Почта"
        />
        <TextInput
          style={[gStyles.textInput, gStyles.shadow]}
          onChangeText={(newText) => setPassword(newText)}
          placeholder="✔ Пароль"
        />
        <TouchableOpacity>
          <Text
            style={[gStyles.confirmationButton, gStyles.shadow]}
            onPress={() => setTryingToLogin(true)}
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
