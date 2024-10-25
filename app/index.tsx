import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { useUser } from "@clerk/clerk-react";

export default function Index() {

  const { user } = useUser();
  console.log("user", user);
  return (
    <View

    >
      {!user ? <Redirect href={"/login"} /> : <Text>Login Succes</Text>}
    </View>
  );
}
