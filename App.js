import React, { Fragment, Component } from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { List } from './questions.js';
import HomeScreen from './components/HomeScreen';
import Loading from './components/Loading';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      trivia: List[1],
    };
  }

  handleNewQuestion = async () => {
    this.setState({
      isLoading: true,
    });

    await fetch('http://jservice.io/api/random')
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          isLoading: false,
          trivia: result[0],
        });
      })
      .catch((error) =>{
        let random = Math.floor(Math.random() * 4)
        this.setState({
          isLoading: false,
          trivia: List[random],
        });
      });
  }


  render() {
    const { trivia, isLoading } = this.state
    return (
      <ApplicationProvider
        mapping={mapping}
        theme={lightTheme}>
        {isLoading ? (
          <Loading />
        ): (
          <HomeScreen
            trivia={trivia}
            getQuestion={this.handleNewQuestion} />
        )}
      </ApplicationProvider>
    )
  }
}
