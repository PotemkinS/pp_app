import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { gStyles } from "../styles";
import { useState } from "react";

export default function Scan() {
  const navigation = useNavigation();
  const [madePhoto, setPhoto] = useState(false);
  const [receivedInfo, setReceived] = useState(false);
  return (
    <View style={gStyles.container}>
      <View style={[gStyles.scanContainer, gStyles.shadow]}>
        {madePhoto ? (
          <Text
            style={[
              gStyles.confirmationButton,
              gStyles.shadow,
              gStyles.scanButton,
            ]}
            onPress={() => setPhoto(true)}
          >
            Ещё раз
          </Text>
        ) : (
          <Text
            style={[
              gStyles.confirmationButton,
              gStyles.shadow,
              gStyles.scanButton,
            ]}
            onPress={() => setPhoto(true)}
          >
            Сделать фото
          </Text>
        )}
        <Text
          style={[
            gStyles.confirmationButton,
            gStyles.shadow,
            gStyles.scanButton,
          ]}
          onPress={() => setPhoto(true)}
        >
          Проверить
        </Text>
      </View>
    </View>
  );
}
