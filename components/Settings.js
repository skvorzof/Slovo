import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigator.pop()}>
          <Text>Back</Text>
        </TouchableHighlight>

        <Text>Settings</Text>

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
});

export default Settings
