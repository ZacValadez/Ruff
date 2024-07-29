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
      if (activeButton === 3) {
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
          style={styles.readingicon}
          source={require("../assets/images/writingicon.png")}
        />
        <Image
          style={styles.pencil}
          source={require("../assets/images/writing2.png")}
        />
        <QuizButton
          isActive={activeButton === 1}
          width={381}
          height={70}
          onPress={() => handleButtonPress(1)}
          style={{ top: 495, left: 29 }}
          text={"The term flauna, used by Los Angeles-based painter Jon Ching, is a combination of the words flora and fauna."}
        />
        <QuizButton
          isActive={activeButton === 2}
          width={381}
          height={70}
          onPress={() => handleButtonPress(2)}
          style={{ top: 575, left: 29 }}
          text={"Jon Ching, who created Nectar, refers to the subjects of his paintings as flauna."}
        />
        <QuizButton
          isActive={activeButton === 3}
          width={381}
          height={80}
          onPress={() => handleButtonPress(3)}
          text={"Jon Ching uses the term flauna, a combination of the words flora and fauna, to describe the subjects of his surreal paintings: plant-animal hybrids such as a parrot with leaves for feathers."}
          style={{ top: 660, left: 29 }}
        />
        <QuizButton
          isActive={activeButton === 4}
          width={381}
          height={80}
          onPress={() => handleButtonPress(4)}
          style={{ top: 756, left: 27 }}
          text={"The subjects of Nectar and Primavera are types of flauna, a term that the paintings' creator, Jon Ching, uses when describing his surreal artworks."}
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
              <Pressable onPress={() => router.push("writing3")}>
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
      left: -160,
      top: -370,
      position: "absolute",
    },
    readingicon: {
      left: 320,
      top: 70,
      position: "absolute",
    },
    pencil: {
      left: 10,
      top: 150,
      position: "absolute",
    },
    readpassage: {
      top: 110,
      left: 120,
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
    questionread: {
      position: "absolute",
      bottom: 540, // Adjust as needed to overlap
      left:35,
    },
  });
  
  export default App;
  