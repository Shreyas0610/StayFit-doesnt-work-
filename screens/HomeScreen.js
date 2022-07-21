import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import DrawerNavigator from "../navigation/DrawerNavigator"
import firebase from "firebase";


export default function HomeScreen(){
    return(
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    )
}