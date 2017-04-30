import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import HTMLView from 'react-native-htmlview';

class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigator.pop()}>
          <Text>Back</Text>
        </TouchableHighlight>

        <HTMLView 
        value={this.props.text}
        stylesheet={styles}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    padding: 15
  },
  i: {
    color: 'red',
  }
});

export default Detail
