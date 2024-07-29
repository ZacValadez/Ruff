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

  const Submit: React.FC<ButtonProps> = (props) => {
    const { isActive, width, height, onPress, style, text } = props;

return (
    <Pressable onPress={onPress} style={[styles.pressable, style]}>
      <View
        style={{
          backgroundColor: isActive ? "#BFED8F" : "#6AA431",
          width: width,
          height: height,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            backgroundColor: isActive ? "#6AA431" : "#BFED8F",
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

export default Submit;