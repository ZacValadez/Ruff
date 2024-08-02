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
export default function math({ onLeftArrowPress, onRightArrowPress }) {
  const router = useRouter();

  return (
    <View>
            <Image
        style={styles.background}
        source={require("../assets/images/subjectback.png")}
      ></Image>
     <Image       style={styles.math}
     source={require("../assets/images/Group 95.png")}></Image>
      <Image
        style={styles.dog}
        source={require("../assets/images/Group 31.png")}
      ></Image>
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
      <View style={styles.container}>
      <Arrows
        top={-96}
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
  dog: {
    top: 658,
    left: 33,
    zIndex: 1000,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  math:{
    position:"absolute",
    left:57,
    top:73,
  },
});
