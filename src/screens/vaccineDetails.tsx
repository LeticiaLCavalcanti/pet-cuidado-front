import { StyleSheet, View, Image } from "react-native";
import * as designTokens from "../styles/designTokens";
import Card from "../components/Card/Card";
import Text from "../components/Texts/Text";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes";
import DetailsCard from "../components/DetailsCard/DetailsCard";
import CardMini from "../components/CardMini";

export default function VaccineDetails() {
  const navigation = useNavigation<StackTypes>();

  return (
    <View style={styles.wrapper}>
      <DetailsCard title="V4 Polivalente" subtitle="14/10/2024"></DetailsCard>
      <Card style={{ marginTop: -14 }}>
        <View>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            mattis sem sodales malesuada vehicula. Quisque eu elit eget diam
            accumsan faucibus. Etiam sed convallis mauris.
          </Text>
          <Text>
            venc: 14/07/2023
          </Text>
          <Image style={{width: 320, height: 100, resizeMode: 'contain', marginTop: 20}} source={require('../../assets/vacina.png')} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    flex: 1,
    heigth: "100%",
    paddingTop: 30
  },
  label: {
    fontSize: designTokens.fontSizeXxs,
    color: designTokens.colorPurple200,
  },
  content: {
    fontSize: designTokens.fontSizeXs,
    fontWeight: "900",
    marginBottom: 16,
  },
});
