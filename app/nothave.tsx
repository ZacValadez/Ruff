import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { router } from "expo-router";

export default function Login() {
  const onPressLogin = () => {
    router.replace("/home");
  };

  return (
    <View>
      <Pressable onPress={() => router.push("nothave2")}>
        <Image
          style={styles.backbutton}
          source={require("../assets/images/135.png")}
        />
      </Pressable>
      <Image
        style={styles.leaderboard}
        source={require("../assets/images/not have.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  leaderboard: {
    top: -60,
    zIndex: -5,
  },
  backbutton: {
    top: 823,
    left: 198,
    zIndex: 100,
  },
});
