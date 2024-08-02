import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import Math from '@/app/math';
import Reading from '@/app/reading';
import Writing from '@/app/writing';
import Arrows from '@/components/Arrows';

export default function Home() {
  const router = useRouter();
  const [activeComponent, setActiveComponent] = useState('Reading');

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Math':
        return (
          <Math
            onLeftArrowPress={handleLeftArrowPress}
            onRightArrowPress={handleRightArrowPress}
          />
        );
      case 'Reading':
        return (
          <Reading
            onLeftArrowPress={handleLeftArrowPress}
            onRightArrowPress={handleRightArrowPress}
          />
        );
      case 'Writing':
        return (
          <Writing
            onLeftArrowPress={handleLeftArrowPress}
            onRightArrowPress={handleRightArrowPress}
          />
        );
      default:
        return (
          <Reading
            onLeftArrowPress={handleLeftArrowPress}
            onRightArrowPress={handleRightArrowPress}
          />
        );
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
    <View style={styles.container}>
      {renderActiveComponent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
