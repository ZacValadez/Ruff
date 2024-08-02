import LevelButton from "@/components/LevelButton";
import Arrows from '@/components/Arrows';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  Image,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
export default function writing({ onLeftArrowPress, onRightArrowPress }) {
  const router = useRouter();

  return (
    <View>
          <Image
        style={styles.background}
        source={require("../assets/images/subjectback.png")}
      ></Image>
      <Image
        style={styles.levelwriting}
        source={require("../assets/images/Group 89.png")}
      ></Image>
      <Pressable
        onPress={() => {
          router.push("writing1");
        }}
      >
        <Image
          style={styles.levelbutton1}
          source={require("../assets/images/levelbutton.png")}
        />
        <Image
          style={styles.star}
          source={require("../assets/images/star.png")}
        ></Image>
        <Image
          style={styles.levelbutton2}
          source={require("../assets/images/levelbutton.png")}
        />
      </Pressable>
      <Image
        style={styles.dog3}
        source={require("../assets/images/dog3.png")}
      ></Image>
      <View style={styles.container}>
      {/* Your Writing component content */}
      <Arrows
        top={-85}
        left={70}
        right={70}
        onLeftArrowPress={onLeftArrowPress}
        onRightArrowPress={onRightArrowPress}
      />
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background:{
    position:"absolute",
    top:0,
    left:-300,
    width:900,
    height:900,
      },
  levelwriting: {
    position: "absolute",
    top: 73,
    left: 33,
  },
  levelbutton1: {
    position: "absolute",
    left: 30,
    top: 290,
    width: 79,
    height: 79,
  },
  star: {
    position: "absolute",
    zIndex: 2,
    width: 45,
    height: 45,
    left: 47,
    top: 300,
  },
  levelbutton2: {
    position: "absolute",
    left: 294,
    top: 290,
    width: 79,
    height: 79,
  },
  dog3: {
    top: 660,
    left: 0,
    zIndex: 1000,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
