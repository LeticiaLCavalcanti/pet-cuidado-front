import { View } from "react-native";
import Container from "./src/components/Container/Container";
import StackComponent from "./src/routes";

export default function App() {
  return (
    <Container>
     <StackComponent />
    </Container>
  );
}