import { StyleSheet, Text, TouchableOpacity, View, ViewProps } from "react-native";
import React from "react";
import * as designTokens from "../../styles/designTokens";

interface Props extends ViewProps{
  children: string;
  secondary?: boolean;
  onPress?: any
}

export default function Button(props: Props) {
  return (
    <View>
      {props.secondary ? (
        <TouchableOpacity style={styles.buttonSecondary} onPress={props.onPress}>
          <Text style={styles.textSecondary}>{props.children}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonPrimary} onPress={props.onPress}>
          <Text style={styles.textPrimary}>{props.children}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: designTokens.colorPurple200,
    borderRadius: designTokens.borderRadiusPill,
    padding: designTokens.spacingInsetSm,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    marginBottom: 10,
    fontWeight: 600
  },
  buttonSecondary: {
    backgroundColor: designTokens.colorNeutralLightest,
    borderRadius: designTokens.borderRadiusPill,
    borderColor: designTokens.colorPurple300,
    borderWidth: 1,
    padding: designTokens.spacingInsetSm,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    marginBottom: 10,
    fontWeight: 600
  },
  textPrimary: {
    color: designTokens.colorNeutralLightest,
    fontSize: designTokens.fontSizeXxs,
  },
  textSecondary: {
    color: designTokens.colorPurple300,
    fontSize: designTokens.fontSizeXxs,
  },
});
