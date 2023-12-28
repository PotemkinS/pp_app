import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { gStyles } from "../styles";
import { useState } from "react";

export default function Test({ route }) {
  const { test } = route.params;
  const [results, setResults] = useState(false);
  if (results) {
    return (
      <View style={gStyles.container}>
        <Text style={gStyles.titleText}>Результаты</Text>
        <View style={gStyles.testsContainer}>
          <Text>{}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={gStyles.container}>
        <View style={gStyles.main}>
          <Text style={gStyles.titleText}>Тест меню</Text>
          <View style={[gStyles.info]}>
            <View>
              <Text style={gStyles.infoTitle}>Название</Text>
              <Text style={gStyles.infoTitle}>Тип теста</Text>
              <Text style={gStyles.infoTitle}>Класс</Text>
            </View>
            <View style={[{ width: 500 }]}>
              <TextInput
                value={test.name}
                editable={false}
                style={[gStyles.textInput, gStyles.infoValues, gStyles.shadow]}
              />
              <TextInput
                editable={false}
                style={[gStyles.textInput, gStyles.infoValues, gStyles.shadow]}
              />
              <TextInput
                editable={false}
                style={[gStyles.textInput, gStyles.infoValues, gStyles.shadow]}
              />
            </View>
          </View>
          <Text
            style={[gStyles.confirmationButton, gStyles.shadow]}
            onPress={() => setResults(true)}
          >
            Результаты
          </Text>
        </View>
      </View>
    );
  }
}
