import AppStatusBar from "@/layout/AppStatusBar";
import React from "react";
import { Text, View, ScrollView } from 'react-native'

const Home = () => {
    return (
    <ScrollView className="bg-[#101010] h-full" showsVerticalScrollIndicator={false}>
        <Text style={{ color: "red" }}>Supun</Text>
      </ScrollView>
    )
}

export default Home;
