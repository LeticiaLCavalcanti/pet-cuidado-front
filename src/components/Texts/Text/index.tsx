import { StyleSheet, Text as TextNative, TextProps } from "react-native";
import React from "react";
import * as designTokens from "../../../styles/designTokens";

export interface Props extends TextProps {
    children: any;
    style?: any;
}

export default function Text({children, style}: Props) {
  return <TextNative style={[styles.body, style]}>{children}</TextNative>;
}

const styles = StyleSheet.create({
  body: {
    fontSize: designTokens.fontSizeXxs
      }
});
