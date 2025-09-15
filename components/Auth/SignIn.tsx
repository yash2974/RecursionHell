import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp} from '../../App';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation<RootNavigationProp>();
    const auth = getAuth();

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            if (userCredential.user.emailVerified){
                navigation.navigate("Home")
            }
            else {
                navigation.navigate("VerifyEmail")
            }
        }
        catch (error: any) {
            Alert.alert(error.message)
        }
    }

    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1 justify-center items-center gap-4'>
                    <Text>SignIn</Text>
                    <TextInput
                    className='border border-gray-300 px-4 py-2 w-72 rounded-xl'
                        placeholder='Email'
                        placeholderTextColor="#9CA3AF"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        className="border border-gray-300 rounded-xl px-4 py-2 w-72"
                        placeholder="Password"
                        placeholderTextColor="#9CA3AF"
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity className='bg-green-500 w-28 h-8 justify-center items-center' onPress={()=>handleSignIn()}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
                        <Text>Create Account</Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SignIn