import React, { Fragment } from 'react';
import { Text, StyleSheet  } from 'react-native';
import { Layout } from 'react-native-ui-kitten';
import Label from './Label'

export default function Answer({answer}) {
  return (
    <Fragment>
      <Label>
        Answer: 
      </Label>
      <Text style={styles.answer}>
        {answer} 
      </Text>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  answer: {
    fontSize: 35
  }
});
