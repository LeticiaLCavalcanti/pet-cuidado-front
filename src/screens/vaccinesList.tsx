import React from "react";
import { StyleSheet, View} from "react-native";
import VaccinesListCard from "../components/VaccinesList/VaccinesList";

export default function VaccinesList() {
  return (

      <View style={styles.wrapper}>
       <VaccinesListCard vaccineName="Vacina 1" date="Jul 10, 2024" />
       <VaccinesListCard vaccineName="Vacina 2" date="Jul 10, 2024" />
       <VaccinesListCard vaccineName="Vacina 3" date="Jul 10, 2024" />
       <VaccinesListCard vaccineName="Vacina 4" date="Jul 10, 2024" />
      </View>

  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: 30
  },
});
