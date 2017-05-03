import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    TouchableHighlight,
    StatusBar
} from 'react-native';
import { preyers } from './data';

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

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />

                <View style={styles.navbar}>

                    <Text style={styles.left}></Text>
                    <Text style={styles.title}>Молитвослов</Text>

                    <TouchableOpacity style={styles.right} onPress={() => this.navigate('Settings')}>
                        <Text>Настройки</Text>
                    </TouchableOpacity>

                </View>

                <View>
                    {/*<Text>Молитвы</Text>*/}
                    <FlatList
                        data={preyers}
                        keyExtractor={item => item.title}
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
        paddingHorizontal: 7,
        paddingTop: 5,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
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
        textAlign: 'center',
    },

});

export default List
