import React from 'react';
import { StyleSheet, Image, Pressable, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

export default function Arrows({ top, left, right, onLeftArrowPress, onRightArrowPress }) {
  return (
    <>
      <Pressable onPress={onLeftArrowPress} style={[styles.arrowContainer, { top, left }]}>
        <Image
          style={styles.arrow}
          source={require("../assets/images/leftarrow.png")}
        />
      </Pressable>
      <Pressable onPress={onRightArrowPress} style={[styles.arrowContainer, { top, right }]}>
        <Image
          style={styles.arrow}
          source={require("../assets/images/rightarrow.png")}
        />
      </Pressable>
    </>
  );
}

Arrows.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.number,
  right: PropTypes.number,
  onLeftArrowPress: PropTypes.func.isRequired,
  onRightArrowPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  arrowContainer: {
    position: "absolute",
    zIndex: 100,
  },
  arrow: {
    width: 50,
    height: 50,
  },
});
