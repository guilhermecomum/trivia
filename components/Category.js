import React, { Fragment } from 'react';
import { View, Text, StyleSheet  } from 'react-native';

export default function Answer({category}) {
  return (
    <View style={styles.category}>
      <Text style={styles.text}>
        {category}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    backgroundColor: '#ddd',
    padding: 10,
    borderWidth: '2',
    borderColor: 'red',
    alignSelf: 'baseline'
  },
  text: {
    fontSize: 20,
  }
});
