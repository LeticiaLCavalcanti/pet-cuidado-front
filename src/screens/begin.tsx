import { StyleSheet, View, Image, Text } from "react-native";
import * as designTokens from "../styles/designTokens";
// import Text from "../components/Texts/Text";
import Button from "../components/Button";

import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes";

export default function Begin() {
  const navigation = useNavigation<StackTypes>();
  return (
      <View style={styles.wrapper}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>PetCuidado</Text>
        <Text style={styles.subTitle}>Vamos começar!</Text>
        <View style={styles.textWrapper}>
          <Text style={styles.description}>Faça o login para acompanhar as datas de vacinação dos seus pets.</Text>
        </View>
     
        <Button onPress={() => {navigation.navigate("Login")}}>Login</Button>
        <Button onPress={() => {navigation.navigate("UserRegister")}} secondary>Registre-se</Button>
      </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    flex: 1,
    height: "100%"
  },
  title: {
    fontWeight: "700",
    fontSize: designTokens.fontSizeMd
  },
  subTitle: {
    fontWeight: "700",
    fontSize: designTokens.fontSizeXs
  },
  description: {
    fontSize: designTokens.fontSizeXxs,
    color: designTokens.colorNeutralDark,
    marginBottom: 40,
    lineHeight: 19.2,
    alignItems: "center"
  },
  textWrapper: {
    width: '100%',
    justifyContent: "center",
    alignItems: "center"
  }
});
