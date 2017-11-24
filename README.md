# READ ME

使用React Native做的一个宝宝秀项目

## 开发环境

* Homebrew: 11.3.6
* node: 8.9.1
* yarn: 1.3.2
* react@16.0.0
* javac 1.8.0_152
* [graleLink](https://services.gradle.org/distributions/gradle-2.14.1-all.zip)

## 依赖项

```js
Saved 95 new dependencies.
├─ abab@1.0.4
├─ acorn-globals@3.1.0
├─ acorn@4.0.13
├─ align-text@0.1.4
├─ amdefine@1.0.1
├─ append-transform@0.4.0
├─ argparse@1.0.9
├─ array-equal@1.0.0
├─ arrify@1.0.1
├─ astral-regex@1.0.0
├─ babel-jest@21.2.0
├─ babel-plugin-istanbul@4.1.5
├─ babel-plugin-jest-hoist@21.2.0
├─ babel-preset-jest@21.2.0
├─ babel-preset-react-native@4.0.0
├─ browser-resolve@1.11.2
├─ callsites@2.0.0
├─ center-align@0.1.3
├─ ci-info@1.1.1
├─ content-type-parser@1.0.2
├─ cssom@0.3.2
├─ cssstyle@0.2.37
├─ deep-is@0.1.3
├─ default-require-extensions@1.0.0
├─ diff@3.4.0
├─ escodegen@1.9.0
├─ esprima@4.0.0
├─ estraverse@4.2.0
├─ expect@21.2.1
├─ fast-levenshtein@2.0.6
├─ fileset@2.0.3
├─ handlebars@4.0.11
├─ html-encoding-sniffer@1.0.2
├─ is-ci@1.0.10
├─ is-utf8@0.2.1
├─ istanbul-api@1.2.1
├─ istanbul-lib-coverage@1.1.1
├─ istanbul-lib-hook@1.1.0
├─ istanbul-lib-instrument@1.9.1
├─ istanbul-lib-report@1.1.2
├─ istanbul-lib-source-maps@1.2.2
├─ istanbul-reports@1.1.3
├─ jest-changed-files@21.2.0
├─ jest-cli@21.2.1
├─ jest-config@21.2.1
├─ jest-diff@21.2.1
├─ jest-environment-jsdom@21.2.1
├─ jest-environment-node@21.2.1
├─ jest-get-type@21.2.0
├─ jest-jasmine2@21.2.1
├─ jest-matcher-utils@21.2.1
├─ jest-message-util@21.2.1
├─ jest-mock@21.2.0
├─ jest-regex-util@21.2.0
├─ jest-resolve-dependencies@21.2.0
├─ jest-resolve@21.2.0
├─ jest-runner@21.2.1
├─ jest-runtime@21.2.1
├─ jest-snapshot@21.2.1
├─ jest-util@21.2.1
├─ jest-validate@21.2.1
├─ jest@21.2.1
├─ js-yaml@3.10.0
├─ jsdom@9.12.0
├─ lazy-cache@1.0.4
├─ leven@2.1.0
├─ levn@0.3.0
├─ longest@1.0.1
├─ natural-compare@1.4.0
├─ nwmatcher@1.4.3
├─ optionator@0.8.2
├─ p-cancelable@0.3.0
├─ parse5@1.5.1
├─ path-parse@1.0.5
├─ pinkie-promise@2.0.1
├─ pinkie@2.0.4
├─ prelude-ls@1.1.2
├─ pretty-format@21.2.1
├─ react-test-renderer@16.0.0
├─ resolve@1.1.7
├─ right-align@0.1.3
├─ sprintf-js@1.0.3
├─ string-length@2.0.0
├─ strip-bom@2.0.0
├─ symbol-tree@3.2.2
├─ test-exclude@4.1.1
├─ tr46@0.0.3
├─ type-check@0.3.2
├─ uglify-js@2.8.29
├─ uglify-to-browserify@1.0.2
├─ webidl-conversions@4.0.2
├─ whatwg-encoding@1.0.3
├─ whatwg-url@4.8.0
├─ window-size@0.1.0
└─ xml-name-validator@2.0.1
```

## 使用的组件／组件库

* 组建库：NativeBase












# NativeBase官方文档笔记

==NativeBase应该是封装了React-Native中的一些组件，并在说明中用｀Replacing Component｀的形式进行说明。｀Replacing Component｀说明了当前组件会被替换成React-Native的某个组件。也可以通过这个来学习NativeBase在制作自定义组件的时候都使用那些组件，为自己开发组件的时候提供借鉴。==

==NativeBase应该是封装了React-Native中的一些组件，并在说明中用｀Replacing Component｀的形式进行说明。｀Replacing Component｀说明了当前组件会被替换成React-Native的某个组件。也可以通过这个来学习NativeBase在制作自定义组件的时候都使用那些组件，为自己开发组件的时候提供借鉴。==





## 组件

### Anatomy

ReactBase提供了一个自己的结构组件，叫做Container

Anatomy，结构，包括`<Header>`,`<Content>`,`<Footer>`，他们在使用的时候需要被<Container>组件包裹，这样NativeBase就可以自动安排结构组件的位置了。

#### Footer  (Component)

* Replacing Component: React Native `View`.

#### Content  (Component)

* Replacing Component: React Native Keyboard Aware Scroll View's `KeyboardAwareScrollView`


> 页面布局使用Header、Content、Footer；Header中的左中右布局使用Left、Body、Right



## ActionSheet  (API)

* NativeBase ActionSheet is a wrapper around the React Native `ActionSheetIOS` component.
* 使用ActionSheet的时候需要把整个app最顶端的组件使用NativeBase的<Root>组件包裹起来。比如：

```js
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
const AppNavigator = StackNavigator(
  {
    Page: { screen: Page },
  }
);
export default () =>
  <Root>
    <AppNavigator />
  </Root>;
```

* ActionSheet的使用举例：

```js
ActionSheet.show(
    {
    options: BUTTONS,
    cancelButtonIndex: CANCEL_INDEX,
    destructiveButtonIndex: DESTRUCTIVE_INDEX,
    title: "Testing ActionSheet"
    },
    buttonIndex => {
    this.setState({ clicked: BUTTONS[buttonIndex] });
    }
)}
```






## Badge  (Component)

* Replacing Component: React Native `View`





## Button  (Component)

Button组件是一个NativeBase自定义的组件。

* Replacing Component:
  * React Native `TouchableOpacity` for iOS
  * React Native `TouchableNativeFeedback` for Android




## Card  (Component)

* Card组件是一个NativeBase自定义的组件。
* Replacing Component
  * React Native `View` for Card
  * React Native `TouchableOpacity` / `View` for CardItem





## CheckBox  (Components)

* Replacing Component: React Native `TouchableOpacity`




## Deck Swiper  (Components)

* Replacing Component: React Native `View`




## Fab(Floating Action Buttons)  (Components)

* Replacing Component: React Native `Animated`





## Footer Tabs

* Replacing Component: React Native `View`





## Form (Componnet)

* Replacing Component:`
  * Form: React Native `View`
  * Item: React Native `TouchableOpacity`
  * Input: React Native `TextInput`
  * Label: React Native `Text`





## Header (Componnet)

* Replacing Component: React Native `View`






## Icon (Componnet)

* Uses Ionicons from React Native Vector Icons





## Layout  --  Grid,Col,Row  (Componnet)

* <Grid>,<Col>,<Row>是为了更简单地使用Flexbox而创建的组件，其是对Flexbox的封装
* Replacing Component for Grid, Col, Row: React Native `View`

> NOTE: `<Content>` component uses `<ScrollView>`. This is required by `<Col>` and `<Row>` elements of Easy-Grid to have a defined height.





## List

* 这个组件由NativeBase自定义。
* Replacing Component:
  * List: React Native `View`
  * ListItem:
    * React Native TouchableOpacity for `iOS`
    * React Native TouchableNativeFeedback for `Android`

* Dynamic List: For more advanced implementation of rendering list dynamically, take a look at [nativebase-tutorial](https://github.com/GeekyAnts/nativebase-tutorial).

* <Separator>组件，这是用在List组件中用来分割ListItem用的，但也可以单独使用。





## Picker

* 用来实现类似下拉列表的选择功能，注意，iOS和Android下的选择方式不一样。
* Replacing Component: React Native `Picker`





## Radio Button

* Replacing Component: React Native `TouchableOpacity`





## Search Bar

* Replacing Component: React Native `View`

> 如果SearchBar用在了Header中，需要给Header增加`searchBar`属性





## Segment

> 如果Segment组件用在了Header中，需要给Header增加`segment`属性






## Spinner

* Replacing Component: React Native `ActivityIndicator`





## Tabs

* Replacing Component: `react-native-scrollable-tab-view <ScrollableTabView>`






## Thumbnail

* Replacing Component: React Native `Image`





## Typography

* Replacing Component for H1, H2, H3, Text: React Native `Text`





## Drawer  (Component) 





## Ref to Components

* ref属性可以在任何NativeBase组件上使用
* 例如下面这段代码：
  * `this._button`是NativeBase组件的引用
  * `this._button._root`是NativeBase组件替换后的React-Native组件的引用，即`TouchableOpacity`

```js
import React, { Component } from 'react';
import { Container, Header, Content, Button } from 'native-base';
export default class RefExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button ref={ (c) => this._button = c }>
            Click Me
          </Button>
        </Content>
      </Container>
    );
  }
}
```











## Customize

## 调整NativeBase整体APP的主题

NativeBase是建立在ReactNative组件之上的。你可以给任何一个NativeBase组件传递一个style属性，这些属性值都会覆盖掉默认样式。

执行下面的步骤可以自定义NativeBase组件：

1. 安装完NativeBase后在终端中之行`node node_modules/native-base/ejectTheme.js`
* 这会在项目根目录创建一个文件夹native-base-theme，里面有两个文件夹：
  * `variables`：包含3个预置的主题（这三个主题分别叫做platform（默认主题）、material、commonColor（使用这个似乎更好））的变量
    * platform主题：默认主题，它为每个平台提供了适用于特定平台的样式
    * material主题：提供了Google的Meterial风格的样式
    * commonColor主题：（使用这个似乎更好）为所有平台都提供了统一的样式（但它遵从特定平台的图标、字体、和组件方向）
  * `components`：包含所有组件的样式（这些样式的值直接引用在上边varialbes主题变量的值，并且针对特定组件添加了特定的样式属性）

> 所以在效果上来说，修改variables文件夹中的样式，受影响的样式贯穿整个app；而修改components文件夹中的样式，受影响的只是特定的组件。

例如，使用commonColor主题：

```js
import React, { Component } from 'react';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';
​export default class ThemeExample extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Content>
            <Text>
              I have changed the text color.
            </Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
