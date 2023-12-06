import { StyleSheet, View } from "react-native";
import * as designTokens from "../../styles/designTokens";
import React from "react";
import Text from "../../components/Texts/Text";
import Avatar from "../Avatar/Avatar";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";

export interface Props {
  vaccineName: string;
  date: string
}

export default function VaccinesListCard({ vaccineName, date }: Props) {
  const navigation = useNavigation<StackTypes>();

  return (
    <View style={styles.wrapper}>
      <Avatar>
        <Text>
          <Icon name="dot-single" size={18} />
        </Text>
      </Avatar>
      <View style={{alignItems: "flex-start", justifyContent: "flex-start"}}>
        <Text style={styles.label}>{vaccineName}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <View style={styles.edit}>
        <Text>
          <Icon onPress={() => {navigation.navigate("VaccineDetails")}} name="dots-three-horizontal" size={18} />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: designTokens.colorNeutralLight,
    width: "100%",
    height: 86,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    justifyContent: "space-between",
    marginVertical: 8
  },
  label: {
    fontWeight: "700",
    fontSize: designTokens.fontSizeXs,
  },
  date: {
    color: designTokens.colorPink200
  },
  edit: {
    padding: 11,
    borderRadius: 8,
    width: 40,
    height: 40,
  },
});
