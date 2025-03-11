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
      <Text className="font-bold text-lg my-10">The first App</Text>
      <Link href="/sign-in">Sign in</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/privacy">Privacy</Link>
      <Link href="/properties/2">Property 1</Link>
    </View>
  );
}
