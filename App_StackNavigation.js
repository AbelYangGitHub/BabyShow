/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  // Platform,
  // StyleSheet,
  // Text,
  Button,
  View
} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon, Text ,StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';
import { StackNavigator } from 'react-navigation';

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <StyleProvider style={getTheme(commonColor)}>
//         <Container>
//           <Header>
//             <Left>
//               <Button transparent>
//                 <Icon name='menu' />
//               </Button>
//             </Left>
//             <Body>
//               <Title>HeaderHeaderHeaderHeader</Title>
//             </Body>
//             <Right />
//           </Header>
//           <Content>
//             <Text>
//               This is Content Section
//             </Text>
//           </Content>
//           <Footer>
//             <FooterTab>
//               <Button full>
//                 <Text>Footer</Text>
//               </Button>
//             </FooterTab>
//           </Footer>
//         </Container>
//       </StyleProvider>
//     );
//   }
// }



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View>
      <Text>Hello, Navigation!ABC</Text>
      
      <Button
        onPress={() => navigate('Chat', { user: 'Lucy2' })}
        title="Chat with Lucy"
      />
    </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({navigation})=>{
    title: `Chat with ${navigation.state.params.user}`
  };
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


export default App = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});
