import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import HTMLView from 'react-native-htmlview';

class Detail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visibleHeight: 30
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
          style={{ height: this.state.visibleHeight }}
          onPress={() => this.props.navigator.pop()}>
          <Image
            style={{ width: 11, height: 19, marginTop: 8 }}
            source={require('./lnr-chevron-left.png')}
          />
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
    fontFamily: 'Times New Roman',
    fontSize: font,
  },
  h2: {
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    color: 'red',
    fontSize: (font * 1.3),
  },
  p: {
    color: '#121212',
    fontFamily: 'Times New Roman',
    fontSize: font,
  }
});

export default Detail
