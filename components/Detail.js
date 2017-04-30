import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import HTMLView from 'react-native-htmlview';

class Detail extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        <TouchableHighlight onPress={() => this.props.navigator.pop()}>
          <Text>Back</Text>
        </TouchableHighlight>

        <HTMLView
          value={this.props.text}
          stylesheet={styles}
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15
  },
  em: {
    color: 'red',
    fontStyle: 'italic',
    fontFamily: 'Georgia',
  },
  h2: {
    fontFamily: 'Georgia',
    color: 'red',
    fontSize: 23
  },
  p: {
    fontFamily: 'Georgia',
  }
});

export default Detail
