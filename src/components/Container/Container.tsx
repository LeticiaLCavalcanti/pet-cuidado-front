import { StyleSheet, View } from "react-native";
import React from "react";
import * as designTokens from "../../styles/designTokens";

interface Props {
    children: any
}

export default function Container(props: Props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: designTokens.spacingInlineMd,
    flex: 1,
      },
});
