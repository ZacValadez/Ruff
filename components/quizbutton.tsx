import React ,{useEffect, useState} from "react";
import { StyleSheet, View, Pressable, Text, StyleProp, ViewStyle } from "react-native";

interface ButtonProps {
  isActive: boolean;
  width: number;
  height: number;
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const QuizButton: React.FC<ButtonProps> = (props) => {
  const { isActive, width, height, onPress, style, text } = props;
 

  return (
    <Pressable onPress={onPress} style={[styles.pressable, style]}>
      <View
        style={{
          backgroundColor: isActive ? "#7DC8F7" : "#08457E",
          width: width,
          height: height,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            backgroundColor: isActive ? "#08457E" : "#7dc8f7",
            width: width - 10,
            height: height - 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10
          }}
        >
        
        <Text>{text}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    position: 'absolute', // Position style, can be overridden with style prop
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});

export default QuizButton;
