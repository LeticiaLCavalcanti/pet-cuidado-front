import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Text from '../Texts/Text'
import * as designTokens from "../../styles/designTokens";

interface Props {
  label: string,
  onPress?: any,
  style?: any
}

export default function NewAvatar({label, onPress, style}: Props) {
  return (
    <View style={[{alignItems: "center", justifyContent: "center"}, style]}>
      <TouchableOpacity style={styles.addAvatar} onPress={onPress}><Text style={{color: designTokens.colorPink200}}>+</Text></TouchableOpacity>
      <Text style={styles.labels}>
        {label}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    addAvatar: {
      backgroundColor: designTokens.colorPink700,
      borderWidth: 1,
      borderRadius: 8,
      borderStyle: 'dotted',
      borderColor: designTokens.colorPink200,
      padding: designTokens.spacingInsetSm,
      alignItems: "center",
      justifyContent: "center",
      width: 60,
      height: 60,
      marginBottom: 10,
      fontWeight: 600
    },
    labels: {
      marginBottom: 10,
      fontWeight: designTokens.fontWeightBold
    }
  });