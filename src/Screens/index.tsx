import React, { ReactNode } from "react";
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  DrawerActions
} from "@react-navigation/native";

import { View, Text, StyleSheet, Button } from "react-native";

// import { AuthContext } from "./context";

interface RoutesProps {
  children: ReactNode;
  navigation?: NavigationProp<ParamListBase>;
  route?: RouteProp<ParamListBase>;
}

const ScreenContainer = ({ children }: RoutesProps) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }: RoutesProps) => (
  <ScreenContainer>
    <Text>Master List Screen</Text>
    <Button
      title="React Native by Example"
      onPress={() =>
        navigation!.navigate("Details", { name: "React Native by Example" })
      }
    />
    <Button
      title="React Native School"
      onPress={() =>
        navigation?.navigate("Details", { name: "React Native School" })
      }
    />
    <Button title="Drawer" onPress={() => navigation?.dispatch(DrawerActions.toggleDrawer())} />
  </ScreenContainer>
);

export const Details = ({ route }: RoutesProps) => (
    <ScreenContainer>
      <Text>Details Screen</Text>
      {route!.params!.name && <Text>{route?.params?.name}</Text>}
    </ScreenContainer>
  );

export const Search = ({ navigation }: RoutesProps) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Search 2" onPress={() => navigation?.navigate('Search2')} />
    <Button title="React Native School" onPress={() => navigation?.navigate('Home', {
      screen: 'Details',
      params: {name: 'React Native School'}
    })} />
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

export const Profile = ({ navigation }: RoutesProps) => {
  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation?.dispatch(DrawerActions.toggleDrawer())} />
      <Button title="Sign Out" onPress={() => alert("todo!")} />
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const SignIn = ({ navigation }: RoutesProps) => {
  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => alert("todo!")} />
      <Button
        title="Create Account"
        onPress={() => navigation?.navigate("CreateAccount")}
      />
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => alert("todo!")} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});
