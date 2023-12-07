import { StyleSheet, View} from "react-native";
import * as designTokens from "../styles/designTokens";
import Text from "../components/Texts/Text";
import Button from "../components/Button";
import Input from "../components/Input/index";
import { Link } from '@react-navigation/native';
import InputPassword from "../components/Input/InputPassword";


export default function Login() {
  return (
      <View style={styles.wrapper}>
        <Input placeholder={'Nome'} />
        <Input placeholder={'E-mail'} />
        <InputPassword placeholder="Insira sua senha" />
          <Link to="" style={styles.link}>
            <Text>
                Esqueceu sua senha?
            </Text>
          </Link>
        <Button onPress={() => alert("clicou")}>Login</Button>
        <Text>Não possui conta? <Link to={{screen: 'UserRegister'}} style={styles.link}>Registra-se</Link></Text>
      </View>
  )
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
  }
});
