import React from 'react';
import { Text, StyleSheet  } from 'react-native';
import { Layout } from 'react-native-ui-kitten';
import Label from './Label'

export default function Question({ question }) {
  console.log("Q:", question)
  return (
    <Layout>
      <Label>
        Question: 
      </Label>
      <Text style={styles.question}>
        {question} 
      </Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  question: {
    fontSize: 45
  }
});

