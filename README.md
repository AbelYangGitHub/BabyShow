# READ ME

使用React Native做的一个宝宝秀项目

## 开发环境

* Homebrew: 11.3.6
* node: 8.9.1
* yarn: 1.3.2
* react@16.0.0
* javac 1.8.0_152
* https://services.gradle.org/distributions/gradle-2.14.1-all.zip

## 依赖项
```
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
* 











# NativeBase官方文档笔记

==NativeBase应该是封装了React-Native中的一些组件，并在说明中用｀Replacing Component｀的形式进行说明。｀Replacing Component｀说明了当前组件会被替换成React-Native的某个组件。也可以通过这个来学习NativeBase在制作自定义组件的时候都使用那些组件，为自己开发组件的时候提供借鉴。==

==NativeBase应该是封装了React-Native中的一些组件，并在说明中用｀Replacing Component｀的形式进行说明。｀Replacing Component｀说明了当前组件会被替换成React-Native的某个组件。也可以通过这个来学习NativeBase在制作自定义组件的时候都使用那些组件，为自己开发组件的时候提供借鉴。==





## 组件

### Anatomy
ReactBase提供了一个自己的结构组件，叫做Container

Anatomy，结构，包括<Header>,<Content>,<Footer>，他们在使用的时候需要被<Container>组件包裹，这样NativeBase就可以自动安排结构组件的位置了。

#### Footer  (Component)
* Replacing Component: React Native `View`.
#### Content  (Component)
* Replacing Component: React Native Keyboard Aware Scroll View's `KeyboardAwareScrollView`

> 页面布局使用Header、Content、Footer；Header中的左中右布局使用Left、Body、Right



## ActionSheet  (API)

* NativeBase ActionSheet is a wrapper around the React Native `ActionSheetIOS` component.
* 使用ActionSheet的时候需要把整个app最顶端的组件使用NativeBase的<Root>组件包裹起来。比如：

```
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
```
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

```
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











# Customize (自定义样式)

NativeBase是建立在ReactNative组件之上的。你可以给任何一个NativeBase组件传递一个style属性，这些属性值都会覆盖掉默认样式。

执行下面的步骤可以自定义NativeBase组件：
1. 安装完NativeBase后在终端中之行`node node_modules/native-base/ejectTheme.js`
  * 这会在项目根目录创建一个文件夹native-base-theme，里面有两个文件夹：
    * variables：包含3个预置的主题（这三个主题分别叫做platform（默认主题）、material、commonColor（使用这个似乎更好））的变量
      * platform主题：默认主题，它为每个平台提供了适用于特定平台的样式
      * material主题：提供了Google的Meterial风格的样式
      * commonColor主题：（使用这个似乎更好）为所有平台都提供了统一的样式（但它遵从特定平台的图标、字体、和组件方向）
    * components：包含所有组件的样式（这些样式的值直接引用在上边varialbes主题变量的值，并且针对特定组件添加了特定的样式属性）

> 所以在效果上来说，修改variables文件夹中的样式，受影响的样式贯穿整个app；而修改components文件夹中的样式，受影响的只是特定的组件。







# 开发实战

## 1. 安装完NativeBase后执行`react-native run-ios`，提示`Unrecognized font family ionicons`
1. Run `react-native link react-native-vector-icons`
2. Then run `react-native start --reset-cache`
3. Finally run `react-native run-ios` to restart the simulator




## 2. 使用了NativeBase的Header组件后还能有ReactNavigation那样的切换效果吗？
