import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";
import AppStatusBar from "@/layout/AppStatusBar";

const Index = () => {
    return (
         <SafeAreaView className="flex-1">
                     <Text className="text-red-700 text-lg font-bold">Index</Text>
                     <Link href="/home" className="text-white">Home</Link>
         </SafeAreaView>
    );
};

export default Index;