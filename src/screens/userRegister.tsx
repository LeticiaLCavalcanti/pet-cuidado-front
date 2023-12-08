import { StyleSheet, View } from "react-native";
import * as designTokens from "../styles/designTokens";
import Text from "../components/Texts/Text";
import Button from "../components/Button";
import Input from "../components/Input/index";
import { Link } from "@react-navigation/native";
import NewAvatar from "../components/NewAvatar/NewAvatar";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes";
import axios from "axios";

import { useForm, Controller, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export default function UserRegister() {
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
      const response = await axios.post(`${baseURL}/user/create`, data);
    
      if (response.status === 201) {
        console.log('Post criado com sucesso:', response.data);
        navigation.navigate("Login")

      } else {
        console.error('Erro ao criar o post:', response.status);
      }
    } catch (error: any) {
      console.error('Erro na requisição:', error.message);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Nome"
            value={value}
            onChangeText={(text) => {
              setValue('name', text);
              onChange(text);
            }}
          />
        )}
        name="name"
        defaultValue=""
        rules={{ required: 'Nome obrigatório' }}
      />
       {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

       <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="User name"
            value={value}
            onChangeText={(text) => {
              setValue('name', text);
              onChange(text);
            }}
          />
        )}
        name="username"
        defaultValue=""
      />
       {errors.username && <Text style={styles.error}>{errors.username.message}</Text>}

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
          <Input
            placeholder="Crie sua senha"
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

      <Button onPress={handleSubmit(onSubmit)}>Registrar</Button>
      <Text>
        Já possui uma conta?{" "}
        <Link to={{ screen: "PetRegister" }} style={styles.link}>
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
    height: "100%",
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
