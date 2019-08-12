import React, { Fragment } from 'react';
import { View, Text, StyleSheet  } from 'react-native';

export default function Answer({children}) {
  return (
    <View style={styles.category}>
      <Text style={styles.label}>
        Category
      </Text>
      <Text style={styles.text}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    marginBottom: 50,
    alignItems: 'center'
  },
  label: {
    fontSize: 13,
    color: 'blue'
  },
  text: {
    fontSize: 25,
  }
});
