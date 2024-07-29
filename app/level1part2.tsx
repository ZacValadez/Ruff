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
  
  const App = () => {
    const [activeButton, setActiveButton] = useState<number | null>(null);
    const [submit, setSubmit] = useState(false);
    const [showRight, setShowRight] = useState(false);
    const [showWrong, setShowWrong] = useState(false);
    const router = useRouter();
    const translateY = useRef(new Animated.Value(800)).current;
  
    const handleButtonPress = (index: number) => {
      setActiveButton(index);
    };
  
    const handleSubmit = () => {
      setSubmit(true);
      if (activeButton === 4) {
        setShowRight(true);
        setShowWrong(false);
        animatePopup();
      } else {
        setShowWrong(true);
        setShowRight(false);
        animatePopup();
      }
    };
  
    const handleTryAgain = () => {
      setActiveButton(null);
      setSubmit(false);
      setShowWrong(false);
      resetAnimation();
    };
  
    const animatePopup = () => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start();
    };
  
    const resetAnimation = () => {
      translateY.setValue(800);
    };
  
    return (
      <View style={styles.container}>
        <Image
          style={styles.level1text}
          source={require("../assets/images/Level1.png")}
        />
        <Image
          style={styles.mathlogo}
          source={require("../assets/images/mathlogo.png")}
        />
        <Image
          style={styles.question2}
          source={require("../assets/images/question2.png")}
        />
        <QuizButton
          isActive={activeButton === 1}
          width={381}
          height={58}
          onPress={() => handleButtonPress(1)}
          style={{ top: 435, left: 29 }}
          text={"$2.60"}
        />
        <QuizButton
          isActive={activeButton === 2}
          width={381}
          height={58}
          onPress={() => handleButtonPress(2)}
          style={{ top: 536, left: 29 }}
          text={"$2.85"}
        />
        <QuizButton
          isActive={activeButton === 3}
          width={381}
          height={58}
          onPress={() => handleButtonPress(3)}
          text={"$2.95"}
          style={{ top: 636, left: 29 }}
        />
        <QuizButton
          isActive={activeButton === 4}
          width={381}
          height={58}
          onPress={() => handleButtonPress(4)}
          style={{ top: 736, left: 27 }}
          text={"3.35"}
        />
        <Submit
          isActive={submit}
          width={381}
          height={58}
          onPress={handleSubmit}
          style={{ top: 846, left: 27 }}
          text={"Submit"}
        />
        <Animated.View style={{ ...styles.popupContainer, transform: [{ translateY }] }}>
          {showRight && (
            <View style={styles.popupContent}>
              <Image
                style={styles.popupgood}
                source={require("../assets/images/popupgood.png")}
              />
              <Pressable onPress={() => router.push("level1part3")}>
                <Image
                  style={styles.continue}
                  source={require("../assets/images/continue.png")}
                />
              </Pressable>
            </View>
          )}
          {showWrong && (
            <View style={styles.popupContent}>
              <Image
                style={styles.popupbad}
                source={require("../assets/images/popupbad.png")}
              />
              <Pressable onPress={handleTryAgain}>
                <Image
                  style={styles.tryagain}
                  source={require("../assets/images/tryagain.png")}
                />
              </Pressable>
            </View>
          )}
        </Animated.View>
        <Pressable onPress={() => router.back()}>
          <Image
            style={styles.backbutton}
            source={require("../assets/images/backbutton.png")}
          />
        </Pressable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    level1text: {
      position: "absolute",
      left: 170,
      top: 70,
    },
    backbutton: {
      left: -183,
      top: -415,
      position: "absolute",
    },
    mathlogo: {
      left: 320,
      top: 40,
      position: "absolute",
    },
    question2: {
      top: 110,
      left: 47,
      position: "absolute",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    popupContainer: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      alignItems: "center",
    },
    popupContent: {
      alignItems: "center",
    },
    popupgood: {
      position: "absolute",
      bottom: 0, // Adjust as needed to overlap
    },
    popupbad: {
      position: "absolute",
      bottom: 0, // Adjust as needed to overlap
    },
    continue: {
      position: "absolute",
      bottom: 40, // Adjust as needed to overlap
      left:-180,
    },
    tryagain: {
      position: "absolute",
      bottom: 40, // Adjust as needed to overlap
      left:-192,
    },
  });
  
  export default App;
  
