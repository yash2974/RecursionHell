import { View, Text, Touchable, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { getAuth, signOut} from '@react-native-firebase/auth'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { RootNavigationProp } from '../../App'
import DrawerComponent from '../Drawer/Drawer'

const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigation = useNavigation<RootNavigationProp>();
  

  return (
    <SafeAreaView className='flex-1'>
        <View className='flex-1 justify-center items-center'>
            <Text>Recursion</Text>
        </View>
    </SafeAreaView>
  )
}

export default Home