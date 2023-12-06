import { StyleSheet, View, TouchableOpacity } from 'react-native';
import * as designTokens from "../../styles/designTokens";

interface Props {
  children?: any
}

export default function Avatar({children}: Props) {
  return (
    <View style={[{alignItems: "center", justifyContent: "center"}, styles.addAvatar]}>
       {children}
    </View>
  )
}

const styles = StyleSheet.create({
    addAvatar: {
      backgroundColor: designTokens.colorPink700,
      borderRadius: 8,
      padding: designTokens.spacingInsetSm,
      alignItems: "center",
      justifyContent: "center",
      width: 60,
      height: 60,
      fontWeight: 600
    },
  });