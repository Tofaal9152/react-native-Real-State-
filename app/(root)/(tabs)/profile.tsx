import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";

// Dummy Data
const dummyData = [
  { id: 1, title: "Account Settings" },
  { id: 2, title: "Notifications" },
  { id: 3, title: "Privacy & Security" },
  { id: 4, title: "Help & Support" },
  { id: 5, title: "About Us" },
];

const SettingsTab = ({ title }: { title: any }) => (
  <TouchableOpacity className="flex items-center justify-between p-4 flex-row">
    <Text className="font-medium text-lg">{title}</Text>
    <Image className="size-7" source={icons.rightArrow} />
  </TouchableOpacity>
);

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80, paddingHorizontal: 16 }}
      >
        {/* Header */}
        <View className="flex items-center justify-between p-4 flex-row">
          <Text className="font-bold text-xl">Profile</Text>
          <Image className="size-7" source={icons.bell} />
        </View>

        {/* Profile Info */}
        <View className="flex items-center justify-center">
          <View className="relative">
            <Image className="rounded-full size-40" source={images.avatar} />
            <TouchableOpacity>
              <Image
                className="size-8 absolute bottom-0 right-2"
                source={icons.edit}
              />
            </TouchableOpacity>
          </View>
          <Text className="font-bold text-xl">John Doe</Text>
          <Text className="text-gray-500">Web Developer</Text>
        </View>

        {/* Settings Tabs */}
        <View className="mt-4">
          {dummyData.map((item) => (
            <SettingsTab key={item.id} title={item.title} />
          ))}
        </View>
        {/* Logout Button */}
        <Link href={"/SignIn"} asChild className="border-t border-gray-100 mt-4">
          <TouchableOpacity className="flex items-center justify-between p-4 flex-row">
            <Text className="font-medium text-lg">Sign In</Text>
            <Image className="size-7" source={icons.google} />
          </TouchableOpacity>
        </Link>
        <View className=" border-gray-100">
          <TouchableOpacity className="flex items-center justify-between p-4 flex-row">
            <Text className="font-medium text-lg">Logout</Text>
            <Image className="size-7" source={icons.logout} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
