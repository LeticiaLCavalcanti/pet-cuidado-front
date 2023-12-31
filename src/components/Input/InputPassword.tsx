import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/Entypo";
import * as designTokens from '../../styles/designTokens'

export interface Props extends TextInputProps{
  placeholder: string,
}

export default function InputPassword({placeholder, ...rest}: Props) {
  const [input, setInput] = useState("");
  const [hitdePass, setHidePass] = useState(true)

  return (
    <View style={styles.InputContainer}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={hitdePass}
        onChangeText={(texto) => {
          setInput(texto);
        }}
        {...rest}
      />
      <TouchableOpacity onPress={() => {setHidePass(!hitdePass)}}>
        <Icon name={hitdePass ? 'eye-with-line' : 'eye'} size={20} color={"#ccc"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    width: "100%",
    height: 56,
    padding: designTokens.spacingInsetSm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: designTokens.colorNeutralLight,
    borderColor: designTokens.colorNeutralMedium,
    borderWidth: designTokens.borderWidthThin,
    borderRadius: designTokens.borderRadiusSm,
    marginBottom: designTokens.spacingStackXs,
  },
});
