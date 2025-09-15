import { View, Text, Touchable, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { getAuth, signOut} from '@react-native-firebase/auth'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { RootNavigationProp } from '../../App'

const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigation = useNavigation<RootNavigationProp>();
  const signOutApp = async () => {
    try {
      await signOut(auth)
      console.log("logged out");
      navigation.navigate("SignIn")
    }
    catch (error) {
      console.log ("Error");
      Alert.alert("retry!")
    }
  }

  return (
    <SafeAreaView className='flex-1'>
        <View className='flex-1 justify-center items-center'>
            <Text>Recursion</Text>
            <TouchableOpacity onPress={signOutApp}>
              <Text>Sign Out</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Home