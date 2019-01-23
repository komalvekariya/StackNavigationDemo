import React, { Component } from 'react';
import Feed from './Feed'
import ItemList from './ItemList'

import { createAppContainer,createStackNavigator } from 'react-navigation'

const Navigator = createStackNavigator({
    Feed: { screen: Feed },
    ItemList: { screen: ItemList },
},      
    {
        initialRouteName: 'Feed',
    });


    const AppContainer = createAppContainer(Navigator);

class Nav extends Component {

    render() {
        return (
            <Navigator />
        )
    }

}
export default AppContainer