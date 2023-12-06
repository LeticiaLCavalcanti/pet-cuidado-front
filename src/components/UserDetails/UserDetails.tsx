import { StyleSheet, View } from 'react-native';
import * as designTokens from "../../styles/designTokens";
import React from 'react'
import Text from "../../components/Texts/Text";
import Avatar from '../Avatar/Avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface Props {
    userName: string
}

export default function UserDetails({userName}: Props) {
  return (
    <View style={styles.wrapper}>
        <Avatar />
        <Text style={styles.label}>Olá, {userName}!</Text>
        <View style={styles.edit}>
            <Text><Icon name="border-color" size={18} /></Text>
        </View>
    </View>   
  )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: designTokens.colorNeutralMedium,
        width: '100%',
        height: 86,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        justifyContent: "space-between"
        
    },
    label: {
        fontWeight: "700",
        fontSize: designTokens.fontSizeXs
    },
    edit: {
        backgroundColor: designTokens.colorNeutralLightest,
        padding: 11,
        borderRadius: 8,
        width: 40,
        height: 40
    }
})