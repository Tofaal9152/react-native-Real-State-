import CardHotel from "components/components/CardHotel";
import { dataFilters } from "components/constants/data";
import icons from "components/constants/icons";

import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="p-4"
      >
        {/* Header */}
        <View className="flex items-center justify-between flex-row">
          <View className="bg-slate-200 rounded-full p-2">
            <Image className="size-7" source={icons.backArrow} />
          </View>
          <Text className="text-xl font-bold">Search For your home</Text>

          <Image className="size-7" source={icons.bell} />
        </View>
        {/* Search */}
        <View className="bg-gray-100 rounded-md mt-3 px-2">
          <View className="flex flex-row gap-2 items-center">
            <Image className="size-5" source={icons.search} />
            <TextInput placeholder="Search..." />
          </View>
        </View>

        {/* filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="flex flex-row gap-3 mt-6 "
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

        {/* Hotel Cards */}
        <Text className={`font-extrabold text-2xl mt-4 rounded-lg`}>
          Found 23 Apartments
        </Text>
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
