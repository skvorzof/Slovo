import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

import List from './components/List';
import Detail from './components/Detail';
import Settings from './components/Settings';

export default class App extends Component {
  constructor() {
    super()
    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(route, navigator) {
    if(route.name === 'List') {
      return <List navigator = { navigator } />
    } else if(route.name === 'Detail') {
      return <Detail navigator = { navigator } text = { route.text } />
    } else if(route.name === 'Settings') {
      return <Settings navigator = { navigator } />
    }
  }

  render() {
    return (
      <Navigator 
      initialRoute = {{ name: 'List' }}
      renderScene = { this.renderScene }
      />
    );
  }
}

AppRegistry.registerComponent('App', () => App);
