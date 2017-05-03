import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    TouchableHighlight,
    StatusBar,
    AsyncStorage
} from 'react-native';
import { preyers } from './data';

class List extends Component {
    constructor() {
        super()
        this.state = { name: 'Имя' }
        AsyncStorage.getItem('name').then((name) => {
            this.setState({ 'name': name })
        })

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
                <Text style={styles.touchTxt}>{item.title}</Text>
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
                        <Image
                            style={{ width: 16, height: 11 }}
                            source={require('./lnr-menu.png')}
                        />
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

                

                <Text style={{marginTop: 50}}>Имя {this.state.name}</Text>

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
        alignItems: 'center',
        marginBottom: 20

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
    touchTxt: {
        fontSize: 18,
        paddingVertical: 5,
    }

});

export default List
