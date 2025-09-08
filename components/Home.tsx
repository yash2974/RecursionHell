import { View, Text } from 'react-native'
import React from 'react'
import { getAuth } from '@react-native-firebase/auth'

import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    console.log(user.uid, user.email);
  } else {
    console.log('No user signed in');
  }
  return (
    <SafeAreaView className='flex-1'>
        <View className='flex-1 justify-center items-center'>
            <Text>Recursion</Text>
        </View>
    </SafeAreaView>
  )
}

export default Home