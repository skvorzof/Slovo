import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

class List extends Component {
    constructor() {
        super()

        this.navigate = this.navigate.bind(this)
    }

    navigate(name, text) {
        this.props.navigator.push({
            name,
            text
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    HOME
        </Text>

                <TouchableHighlight onPress={() => this.navigate('Detail', 'Hello!')}>
                    <Text>Click</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
});

export default List
