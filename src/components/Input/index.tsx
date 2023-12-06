import { StyleSheet, TextInput  } from "react-native";
import React from "react";
import * as designTokens from "../../styles/designTokens";

interface Props {
    placeholder?: string
}

export default function Input({placeholder}: Props) {
  return <TextInput style={styles.input} placeholder={placeholder} />;
}

const styles = StyleSheet.create({
  input: {
    height: 56,
    width: "100%",
    backgroundColor: designTokens.colorNeutralLight,
    padding: 10,
    borderColor: designTokens.colorNeutralMedium,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 16,
  }
});
