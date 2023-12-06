import { StyleSheet, View } from "react-native";
import * as designTokens from "../styles/designTokens";
import Text from "../components/Texts/Text";
import Button from "../components/Button";
import Input from "../components/Input/index";
import { Link } from "@react-navigation/native";
import NewAvatar from "../components/NewAvatar/NewAvatar";

export default function Login() {
  return (
    <View style={styles.wrapper}>
      <Input placeholder={"Nome"} />
      <Input placeholder={"E-mail"} />
      <Input placeholder={"Crie sua senha"} />

      <NewAvatar label="Avatar"></NewAvatar>

      <Text style={{ marginBottom: 48 }}>
        Eu concordo com{" "}
        <Link to="" style={styles.link}>
          Termos de Serviço{" "}
        </Link>
        e{" "}
        <Link to="" style={styles.link}>
          Política de Privacidade
        </Link>
      </Text>

      <Button onPress={() => alert("clicou")}>Registrar</Button>
      <Text>
        Já possui uma conta?{" "}
        <Link to={{screen: 'PetRegister'}} style={styles.link}>
          Faça Login
        </Link>
      </Text>
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
  link: {
    textAlign: "right",
    color: designTokens.colorPink200,
    fontSize: designTokens.fontSizeXxs,
    marginBottom: 48,
  },
});
