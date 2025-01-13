import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "components/constants/images";
import { Link } from "expo-router";

const Card = () => {
  return (
    <Link href={"/properties/1"} asChild>
      <TouchableOpacity className="flex flex-row gap-3 relative">
        <Image
          className="rounded-2xl size-64 w-60 h-80"
          source={images.japan}
        />
        <Image
          className="rounded-2xl size-64 w-60 h-80 absolute"
          source={images.cardGradient}
        />
        <View className="absolute bottom-0 left-0 p-4 gap-1 flex flex-col ">
          <Text className="text-white text-xl  font-semibold">
            Modern Apartment
          </Text>
          <Text className="text-white text-sm font-semibold">
            Adi Tangail,Japan
          </Text>
          <Text className="text-white text-sm font-semibold">$25,000</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default Card;
