import React, { Fragment } from 'react';
import { Text, StyleSheet  } from 'react-native';
import { Layout } from 'react-native-ui-kitten';

export default function Trivia({label, text}) {
  return (
    <Fragment>
      <Text style={styles.label}>
        {label}
      </Text>
      <Text style={styles.text}>
        {text} 
      </Text>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#a9a9a9',
    fontSize: 20
  },
  text: {
    fontSize: 35
  }
});
