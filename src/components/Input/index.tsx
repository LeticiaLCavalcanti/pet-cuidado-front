import { StyleSheet, TextInput, TextInputProps  } from "react-native";
import React from "react";
import * as designTokens from "../../styles/designTokens";

export interface Props extends TextInputProps{
  placeholder: string,
}

export default function Input({placeholder}: Props) {
  return <TextInput style={styles.input} placeholder={placeholder}/>;
}

const styles = StyleSheet.create({
  input: {
    height: 56,
    width: "100%",
    backgroundColor: designTokens.colorNeutralLight,
    padding: designTokens.spacingInsetSm,
    borderColor: designTokens.colorNeutralMedium,
    borderWidth: designTokens.borderWidthThin,
    borderRadius: designTokens.borderRadiusSm,
    marginBottom: designTokens.spacingStackXs,
  }
});
