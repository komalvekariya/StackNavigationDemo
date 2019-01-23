import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


export default class ItemList extends Component {
    render() {
        const itemNo = this.props.navigation.getParam('itemNo', 'NO-ID');
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'blue', fontSize: 20 }}>ItemList</Text>
                <Text>itemNo: {JSON.stringify(itemNo)}</Text>

                <Button title='Goto to ListItem Screen'
                    onPress={() => this.props.navigation.push('ItemList', {
                        itemNo: Math.floor(Math.random() * 100),
                    })} />

            </View>
        );
    }
}
