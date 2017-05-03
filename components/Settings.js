import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.navbar}>


          <TouchableOpacity
            style={[styles.touch, styles.left ]}
            onPress={() => this.props.navigator.pop()}>
            <Text>Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Настройки</Text>
          
          <Text style={styles.left}></Text>

        </View>


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
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  left: {
      flex: 1
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export default Settings
