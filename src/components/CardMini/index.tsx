import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import * as designTokens from "../../styles/designTokens";

interface Props {
  children: any;
  style?: any;
  type?: any;
  onPress?: any;
}

const female = designTokens.colorPink700;
const male = designTokens.colorPurple200;
const vaccine = designTokens.colorNeutralLightest;

export default function CardMini({ children, type, onPress }: Props) {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.wrapper,
            { backgroundColor: type ? (female ? male : vaccine) : "#FFDEE9" },
          ]}
        >
          {children}
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: designTokens.colorPink700,
    minWidth: 140,
    minHeight: 97,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  // male: {
  //   backgroundColor: designTokens.colorPurple200,
  // },
  // female: {
  //   backgroundColor: designTokens.colorPink700,
  // },
  // vaccine: {
  //   backgroundColor: designTokens.colorNeutralLightest,
  // }
});
