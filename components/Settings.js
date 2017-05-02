import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Настройки</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigator.pop()}>
          <Text>Back</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Settings
