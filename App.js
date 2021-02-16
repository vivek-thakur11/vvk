import React from 'react';
import * as Font from 'expo-font';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import Navigation from './src/navigation';
import Firebase, { FirebaseContext } from './src/firebase/firebase';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
class App extends React.Component {
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
  }

  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <Navigation />
      </FirebaseContext.Provider>
    );
  }
}

export default App;
