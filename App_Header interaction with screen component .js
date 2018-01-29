
//Header中的按钮可以根据状态重新渲染

import React, { Component } from 'react';
import {
  // Platform,
  // StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import { StackNavigator,TabNavigator } from "react-navigation";

class RecentChatsScreen extends React.Component {
  render() {
    return (
    <View>
      <Text>List of recent chats</Text>
      <Button
        onPress={() => this.props.navigation.navigate('EditInfo')}
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
        onPress={() => this.props.navigation.navigate('EditInfo')}
        title="Chat with Lucy"
      />
    </View>
    )
  }
}

class EditInfoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let headerRight = (
      <Button
        title="Save"
        onPress={params.handleSave ? params.handleSave : () => null}
      />
    );
    if (params.isSaving) {
      headerRight = <ActivityIndicator />;
    }
    return { headerRight };
  };

  state = {
    nickname: 'Lucy jacuzzi'
  }

  _handleSave = () => {
    // Update state, show ActivityIndicator
    this.props.navigation.setParams({ isSaving: true });
    
    // Fictional function to save information in a store somewhere
    setTimeout(()=>{
      this.props.navigation.setParams({ isSaving: false});
    },3000);
  }

  componentDidMount() {
    // We can only set the function after the component has been initialized
    this.props.navigation.setParams({ handleSave: this._handleSave });
  }

  render() {
    return (
      <TextInput
        onChangeText={(nickname) => this.setState({ nickname })}
        placeholder={'Nickname'}
        value={this.state.nickname}
      />
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
  EditInfo: { 
    screen: EditInfoScreen ,

  }
});

