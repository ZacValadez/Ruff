import React, { useState } from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Math from '@/app/math';
import Reading from '@/app/reading';
import Writing from '@/app/writing';

export default function Home() {
  const router = useRouter();
  const [activeComponent, setActiveComponent] = useState('Reading');

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Math':
        return <Math />;
      case 'Reading':
        return <Reading />;
      case 'Writing':
        return <Writing />;
      default:
        return <Reading />;
    }
  };

  const handleLeftArrowPress = () => {
    setActiveComponent((prevComponent) => {
      if (prevComponent === 'Math') return 'Writing';
      if (prevComponent === 'Reading') return 'Math';
      if (prevComponent === 'Writing') return 'Reading';
    });
  };

  const handleRightArrowPress = () => {
    setActiveComponent((prevComponent) => {
      if (prevComponent === 'Math') return 'Reading';
      if (prevComponent === 'Reading') return 'Writing';
      if (prevComponent === 'Writing') return 'Math';
    });
  };

  return (
    <View>
      {renderActiveComponent()}
      <Pressable onPress={handleLeftArrowPress}>
        <Image
          style={styles.leftarrow}
          source={require("../../assets/images/leftarrow.png")}
        />
      </Pressable>
      <Pressable onPress={handleRightArrowPress}>
        <Image
          style={styles.rightarrow}
          source={require("../../assets/images/rightarrow.png")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rightarrow: {
    position: "absolute",
    top: -90,
    right: 74,
    zIndex: 100,
  },
  leftarrow: {
    position: "absolute",
    top: -90,
    left: 64,
    zIndex: 100,
  },
});
