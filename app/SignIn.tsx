import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const handleLogin = () => {
    console.log("Login with Google");
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full p-2">
        <Image
          source={images.onboarding}
          className="w-full h-4/6 "
          resizeMethod="scale"
        />
        <View className="p-4 mx-auto w-full text-center gap-1.5  flex flex-col items-center justify-center">
          <Text className="uppercase text-lg font-medium">
            Welcome to Waiting vaya
          </Text>
          <Text className="text-3xl text-center font-bold">
            Bringing You Closer to Your
          </Text>
          <Text className="text-blue-500 text-3xl text-center font-bold">
            Dream Idea
          </Text>
          <View className=" gap-2 mt-4">
            <Text className="font-medium text-center">
              Login with Google to Get Started
            </Text>

            <TouchableOpacity className="gap-2 flex flex-row items-center px-8 py-3 border  shadow-lg bg-white  rounded-full">
              <Image source={icons.google} className="w-6 h-6" />
              <Text onPress={handleLogin} className="text-center font-medium text-lg ">
                Sign In with Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
// import { Client, Account, ID } from 'react-native-appwrite';

// const client = new Client()
//     .setProject('6782c23b003189ab736c')
//     .setPlatform('com.tolax.waitingvaya');
