import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAuth, sendEmailVerification } from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { RootNavigationProp } from '../../App'

const VerifyEmail = () => {

    const navigation = useNavigation<RootNavigationProp>();
    
    const handleVerifyEmail = async () => {
        const auth = getAuth();
        console.log(auth.currentUser)
        if (auth.currentUser?.emailVerified) {
            navigation.navigate("Home")
        }
        else {
            Alert.alert("Not Verified!")
        }
    }

    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1 justify-center items-center'>
                <Text>Verify Your Email</Text>    
                <TouchableOpacity className='border-b-green-500 rounded-xl px-8 py-4' onPress={handleVerifyEmail}>
                    <Text>
                        Lets Go!
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default VerifyEmail