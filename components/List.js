import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight
} from 'react-native';

const preyers = require('./data.json');

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

        _renderItem(item) {
            return (
                <TouchableHighlight onPress={() => this.navigate('Detail', 'Hello!')}>
                    <Text>{item.title}</Text>
                </TouchableHighlight>
            )
        }

        return (
            <View style={styles.container}>


                <FlatList
                    data={preyers}
                    renderItem={({ item }) => this._renderItem(item)}
                />

            </View>
        );
    }
}

/*<Text>HOME</Text>

<TouchableHighlight onPress={() => this.navigate('Detail', 'Hello!')}>
    <Text>Click</Text>
</TouchableHighlight>*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
});

export default List
