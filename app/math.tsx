import LevelButton from "@/components/LevelButton";
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
export default function math() {
  const router = useRouter();

  return (
    <View>
     
      <Image
        style={styles.dog}
        source={require("../assets/images/Group 31.png")}
      ></Image>
      <Image
        style={styles.subjectmath}
        source={require("../assets/images/subjectmath.png")}
      ></Image>
      <Image
        style={styles.stretch}
        source={require("../assets/images/lastlevel.png")}
      ></Image>
      <Image
        style={styles.levelbutton}
        source={require("../assets/images/levelbutton.png")}
      />

      <Image
        style={styles.sigma}
        source={require("../assets/images/giftlevel.png")}
      ></Image>
      <Image
        style={styles.levelbutton2}
        source={require("../assets/images/levelbutton.png")}
      />

      <Image
        style={styles.levelbutton3}
        source={require("../assets/images/levelbutton.png")}
      />

      <Image
        style={styles.levelbutton4}
        source={require("../assets/images/levelbutton.png")}
      />

      <Pressable
        onPress={() => {
          router.push("level1");
        }}
      >
        <Image
          style={styles.levelbutton5}
          source={require("../assets/images/levelbutton.png")}
        />
        <Image
          style={styles.star}
          source={require("../assets/images/star.png")}
        ></Image>
      </Pressable>
      <Image
        style={styles.dotline}
        source={require("../assets/images/dotline.png")}
      ></Image>
      
    </View>
  );
}
const styles = StyleSheet.create({
  subjectmath: {
    position: "absolute",
    top: 73,
    left: 57,
  },
  stretch: {
    position: "absolute",
    left: 75,
    top: 227,
  },
  sigma: {
    position: "absolute",
    zIndex: 7,
    width: 45,
    height: 45,
    left: 115,
    top: 420,
  },

  levelbutton: {
    position: "absolute",
    top: 290,
    right: 70,
    width: 90,
    height: 90,
  },
  levelbutton2: {
    position: "absolute",
    top: 404,
    left: 92,
    width: 90,
    height: 90,
  },
  levelbutton3: {
    position: "absolute",
    right: 70,
    top: 473,
    width: 90,
    height: 90,
  },
  levelbutton4: {
    position: "absolute",
    left: 92,
    top: 582,
    width: 90,
    height: 90,
  },
  levelbutton5: {
    position: "absolute",
    right: 70,
    top: 480,
    width: 90,
    height: 90,
  },
  star: {
    position: "absolute",
    zIndex: 7,
    width: 45,
    height: 45,
    right: 92,
    top: 493,
  },

  leftarrow: {
    position: "absolute",
    top: -100,
    left: 45,
  },
  rightarrow: {
    position: "absolute",
    top: -100,
    right: 60,
  },
  dog: {
    top: 658,
    left: 33,
    zIndex: 1000,
  },
  dotline: {
    top:438,
    left:190,
  }
});
