import { StyleSheet, View} from "react-native";
import UserDetails from "../components/UserDetails/UserDetails";
import * as designTokens from "../styles/designTokens";
import Card from "../components/Card/Card";
import NewAvatar from "../components/NewAvatar/NewAvatar";
import Text from "../components/Texts/Text";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes";

export default function PetsDashboard() {
  const navigation = useNavigation<StackTypes>();

  return (
      <View style={styles.wrapper}>
       <UserDetails userName="Letícia"></UserDetails>
       <Card>
        <Text style={styles.title}>Seus Pets</Text>
        <View style={styles.pets}>
          <NewAvatar label="Pet" onPress={() => {navigation.navigate("PetDetails")}}></NewAvatar>
        </View>
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
  pets: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: designTokens.fontSizeXs,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16
  }
});
