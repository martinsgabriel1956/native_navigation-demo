import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  SignIn,
  CreateAccount,
  Home,
  Profile,
  Search,
  Search2,
  Details,
  Splash,
} from "./Screens";

type AuthProps = {
  userToken: string | null;
}

import { AuthContext } from "./context/authContext";

const AuthStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route!.params!.name,
      })}
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Search" component={Search} />
    <ProfileStack.Screen name="Search2" component={Search2} />
  </ProfileStack.Navigator>
);

const RootStackScreen = ({ userToken }: AuthProps) => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    {userToken ? (
      <RootStack.Screen name="App" component={DrawerScreen} />
    ) : (
      <RootStack.Screen name="Auth" component={AuthStackScreen} />
    )}
  </RootStack.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Search" component={SearchStackScreen} />
  </Tabs.Navigator>
);

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account" }}
    />
  </AuthStack.Navigator>
);

export const Routes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState<string | null>();

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false), setUserToken("asfhg");
      },
      signUp: () => {
        setIsLoading(false), setUserToken("asfhg");
      },
      signOut: () => {
        setIsLoading(false), setUserToken(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
