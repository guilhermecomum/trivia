import React, { Fragment } from 'react';
import { Text, StyleSheet  } from 'react-native';
import { Layout } from 'react-native-ui-kitten';
import { Label } from './Label'

const Question = ({ question }) => {
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

export default Question;

const styles = StyleSheet.create({
  question: {
    fontSize: 45
  }
});
