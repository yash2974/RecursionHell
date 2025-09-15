/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import "./global.css"
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import Home from './components/Main/Home';
import { NavigationContainer } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import SignUp from './components/Auth/SignUp';
import VerifyEmail from './components/Auth/VerifyEmail';
import SignIn from './components/Auth/SignIn';
import DrawerComponent from './components/Drawer/Drawer';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppContent/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export type RootStackParamList = {
  SignUp: undefined;
  Home: undefined;
  VerifyEmail: undefined;
  SignIn: undefined;
  Drawer: undefined;
}
export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function handleAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  console.log(user)
  return (
    <RootStack.Navigator initialRouteName={user ? user.emailVerified ? "Drawer" : "VerifyEmail" : "SignIn"}>
      <RootStack.Screen name="Drawer" component={DrawerComponent} options={{headerShown: false}}/>
      <RootStack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
      <RootStack.Screen name="VerifyEmail" component={VerifyEmail} options={{headerShown: false}}/>
      <RootStack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
    </RootStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
