import React, { useState, useEffect } from 'react'
import {Slot} from "expo-router";
import {View, StatusBar} from 'react-native';
import "@/global.css"
import AppLoading from 'expo-app-loading';
import {useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins'
import AppStatusBar from '@/layout/AppStatusBar';

const height = StatusBar.currentHeight;

console.log("expo", height);

const Layout = () => {

    const [fontsLoad] = useFonts({
      'Poppins400Regular':Poppins_400Regular
    })

    if(!fontsLoad){return null}

    return (
      <View style={{ paddingTop:0, flex: 1, backgroundColor:"#101010"}}>
      <AppStatusBar />
      <Slot/>
      </View>
      );
}

export default Layout