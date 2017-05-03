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
            style={styles.left}
            onPress={() => this.props.navigator.pop()}>
            <Text>Back</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Настройки</Text>

          <TouchableOpacity
            style={styles.right}
            >
            <Text>Сохранить</Text>
          </TouchableOpacity>

        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 7,
    paddingTop: 5,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  left: {
    flex: 1
  },
  right: {
    flex: 1,
    alignItems: 'flex-end'
  },
  title: {
    flex: 2,
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export default Settings
