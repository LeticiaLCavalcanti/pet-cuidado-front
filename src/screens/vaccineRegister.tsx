import { StyleSheet, View} from "react-native";
import Input from "../components/Input/index";
import NewAvatar from "../components/NewAvatar/NewAvatar";
import Text from "../components/Texts/Text";
import * as designTokens from "../styles/designTokens";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes";

export default function VaccineRegister() {
  const navigation = useNavigation<StackTypes>();

  return (
      <View style={styles.wrapper}>
        <Input placeholder={'Nome'} />
        <Input placeholder={'Laboratório'} />
        <Input placeholder={'Validade'} />
        <View style={styles.addVaccineLabel}>
          <Text style={{fontWeight: "700"}}>Foto do rótulo</Text>
          <NewAvatar label="" style={{marginTop: 60}} onPress={() => {navigation.navigate("VaccinesList")}}></NewAvatar>
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
  addVaccineLabel: {
    backgroundColor: designTokens.colorNeutralMedium,
    width: '100%',
    height: 100,
    padding: 11,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  }
});
