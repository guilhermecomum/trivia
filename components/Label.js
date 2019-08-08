import React, { Fragment } from 'react';
import { Text, StyleSheet  } from 'react-native';

export default function Label({children}) {
  return (
      <Text style={styles.label}>
        {children}
      </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#a9a9a9',
    fontSize: 20
  }
});
