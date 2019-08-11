import React, { Component } from 'react';
import { Layout, Button } from 'react-native-ui-kitten';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Question from './Question';
import Answer from './Answer';
import Category from './Category';

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      showQuestion: true
    };
  }
  
  render() {
    const { showQuestion } = this.state
    const { trivia, randomQuestion } = this.props

    return (
      <Layout style={styles.container}>
        <View style={styles.textarea}>
          <Category category={trivia.category.title} style={{ alignSelf: 'auto'}}/>
          <TouchableOpacity style={{ flex: 1, border: '1px solid red'}}  onPress={() => this.setState({ showQuestion: !showQuestion})}>
            {showQuestion ? (
              <Question question={trivia.question} />
            ): (
              <Answer answer={trivia.answer} />
            )}
          </TouchableOpacity>
          <Category category={`$ ${trivia.value}`} />
        </View>
        <Button
          onPress={() => randomQuestion()}
          style={styles.button}
        >Next</Button>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
    alignSelf: 'stretch'
  },
  textarea: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: '#ddd'
  },
  button: {
    alignSelf: 'stretch'
  }  
});
