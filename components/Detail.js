import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigator.pop()}>
          <Text>Back</Text>
        </TouchableHighlight>
        
        <Text>{this.props.text}</Text>

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
    marginTop: 20
  },
});

export default Detail
