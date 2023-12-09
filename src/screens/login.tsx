import { StyleSheet, View } from "react-native";
import * as designTokens from "../styles/designTokens";
import Text from "../components/Texts/Text";
import Button from "../components/Button";
import Input from "../components/Input/index";
import { Link } from '@react-navigation/native';
import InputPassword from "../components/Input/InputPassword";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes";
import axios from "axios";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const baseURL = "https://api-petcuidado.onrender.com";
  const navigation = useNavigation<StackTypes>();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/auth/login`, data);
      
      if (response.status === 201) {
        
        const { token } = response.data;
       
        await AsyncStorage.multiSet([
          ['userToken', JSON.stringify(token)],
        ]);
  
        console.log('Usuário autenticado com sucesso:', response.data);
        navigation.navigate("PetDetails")

      } else {
        console.error('Erro ao criar ao autenticar usuário:', response.status);
      }
    } catch (error: any) {
      console.error('Erro na requisição:', error.message);
    }
  };

  // useEffect(() => {
  //   AsyncStorage.clear();

  //   const user = JSON.parse(AsyncStorage.getItem('userToken')) || null;

  //   if (user) 
  //   console.log({ loggedInUser: user });
  // }, [])

  return (
      <View style={styles.wrapper}>
        <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            placeholder={"E-mail"}
            value={value}
            defaultValue=""
            onChangeText={(text) => {
              setValue('email', text);
              onChange(text);
            }}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        )}
        name="email"
        rules={{
          required: "E-mail obrigatório",
          pattern: {
            message: "E-mail inválido",
            value: /^\b[A-Z0-9._%-]+@[A-Z0-9*-]+\.[A-Z]{2,4}\b$/i,
          },
        }}
      />
        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

        <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputPassword
            placeholder="Digite sua senha"
            value={value}
            secureTextEntry
            onChangeText={(text) => {
              setValue('password', text);
              onChange(text);
            }}
          />
        )}
        name="password"
        defaultValue=""
        rules={{
          required: "Senha obrigatória",
          minLength: 5,
        }}
      />
       {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
       
        <Link to="" style={styles.link}>
          <Text>
              Esqueceu sua senha?
          </Text>
        </Link>
      <Button  onPress={handleSubmit(onSubmit)}>Login</Button>
      <Text>Não possui conta? <Link to={{screen: 'UserRegister'}} style={styles.link}>Registre-se</Link></Text>
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
  },
  error: {
    color: designTokens.colorPink200,
    fontSize: designTokens.fontSizeXxxs,
    marginTop: -10,
    marginBottom:10
  }
});


