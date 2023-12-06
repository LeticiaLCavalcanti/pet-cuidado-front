import { StyleSheet, View } from "react-native";
import * as designTokens from "../../styles/designTokens";
import React from "react";
import Text from "../Texts/Text";
import Avatar from "../Avatar/Avatar";
import Icon from "react-native-vector-icons/Entypo";

export interface Props {
  title: string;
  subtitle: string;
}

export default function DetailsCard({ title, subtitle }: Props) {
  return (
    <View style={styles.wrapper}>
      <Avatar>
        <Text>
          <Icon name="baidu" size={18} />
        </Text>
      </Avatar>
      <View style={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.edit}>
        <Text>
          <Icon name="edit" size={18} />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: designTokens.colorNeutralMedium,
    width: "100%",
    height: 86,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "700",
    fontSize: designTokens.fontSizeXs,
  },
  subtitle: {
    color: designTokens.colorNeutralDark,
  },
  edit: {
    backgroundColor: designTokens.colorNeutralLightest,
    padding: 11,
    borderRadius: 8,
    width: 40,
    height: 40,
  },
});
