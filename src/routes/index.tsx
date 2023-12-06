import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

import Begin from '../screens/begin';
import Login from '../screens/login';
import UserRegister from '../screens/userRegister';
import PetDetails from '../screens/petDetails';
import PetRegister from '../screens/petRegister';
import PetsDashboard from '../screens/petsDashboard';
import VaccineRegister from '../screens/vaccineRegister';
import VaccinesList from '../screens/vaccinesList';
import VaccineDetails from '../screens/vaccineDetails';


const Stack = createNativeStackNavigator();

type StackNavigation = {
    Begin: undefined;
    Login: undefined;
    UserRegister: undefined;
    PetDetails: undefined;
    PetRegister: undefined;
    PetsDashboard: undefined;
    VaccineRegister: undefined;
    VaccinesList: undefined;
    VaccineDetails: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function StackComponent() {
  const borderNone = { headerShadowVisible: false,
  headerBackTitleVisible: false }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={Begin} options={() => (borderNone)} />
        <Stack.Screen name="Login" component={Login} options={() => (borderNone)} />
        <Stack.Screen name="UserRegister" component={UserRegister} options={() => (borderNone)} />
        <Stack.Screen name="PetDetails" component={PetDetails} options={() => (borderNone)} />
        <Stack.Screen name="PetRegister" component={PetRegister} options={() => (borderNone)} />
        <Stack.Screen name="PetsDashboard" component={PetsDashboard} options={() => (borderNone)} />
        <Stack.Screen name="VaccineRegister" component={VaccineRegister} options={() => (borderNone)} />
        <Stack.Screen name="VaccineDetails" component={VaccineDetails} options={() => (borderNone)} />
        <Stack.Screen name="VaccinesList" component={VaccinesList} options={() => (borderNone)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}