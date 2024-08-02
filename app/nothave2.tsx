import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { router } from "expo-router";

export default function Login() {
  const onPressLogin = () => {
    router.replace("/home");
  };

  return (
    <View>
      <Pressable onPress={() => router.push("home")}>
        <Image
          style={styles.backbutton}
          source={require("../assets/images/138.png")}
        />
      </Pressable>
      <Image
        style={styles.leaderboard}
        source={require("../assets/images/pic.png")}
      />
                    <Pressable onPress={() => router.back()}>
          <Image
            style={styles.back}
            source={require("../assets/images/backbutton.png")}
          />
        </Pressable>
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
    left: 220,
    zIndex: 100,
  },
  back:{
    position:"absolute",
    top:-790,
    left:50,
      },
});
