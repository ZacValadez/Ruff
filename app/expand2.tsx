import {
    StyleSheet,
    View,
    Image,
    Pressable,
    Animated,
    Easing,
  } from "react-native";
  import QuizButton from "../components/quizbutton";
  import Submit from "../components/Submit";
  import React, { useState, useRef } from "react";
  import { useRouter } from "expo-router";
export default function expand(){
    const router = useRouter();


return(
<View>
<Pressable onPress={() => router.back()}>
          <Image
            style={styles.backbutton}
            source={require("../assets/images/backbutton.png")}
          />
        </Pressable>   
        <Image
          style={styles.readingicon}
          source={require("../assets/images/readingicon.png")}
        />
        <Image
          style={styles.bigreading2}
          source={require("../assets/images/bigreading2.png")}
        />
             <Image
          style={styles.dog}
          source={require("../assets/images/expanddog.png")}
        />
</View>

)};
const styles= StyleSheet.create({
backbutton: {
    left: 53,
    top: 82,
    position: "absolute",
  },
  readingicon: {
    left: 320,
    top: 70,
    position: "absolute",
  },
    bigreading2:{
        top: 150,
        left:20,
    },
    dog:{
      position: "absolute",
        left:30,
        top:745,
    },
})