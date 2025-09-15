import * as React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import Home from '../Main/Home';
import { getAuth } from '@react-native-firebase/auth';
import { SignOut } from '../../Utils/SignOut';
import { RootNavigationProp } from '../../App';


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    const navigation = useNavigation<RootNavigationProp>();
    return (
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Sign Out" onPress={()=>SignOut(navigation)}/>
        </DrawerContentScrollView>
    );
}

export default function DrawerComponent() {
    const auth = getAuth();

    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
}