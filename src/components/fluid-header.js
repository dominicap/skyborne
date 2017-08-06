import React from 'react';
import { View, Text } from 'react-native';

import { height, width } from '../global';

export const FluidHeader = props => {
  const styles = {
    ViewStyle: {
      height: height * 0.18,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      borderColor: '#000',
      marginBottom: height * 0.08,
    },

    TextStyle: {
      fontFamily: 'Rubik',
      fontSize: 40,
      marginRight: width * 0.1,
      fontWeight: '500',
    },
  };
  return (
    <View style={styles.ViewStyle}>
      <Text style={styles.TextStyle}>
        {props.children}
      </Text>
    </View>
  );
};