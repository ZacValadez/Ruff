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

        <Image
            style={styles.statstitle}
            source={require("../assets/images/allstats.png")}
          />
          <Pressable onPress={() => router.back()}>
          <Image
            style={styles.backbutton}
            source={require("../assets/images/backbutton.png")}
          />
        </Pressable>
</View>

)};
const styles= StyleSheet.create({
backbutton:{
    top:-700,
    left:40,
    zIndex:200,
},
statstitle:{

},

    
})