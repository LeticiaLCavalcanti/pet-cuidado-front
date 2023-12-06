import { StyleSheet, View} from "react-native";
import * as designTokens from "../styles/designTokens";
import Card from "../components/Card/Card";
import Text from "../components/Texts/Text";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes";
import PetDetailsCard from "../components/DetailsCard/DetailsCard"
import CardMini from "../components/CardMini";

export default function PetDetails() {
  const navigation = useNavigation<StackTypes>();

  return (
      <View style={styles.wrapper}>
       <PetDetailsCard title="Brownie" subtitle="chihuahua"></PetDetailsCard>
       <Card style={{marginTop: -14}}>
        <View style={styles.info}>
          <CardMini>
            <Text style={styles.label}>Sexo</Text>
            <Text style={styles.content}>Femea</Text>
          </CardMini>
          <CardMini>
            <Text style={styles.label}>Idade</Text>
            <Text style={styles.content}>10 anos</Text>
          </CardMini>
        </View>
        <View style={styles.info}>
          <CardMini>
            <Text style={styles.label}>Peso</Text>
            <Text style={styles.content}>7.5 KG</Text>
          </CardMini>
          <CardMini>
            <Text style={styles.label}>Microchip</Text>
            <Text style={styles.content}>23234</Text>
          </CardMini>
        </View>
        <CardMini onPress={() => {navigation.navigate("VaccineRegister")}}>
            <Text style={styles.label}>Próxima Vacina</Text>
            <Text style={styles.content}>12 de Setembro</Text>
        </CardMini>
       </Card>
      </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    flex: 1,
    heigth: '100%',
    paddingTop: 30
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: designTokens.fontSizeXxs,
    color: designTokens.colorPurple200
  },
  content: {
    fontSize: designTokens.fontSizeXs,
    fontWeight: "900",
    marginBottom: 16
  },
});
