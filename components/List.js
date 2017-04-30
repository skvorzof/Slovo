import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
    StatusBar
} from 'react-native';

const preyers = require('./data.json');
const preyers2 = require('./data.json');

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

    _renderItem(item) {
        return (
            <TouchableHighlight style={styles.touch} onPress={() => this.navigate('Detail', item.text)}>
                <Text>{item.title}</Text>
            </TouchableHighlight>
        )
    }

    _key = (item, index) => item.title;


    render() {

        return (
            <View style={styles.container}>
                <StatusBar hidden />
                
                <Text>Молитвослов</Text>

                <TouchableHighlight style={styles.touch} onPress={() => this.navigate('Settings')}>
                    <Text>Settings</Text>
                </TouchableHighlight>

                <View>
                    {/*<Text>Молитвы</Text>*/}
                    <FlatList
                        data={preyers}
                        keyExtractor={this._key}
                        renderItem={({ item }) => this._renderItem(item)}
                    />
                </View>

                {/*<View>
                    <Text>Акафисты</Text>
                    <FlatList
                        data={preyers2}
                        renderItem={({ item }) => this._renderItem(item)}
                    />
                </View>*/}

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 15
    },
    touch: {
        height: 20
    }
});

export default List
