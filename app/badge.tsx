import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { router, useRouter } from "expo-router";
export default function settings() {
  return (
    <View>
      <Image
        style={styles.background}
        source={require("../assets/images/badgebackground.png")}
      />
      <Image
        style={styles.leaderboard}
        source={require("../assets/images/badge.png")}
      />
      <Pressable onPress={() => router.back()}>
        <Image
          style={styles.backbutton}
          source={require("../assets/images/backforbadge.png")}
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    position: "absolute",
top:-400,
  },
  leaderboard: {
    position: "absolute",
  },
  backbutton: {
    top: 780,
    left: 41,
  },
});
