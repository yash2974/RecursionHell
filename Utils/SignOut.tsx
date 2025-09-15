import { getAuth, signOut } from "@react-native-firebase/auth";
import { RootNavigationProp } from "../App";
import { Alert } from "react-native";

export const SignOut = async (navigation) => {
    const auth = getAuth();
    const user = auth.currentUser
    try {
        await signOut(auth);
        console.log("logged out");
            navigation.navigate("SignIn")
        }
        catch (error) {
            console.log ("Error");
            Alert.alert("retry!")
        }
    
}