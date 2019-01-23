import React, { Component } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import ItemList from './ItemList'


export default class Feed extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'blue', fontSize: 20 }}>Home Screen</Text>
                <Button
                    title="Go to ItemDetails"
                    onPress={() => this.props.navigation.navigate('ItemList',{
                        itemNo:20
                    })}
                />
            </View>
        );
    }
}