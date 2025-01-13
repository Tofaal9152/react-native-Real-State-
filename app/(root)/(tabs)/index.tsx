import Card from "components/components/Card";
import CardHotel from "components/components/CardHotel";
import { dataFilters } from "components/constants/data";
import icons from "components/constants/icons";
import images from "components/constants/images";

import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="p-4"
      >
        {/* Header */}
        <View className="flex items-center justify-between flex-row">
          <View className="flex flex-row gap-2 items-center ">
            <Image className="rounded-full size-12" source={images.avatar} />
            <View className="flex flex-col">
              <Text className="text-slate-500 font-medium">Good Morning</Text>
              <Text className=" font-semibold text-slate-800">John Doe</Text>
            </View>
          </View>
          <Image className="size-7" source={icons.info} />
        </View>
        {/* Search */}
        <View className="bg-gray-100 rounded-md mt-3 px-2">
          <View className="flex flex-row gap-2 items-center">
            <Image className="size-5" source={icons.search} />
            <TextInput placeholder="Search..." />
          </View>
        </View>
        {/* Featured */}
        <View className="flex flex-row justify-between mt-4">
          <Text className="font-bold text-xl">Featured</Text>
          <TouchableOpacity>
            <Text className=" text-blue-600">Sell All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="flex flex-row gap-3 mt-3 "
        >
          {Array.from({ length: 10 })
            .fill(0)
            .map((item, index) => (
              <Card key={index} />
            ))}
        </ScrollView>
        {/* Recommendation */}
        <View className="flex flex-row justify-between mt-4">
          <Text className="font-bold text-xl">Our Recommendation</Text>
          <TouchableOpacity>
            <Text className=" text-blue-600">Sell All</Text>
          </TouchableOpacity>
        </View>
        {/* filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="flex flex-row gap-3 mt-3 "
        >
          {dataFilters.map((_, index) => (
            <Text
              key={_.id}
              className={`${
                index == 0 ? "bg-blue-600 text-white" : "bg-gray-100"
              }  font-medium p-2 px-4 rounded-lg`}
            >
              {_.title}
            </Text>
          ))}
        </ScrollView>
        {/* cards of hotels */}
        {/* Hotel Cards */}
        <View className="flex flex-wrap flex-row justify-between gap-3 mt-3 mb-20 ">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <CardHotel key={index} />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
