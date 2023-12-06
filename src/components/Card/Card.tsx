import { StyleSheet, View} from "react-native";
import React from 'react'
import * as designTokens from "../../styles/designTokens";

interface Props {
    children: any;
    style?: any;
}

export default function Card({children, style}: Props) {
  return (
    <View style={[styles.wrapper, style]}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: designTokens.colorNeutralMedium,
      width: '100%',
      minHeight: 320,
      borderRadius: 16,
      padding: 16,
      marginVertical: 16 
    },
  });