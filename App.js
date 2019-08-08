import React, { Fragment, Component } from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Button } from 'react-native-ui-kitten';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { List } from './questions.js';
import { Loading } from './components/Loading';
import { Question } from './components/Loading';
import { Answer } from './components/Answer';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      fontsAreLoaded: false,
      trivia: List[1],
      showQuestion: true
    };
  }

  randomQuestion = async () => {
    this.setState({ isLoading: true, showQuestion: true, });
    await fetch('http://httpstat.us/500')
    //await fetch('http://jservice.io/api/random')
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          isLoading: false,
          trivia: result[0],
        });
        Alert.alert('Error', 'Ha, something is wrong!')
      })
      .catch((error) =>{
        let random = Math.floor(Math.random() * 4)
        this.setState({
          isLoading: false,
          trivia: List[random],
        });
        Alert.alert('Error', `Ops, ${random} something is wrong!`)
      });
  }


  render() {
    const { trivia, showQuestion, isLoading } = this.state
    if(isLoading) {
      return (
        <ApplicationProvider
          mapping={mapping}
          theme={lightTheme}>
          <Loading />
        </ApplicationProvider>
      )
    } else {
      return (
        <ApplicationProvider
          mapping={mapping}
          theme={lightTheme}>
          <Layout style={styles.container}>
            <TouchableOpacity style={{ flex: 3, justifyContent: 'center' }} onPress={() => this.setState({ showQuestion: !showQuestion})}>
              {showQuestion ? (
                <Question question="blahx" />
              ): (
                <Answer answer={trivia.answer} />
              )}
            </TouchableOpacity>
            <Button
              onPress={() => this.randomQuestion()}
              style={styles.button}
            >Next</Button>
          </Layout>
        </ApplicationProvider>
      );
    }
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
  button: {
    alignSelf: 'stretch'
  }  
});
