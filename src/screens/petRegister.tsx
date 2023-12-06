import { StyleSheet, View} from "react-native";
import * as designTokens from "../styles/designTokens";
import Button from "../components/Button";
import Input from "../components/Input/index";
import NewAvatar from "../components/NewAvatar/NewAvatar";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes";


export default function PetRegister() {
  const navigation = useNavigation<StackTypes>();

  return (
      <View style={styles.wrapper}>
        <Input placeholder={'Nome'} />
        <Input placeholder={'Raça'} />
        <Input placeholder={'Sexo'} />
        <Input placeholder={'Idade'} />
        <Input placeholder={'Peso'} />
        <Input placeholder={'Microchip'} />
       
        <NewAvatar label="Avatar"></NewAvatar>

        <View style={styles.alignBottom}>
          <Button onPress={() => {navigation.navigate("PetsDashboard")}}>Registrar Pet</Button>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: 30
  },
  alignBottom: {
    alignItems: "center",
    justifyContent: "center",
  }
});
