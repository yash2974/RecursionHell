import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAuth, createUserWithEmailAndPassword } from '@react-native-firebase/auth';



const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignUp = () => {
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                }

                console.error(error);
        }); 
    }
    return (
        <SafeAreaView className='flex-1'>
            <View>
                <Text>SignUp</Text>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity className='bg-slate-900 w-28 h-8' onPress={()=>createUserWithEmailAndPassword} />
            </View>
        </SafeAreaView>
    )
}

export default SignUp