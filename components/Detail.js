import React, {Component} from 'react';
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
                visibleHeight: 30
            })

        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{height: this.state.visibleHeight}}>
                    <View style={styles.navbar}>

                        <TouchableOpacity
                            visible={false}
                            style={styles.left}
                            onPress={() => this.props.navigator.pop()}>
                            <Image
                                style={{width: 11, height: 19, marginTop: 8}}
                                source={require('./lnr-chevron-left.png')}
                            />
                        </TouchableOpacity>

                        <Text style={styles.title}>{this.props.title}</Text>

                        <Text style={styles.right}></Text>

                    </View>
                </View>

                <ScrollView
                    onScroll={(event) => {
                        this.onScroll(event)
                    }}
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
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left: {
        flex: 1
    },
    right: {
        flex: 1,
        alignItems: 'flex-end'
    },
    title: {
        flex: 5,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
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
