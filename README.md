暂时不使用这个文件夹下的项目，因为有几个文件不知道怎么回事没有权限访问了


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
## 组件

### Anatomy
ReactBase提供了一个自己的结构组件，叫做Container

Anatomy，结构，包括<Header>,<Content>,<Footer>，他们在使用的时候需要被<Container>组件包裹，这样NativeBase就可以自动安排结构组件的位置了。










# 开发实战

## 1. 安装完NativeBase后执行`react-native run-ios`，提示`Unrecognized font family ionicons`
1. Run `react-native link react-native-vector-icons`
2. Then run `react-native start --reset-cache`
3. Finally run `react-native run-ios` to restart the simulator
