import { View } from "react-native";
import Stack from "./navigate";
import { gStyles } from "./styles";

export default function App() {
  return (
    <View style={gStyles.container}>
      <Stack />
    </View>
  );
}
