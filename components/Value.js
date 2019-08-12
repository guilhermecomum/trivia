import React, { Fragment } from 'react';
import { View, Text, StyleSheet  } from 'react-native';

export default function Value({children}) {
  return (
    <View style={styles.value}>
      <Text style={styles.text}>
        $ {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  value: {
    marginTop: 100,
    alignItems: 'center'
  },
  text: {
    fontSize: 50,
  }
});
