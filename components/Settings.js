import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

class Settings extends Component {

  constructor(props) {
    super(props)
    this.state = { name: 'Иван' }
    AsyncStorage.getItem('name').then((name) => {
      this.setState({ 'name': name })
    })
  }

  saveData(name) {
    AsyncStorage.setItem('name', name)
    this.setState({ 'name': name })
  }



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


        <Text>Name</Text>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={(text) => this.saveData(text)} />

          <Text>Name -> {this.state.name}</Text>


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
    justifyContent: 'space-between',
    alignItems: 'center'
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 30,
    backgroundColor: '#EEEEEE'
  }
});

export default Settings
