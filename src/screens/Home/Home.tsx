import { StatusBar } from 'expo-status-bar';
import React from "react";
import {Text, View} from 'react-native';
import styles from "./HomeStyles";
import { CpsLogo } from '../../components/CpsLogo/CpsLogo';

export default function Home(){
    return(
      <View style={styles.container}>
        <CpsLogo/>
<Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        </View>
        
    );
}
    
