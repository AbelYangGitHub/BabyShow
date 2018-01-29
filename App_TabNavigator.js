
import React, { Component } from 'react';
import {
  // Platform,
  // StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import { StackNavigator,TabNavigator } from "react-navigation";

class RecentChatsScreen extends React.Component {
  render() {
    return (
    <View>
      <Text>List of recent chats</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
        title="Chat with Lucy"
      />
    </View>
    )
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (
    <View>
      <Text>List of all chats</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
        title="Chat with Lucy"
      />
    </View>
    )
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}(the custom header)`,
    headerRight: <Button title="Info" />,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}


const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

export default App = StackNavigator({
  Home: { 
    screen: MainScreenNavigator ,
    navigationOptions: {
      title: 'My Chats',
    }
  },
  Chat: { 
    screen: ChatScreen ,
    navigationOptions: {
      user: 'Lucy',
    }
  }
});

