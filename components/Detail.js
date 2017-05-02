import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import HTMLView from 'react-native-htmlview';
const v = 'Дмитрий';
class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigator.pop()}>
          <Text>Back</Text>
        </TouchableOpacity>

        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
        >

          <HTMLView
            value={this.props.text}
            stylesheet={styles}
          />

        </ScrollView>

      </View>
    );
  }
}

const font = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15
  },
  em: {
    color: 'red',
    fontStyle: 'italic',
    fontFamily: 'Georgia',
    fontSize: font,
  },
  h2: {
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    color: 'red',
    fontSize: (font * 1.3),
  },
  p: {
    fontFamily: 'Georgia',
    fontSize: font,
  }
});

export default Detail