```

说明：

* 使用`<StyleProvider>`组件可以为其子组件指定特定的主题，它可以包裹任何NativeBase组件




## 调整自定义组件的主题






## Examples

列举了一些技术的Demo：

* Redux Example Counter
* Mobx Example Counter
* Navigation - React Navigation
* Navigation - RNRF
* Full App Example
* Redux Form Example
* Sticky Headers Example
* FlatList + Sticky Headers










# React-Navigation官网笔记

React-Navigation的GitHub地址（包括NavigationPlayground、ReduxExample、SafeAreaExample等项目源码）：https://github.com/react-community/react-navigation

> Mine:React-Navigation文档中把用作导航的组件叫做`screen component`，这个组件也都被命名为`某某Screen`

## Getting Started

### Hello Mobile Navigation 

跳转路由的时候进行传参：

```js
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
  //这里声明了static的navigationOptions，说明这个函数作为组件的外部可访问属性
  static navigationOptions = ({navigation})=>{  //这里的{navigation}应该是用了结构的写法
    title: `Chat with ${navigation.state.params.user}`  //这里时es6模板的写法
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
```

### Configuring Headers

* React-Navigation的三种导航中只有`StackNavigator`中Header可用
* React-Navigation中把用于3中导航中的组件叫做`screen component`










## Navigators

### Intro to Navigators

* Navigators允许你定义应用的导航结构。
* Navigators也渲染一般的元素，例如headers、tab bars。
* 在表象之下，Navigators是完完全全的一个React组件。



#### Built-in Navigators

React-Navigation内置了3个`函数`来帮助你创建导航器：`StackNavigator`、`TabNavigator`、`DrawerNavigator`。




#### Rendering screens with Navigators

* `navigation`：是当前组件的一个prop，即`this.props.navigation`，用来分发导航事件，例如打开另一个screen
* `navigationOptions`：是当前组件的一个`static`修饰的公共对象，用来自定义screen如何展示，例如header title, tab labe




#### Calling Navigate on Top Level Component ？？？？？？？？？？




#### Navigation Containers

内置的Navigators可以自动表现得像顶级Navigators一样，当`navigation`prop丢失的时候。这个功能提供了一个透明的Navigation容器，which is where the top-level navigation prop comes from。

当渲染一个内置的Navigator的时候，`navigation`prop是可选的。如果没有`navigation`，这个容器就来管理它自己的导航状态。它也处理URLs、external linking（外部链接），并且集成Android的后退按钮。

为了方便起见，内置的Navigators拥有这样的能力，因为内部实现的时候使用的是`createNavigationContainer`。

顶级navigators 接受如下props：

* `onNavigationStateChange(prevState, newState, action)`：这个函数在每次navigator changes的时候都会被调用。它接收上一个state，新state，和发出state改变的action。默认情况下，它在控制台中打印状态改变。
* `uriPrifix`：app要处理的URLs的前缀。当处理router 中传过来的`deep linking`来抽取路径的时候使用。










### Stack Navigator

在默认的配置情况下StackNavigator切换场景的动画效果与ios或android的默认效果是相同的. ios从右边滑入，android从底部褪去。在ios上StackNavigator也可以配制成模态的形式从页面底部滑入。

StackNavigator是一个函数，定义如下：`StackNavigator(RouteConfigs, StackNavigatorConfig)`。


* 参数1：`RouteConfigs`，用于配置路由名及其所对应的`Screen Component`的相关信息。eg：

```js

StackNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Profile: {

    // `ProfileScreen` is a React component that will be the main content of the screen.
    screen: ProfileScreen,
    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    path: 'people/:name',
    // The action and route params are extracted from the path.

    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}'s Profile'`,
    }),
  },

  ...MyOtherRoutes,
});

```



* 参数2:`StackNavigatorConfig`(可选参数)。具体参数查看官网文档

配置与`与当前Screen组件内容无关的`与StackNavigator本身相关的`整体显示方式`、`头部显示方式`、`转场相关设置`等信息。

StackNavigator的例子可以参照`NavigationPlayground`



* Screen Navigation Options

其实就是Screen `navigationOptions`，`navigationOptions`作为一个用作Screen的组件的内部对象，在用作StackNavigator的时候指定了`与当前Screen组件内容有关系的`StackNavigator页面的头部和手势等相关配置。

具体属性参见文档。



* Navigator Props

`StackNavigator`函数返回的是一个导航组件对象，这个对象可以直接用作标签，其属性`screenProps`会被传递到相关screen components，在这写screen components中可以通过`this.props.screenProps`访问到传递过来的`screenProps`

```js
const SomeStack = StackNavigator({
  // config
});

<SomeStack
  screenProps={/* this prop will get passed to the screen components as this.props.screenProps */}
/>
```










### TabNavigator

TabNavigator是一个函数，定义如下：`TabNavigator(RouteConfigs, TabNavigatorConfig)`

* 参数1：RouteConfigs。

与StackNavigator的RouteConfigs参数作用一致，并且这个对象的属性也一致。


* 参数2: TabNavigatorConfig

配置与`与当前Screen组件内容无关的`与TabNavigator本身相关的`tab的位置`、`是否可侧滑`、`转场相关设置`等信息，并可通过`tabBarOptions`重写一些路由相关的配置。

其中，`TabNavigator`可以配置TabNavigator使用哪种类型的tab组件，包括在顶部样式的`TabBarTop`和在底部样式的`TabBarBottom`，这两个组件不仅位置不一样，样式也不一样，是这个意思吗？？？？？？？？？？


* Screen Navigation Options

其实就是Screen `navigationOptions`，`navigationOptions`作为一个用作Screen的组件的内部对象，在用作TabNavigator的时候指定了`与当前Screen组件内容有关系的`TabNavigator的名称、图标、点击事件等。


* Navigator Props

与StackNavigator的Navigator Props一致。










### DrawerNavigator

打开和关闭Drawer：

```js
this.props.navigation.navigate('DrawerOpen'); // open drawer
this.props.navigation.navigate('DrawerClose'); // close drawer
```

Toggle Drawer：

```js
this.props.navigation.navigate('DrawerToggle');
```


DrawerNavigator是一个函数，定义如下：`DrawerNavigator(RouteConfigs, DrawerNavigatorConfig)`

* 参数1：RouteConfigs。

与StackNavigator的RouteConfigs参数作用一致，并且这个对象的属性也一致。


* 参数2: DrawerNavigatorConfig

配置与`与当前Screen组件内容无关的`与DrawerNavigator本身相关的`drawer的宽度`、`drawer的位置`、`路由的paths`等信息，并可通过`contentComponent`进行一些其他的配置。



* Providing a custom contentComponent

Drawer中默认的组件是可滚动的，而且仅仅包含RouteConfig中配置的路由的链接，你可以很容易地重写默认组件来Header、Footer或其他组件到Drawer中。默认情况下Drawer是可滚动的并且支持iPhone X的safe area的。如果你自定义里面的内容，要确保内容被包裹在`SafeAreaView`组件中。

```js
import { DrawerItems, SafeAreaView } from 'react-navigation';

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```


* `contentOptions` for DrawerItems

`contentOptions`即上边`DrawerNavigatorConfig`参数对象的一个属性。它可以配置Drawer的Item的样式。eg：

```js
contentOptions: {
  activeTintColor: '#e91e63',
  itemsContainerStyle: {
    marginVertical: 0,
  },
  iconContainerStyle: {
    opacity: 1
  }
}
```



* Screen Navigation Options

其实就是Screen `navigationOptions`，`navigationOptions`作为一个用作Screen的组件的内部对象，在用作DrawerNavigator的时候指定了`与当前Screen组件内容有关系的`什么？？？？？？？？？？


* Navigator Props

与StackNavigator的Navigator Props一致。










### The Navigation Prop


app中的每一个screen都会接收一个prop叫作navigation，这个对象包含如下属性：

* `navigate`：一个函数，打开另一个screen

eg：`this.props.navigation.navigate('Profile', {name: 'Brent'})`

* `state`：一个对象，当前screen的state/routes

```js
//state对象：
{
  // the name of the route config in the router
  routeName: 'profile',
  //a unique identifier used to sort routes
  key: 'main0',
  //an optional object of string options for this screen
  params: { hello: 'world' }
}
```

```js
class ProfileScreen extends React.Component {
  render() {
    const {state} = this.props.navigation;
    // state.routeName === 'Profile'
    return (
      <Text>Name: {state.params.name}</Text>
    );
  }
}

```

* `setParams`：一个函数，接收一个json，更新更新路由的params

setParams函数允许改变route中的参数，这在更新头部的标题和按钮的时候很有用。

```js
class ProfileScreen extends React.Component {
  render() {
    const {setParams} = this.props.navigation;
    return (
      <Button
        onPress={() => setParams({name: 'Lucy'})}
        title="Set title name to 'Lucy'"
      />
     )
   }
}
```


* `goBack`：一个函数，关闭当前screen，并后退

有3各种情况：

* this.props.navigation.goBack();
* this.props.navigation.goBack(null);
* this.props.navigation.goBack('screen-123');


* `dispatch`：一个函数，向路由发送action？？？？？？？？？？

> 其他的Navigation函数在内部都使用了dispatch函数。

使用dispatch函数可以发送任何Navigation Action到路由中。？？？？？？？？？？参见下边的Navigation Actions




*NOTE:* The `navigation` prop is passed down to every navigation-aware component including navigators. The big exception is that a navigator's `navigation` prop may not have the helper functions (`navigate`, `goBack`, etc); it may only have `state` and `dispatch`. In order to `navigate` using the navigator's `navigation` prop, you will have to `dispatch` using an [action creator](navigation-actions).

*Notes regarding hooking things up with Redux*

> People don't always hook things up to redux correctly, because they mis-understand the navigator's top-level API, where the navigation prop is optional. The navigator will maintain its own state if it doesn't get a navigation prop, but this is not a feature you generally want to use when hooking your app up with redux. For navigators that are nested inside of your main navigator, you always want to pass the screen's navigation prop down. This allows your top-level navigator to communicate and provide state for all the children navigators. Only your top-level router needs to be integrated with redux, because all the other routers are inside it.










### Navigation Actions

react-navigation中有一个`NavigationActions`（注意：是`复数`）对象，这个对象包含如下一些函数，这些函数都返回`navigationAction`（注意：是`单数`）对象，它可以通过`this.props.navigation.dispatch`函数发送到路由中。（`发送到路由中`是干什么的？有什么用？？？？？？？？？？难道是不通过StackNavigator等方式而直接配置路由？？？？？？？？？？）

* `Navigate` - Navigate to another route
* `Reset` - Replace current state with a new state
* `Back` - Go back to previous state
* `SetParams` - Set Params for given route
* `Init` - Used to initialize first state if state is undefined































# 开发实战

## 1. 安装完NativeBase后执行`react-native run-ios`，提示`Unrecognized font family ionicons`

解决办法：

```bash
1. Run `react-native link react-native-vector-icons`
2. Then run `react-native start --reset-cache`
3. Finally run `react-native run-ios` to restart the simulator
```




## 2. 使用了NativeBase的Header组件后还能有ReactNavigation那样的切换效果吗？





## 3. 使用了React Navigation，在android下可以显示成iOS中那样的效果吗？




## 3. rn中render函数的return是需要有`()`扩起来的，否则会提示`Nothing was returned from render`