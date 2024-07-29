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
export default function reading() {
  const router = useRouter();

  return (
    <View>
     
      <Image
        style={styles.dog2}
        source={require("../assets/images/dog2.png")}
      ></Image>
   <Image
        style={styles.subjectreading}
        source={require("../assets/images/subjectreading.png")}
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
        style={styles.levelbutton2}
        source={require("../assets/images/giftbutton.png")}
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
          router.push("level1read");
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
           <Image
          style={styles.levelbutton6}
          source={require("../assets/images/levelbutton.png")}
        />
      </Pressable>
      <Image
        style={styles.dotlineread}
        source={require("../assets/images/2dotline.png")}
      ></Image>
       <Image
        style={styles.dotlineread2}
        source={require("../assets/images/dotlineread2.png")}
      ></Image>
             <Image
        style={styles.dotlineread3}
        source={require("../assets/images/dotlineread3.png")}
      ></Image>
                   <Image
        style={styles.dotlineread4}
        source={require("../assets/images/dotlineread4.png")}
      ></Image>
                   <Image
        style={styles.dotlineread5}
        source={require("../assets/images/dotlineread5.png")}
      ></Image>
                   <Image
        style={styles.dotlineread6}
        source={require("../assets/images/dotlineread6.png")}
      ></Image>

    </View>
  );
}
const styles = StyleSheet.create({
  subjectreading: {
    position: "absolute",
    top: 73,
    left: 57,
  },
  stretch: {
    position: "absolute",
    left: 27,
    top: 340,
  },
  levelbutton: {
    position: "absolute",
    top: 253,
    left: 170,
    width: 90,
    height: 90,
  },
  levelbutton2: {
    position: "absolute",
    top: 351,
    left: 289,
    width: 90,
    height: 90,
  },
  levelbutton3: {
    position: "absolute",
    left: 289,
    top: 542,
    width: 90,
    height: 90,
  },
  levelbutton4: {
    position: "absolute",
    left: 170,
    top: 651,
    width: 90,
    height: 90,
  },
  levelbutton5: {
    position: "absolute",
    right: 170,
    top: 180,
    width: 90,
    height: 90,
  },
  star: {
    position: "absolute",
    zIndex: 2,
    width: 45,
    height: 45,
    left: 192,
    top: 193,
  },
  levelbutton6: {
    position: "absolute",
    left: 48,
    top: 250,
    width: 90,
    height: 90,
  },

  leftarrow: {
    position: "absolute",
    top: -170,
    left: 45,
  },
  rightarrow: {
    position: "absolute",
    top: -170,
    right: 60,
  },
  dog2: {
    top: 410,
    left: -10,
    zIndex: 1000,
  },
  dotlineread: {
    top:320,
    left:110,
  },
  dotlineread2: {
    top:160,
    left:120,
  },
  dotlineread3: {
    top:210,
    left:240,
  },
  dotlineread4: {
    top:0,
    left:320,
  },
  dotlineread5: {
    top:-230,
    left:250,
  },
  dotlineread6: {
    top:-300,
    left:110,
  },
});
