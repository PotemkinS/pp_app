import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { gStyles } from "../styles";

export default function Main({ route }) {
  const { info } = route.params;
  const { tests } = route.params;
  const { token } = route.params;
  const navigation = useNavigation();
  const [profile, setProfile] = useState(false);
  function showTests() {
    return tests.map((test, index) => {
      const key = index;
      return (
        <Text
          key={key}
          style={gStyles.text}
          onPress={() => navigation.navigate("Test", { test: test })}
        >
          {test.name}
        </Text>
      );
    });
  }
  if (!profile) {
    return (
      <View style={gStyles.container}>
        {/*<View style={[gStyles.testsContainer]}>
          <Text style={[gStyles.titleText, { marginTop: 20, fontSize: 30 }]}>
            Тесты
          </Text>
          <ScrollView
            style={[gStyles.testsContainer, gStyles.shadow, { height: 200 }]}
          >
            {showTests()}
          </ScrollView>
    </View>*/}
        <Text
          style={[
            gStyles.confirmationButton,
            gStyles.shadow,
            { marginTop: 300 },
          ]}
          onPress={() => navigation.navigate("Scan", { token: token })}
        >
          Сканировать
        </Text>
        <View style={[gStyles.bottomContainer]}>
          <Text
            style={[
              gStyles.confirmationButton,
              gStyles.shadow,
              { marginBottom: 20, width: 120 },
            ]}
            onPress={() => navigation.navigate("Login")}
          >
            ⇤ Выйти
          </Text>
          <TouchableOpacity
            onPress={() => {
              setProfile(true);
            }}
          >
            <Image
              source={require("../assets/icon.png")}
              style={[gStyles.profileImage, { marginTop: 0 }]}
            />
          </TouchableOpacity>
          <View style={[{ marginBottom: 0, width: 120 }]}></View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={gStyles.container}>
        <View style={gStyles.main}>
          <Text style={gStyles.titleText}>Профиль</Text>
          <View style={[gStyles.info]}>
            <View>
              <Text style={gStyles.infoTitle}>ID</Text>
              <Text style={gStyles.infoTitle}>Почта</Text>
              <Text style={gStyles.infoTitle}>Логин</Text>
              <Text style={gStyles.infoTitle}>Фио</Text>
            </View>
            <View style={[{ width: 500 }]}>
              <TextInput
                editable={false}
                value={info.id}
                style={[gStyles.textInput, gStyles.infoValues, gStyles.shadow]}
              />
              <TextInput
                editable={false}
                value={info.email}
                style={[gStyles.textInput, gStyles.infoValues, gStyles.shadow]}
              />
              <TextInput
                editable={false}
                value={info.username}
                style={[gStyles.textInput, gStyles.infoValues, gStyles.shadow]}
              />
              <TextInput
                editable={false}
                value={info.fullname}
                style={[gStyles.textInput, gStyles.infoValues, gStyles.shadow]}
              />
            </View>
          </View>
          <Text
            style={[
              gStyles.confirmationButton,
              gStyles.shadow,
              { alignSelf: "center" },
            ]}
            onPress={() => setProfile(false)}
          >
            На главную
          </Text>
        </View>
        <View style={[gStyles.bottomContainer, { padding: 10 }]}>
          <Text
            style={[
              gStyles.confirmationButton,
              gStyles.shadow,
              { marginBottom: 20, width: 120 },
            ]}
            onPress={() => navigation.navigate("Login")}
          >
            ⇤ Выйти
          </Text>
          <TouchableOpacity
            onPress={() => {
              setProfile(true);
            }}
          >
            <Image
              source={require("../assets/icon.png")}
              style={gStyles.profileImage}
            />
          </TouchableOpacity>
          <View style={[{ marginBottom: 0, width: 120 }]}></View>
        </View>
      </View>
    );
  }
}
