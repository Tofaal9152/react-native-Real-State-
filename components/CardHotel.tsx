import images from "components/constants/images";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
const CardHotel = () => {
  return (
    <Link href={"/properties/1"} asChild>
      <TouchableOpacity className="flex flex-col gap-3 border border-slate-200   rounded-2xl p-3 w-[48%]  ">
        <Image
          className="rounded-xl w-full h-40"
          source={images.newYork}
          resizeMode="cover"
        />
        <View className="p-4 gap-1 flex flex-col ">
          <Text className="text-xl font-semibold">Modern Apartment</Text>
          <Text className="text-sm font-semibold text-gray-500">
            Adi Tangail, Japan
          </Text>
          <Text className="text-sm font-semibold text-blue-600">$25,000</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default CardHotel;
