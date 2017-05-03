import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import HTMLView from 'react-native-htmlview';

class Detail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visibleHeight: 40
    }
  }

  onScroll(event) {
    var currentOffset = event.nativeEvent.contentOffset.y;
    var direction = currentOffset > this.offset ? 'down' : 'up';
    this.offset = currentOffset;

    if (direction === 'down') {
      this.setState({
        visibleHeight: 0
      })

    }
    if (direction === 'up') {
      this.setState({
        visibleHeight: 40
      })

    }

  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity
          visible={false}
          style={styles.button}
          onPress={() => this.props.navigator.pop()}>
          <Text style={{ height: this.state.visibleHeight }}>Back</Text>
        </TouchableOpacity>

        <ScrollView
          onScroll={(event) => { this.onScroll(event) }}
          scrollEventThrottle={20}
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
    paddingHorizontal: 7
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
