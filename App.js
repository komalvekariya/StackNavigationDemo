

import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'



class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            intemId: 86,
            otherParam: 'anything you want'

          })
          }
        />
      </View>
    );
  }
}


class DetailsScreen extends React.Component {
  render() {
    const itemId = this.props.navigation.getParam('itemId', 'NO-ID');
    const otherParam = this.props.navigation.getParam('otherParam', 'other value');
    return (

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details',{
          itemId: Math.floor(Math.random() * 100),})}/>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View >
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}