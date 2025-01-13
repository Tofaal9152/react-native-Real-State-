import React from "react";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "components/constants/images";
import icons from "components/constants/icons";

export default function Property() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Mock property data (replace with real API call)
  const property = {
    id,
    title: "Modern Apartment",
    location: "Adi Tangail, Japan",
    price: "$25,000",
    description:
      "This modern apartment is located in a beautiful area with stunning views. Perfect for families and individuals looking for a serene environment.",
    image: images.japan, // Replace with your image source
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerClassName="p-3">
        {/* Back Button */}

        <TouchableOpacity
          onPress={() => router.back()}
          className="flex flex-row"
        >
          <View className="bg-slate-200 gap-2 rounded-full p-2">
            <Image className="size-7" source={icons.backArrow} />
          </View>
        </TouchableOpacity>

        {/* Property Image */}
        <Image
          className="w-full h-64 rounded-xl mt-4"
          source={property.image}
          style={{ resizeMode: "cover" }}
        />

        {/* Property Details */}
        <View className="mt-4">
          <Text className="text-2xl font-bold text-gray-800">
            {property.title}
          </Text>
          <Text className="text-gray-500 text-lg">{property.location}</Text>
          <Text className="text-green-600 text-xl font-semibold mt-2">
            {property.price}
          </Text>

          {/* Description */}
          <Text className="text-gray-700 text-base mt-4">
            {property.description}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
