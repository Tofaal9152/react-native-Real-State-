import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="bg-red-700 text-white">Edit app/index.tsx to edit this screen.</Text>

      <Link href="/properties/1">Properties</Link>
      <Link href="/SignIn">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
    </View>
  );
}
