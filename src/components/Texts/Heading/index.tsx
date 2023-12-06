import { StyleSheet, Text as TextNative } from "react-native";
import React from "react";
import * as designTokens from "../../../styles/designTokens";

interface Props {
    children: string
}

export default function Heading(props: Props) {
  return <TextNative style={styles.body}>{props.children}</TextNative>;
}

const styles = StyleSheet.create({
  body: {
    fontSize: designTokens.fontSizeMd
      },
});
