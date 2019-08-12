import React, { Component } from 'react';
import { Layout, Button } from 'react-native-ui-kitten';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Trivia from './Trivia';
import Category from './Category';
import Value from './Value';

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      showQuestion: true
    };
  }

  toggleAnswer = () => this.setState({ showQuestion: !this.state.showQuestion})
  
  render() {
    const { showQuestion } = this.state
    const { trivia, getQuestion } = this.props

    return (
      <Layout style={styles.container}>
        <Layout  style={styles.trivia}>
          <Category>{trivia.category.title}</Category>
          <TouchableOpacity  onPress={() => this.toggleAnswer()}>
            {showQuestion ? (
              <Trivia label='Question' text={trivia.question} />
            ): (
              <Trivia label='Answer' text={trivia.answer} />
            )}
          </TouchableOpacity>
          <Value>{trivia.value}</Value>
        </Layout>
        <Button
          onPress={() => getQuestion()}
          style={styles.button}
          appearance='filled'
        >Next</Button>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  trivia: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    height: 70,
    alignSelf: 'stretch',
    borderRadius: 0
  }
});
