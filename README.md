# 実践 JavaScript

## 概要

JavaScriptはウェブ開発のための言語で、ECMAScriptはJavaScriptの仕様であり、バージョンアップによって新機能が追加されています。Node.jsはJavaScriptをサーバーサイドで実行するためのプログラムであり、npmと呼ばれるパッケージマネージャーを備えています。ES5とES6はJavaScriptのバージョンであり、ES6は構文や新機能の追加があり、Babelを使用することでES5に変換することができます。

### 目的

- トランスパイラの使い方を理解する
- パッケージマネージャーの使い方を理解する

### 前提

| ソフトウェア | バージョン | 備考 |
| :----------- | :--------- | :--- |
| nodejs       | 16.x       |      |

## 構成

- [構築](#構築)
- [配置](#配置)
- [運用](#運用)
- [開発](#開発)

## 詳細

### Quick Start

### 構築

# JavaScriptとECMAScript
JavaScriptは、ウェブサイトやWebアプリケーションの作成に広く使用されているプログラミング言語であり、HTMLとCSSとともに、ウェブページが動的で対話的になり、ユーザーと対話するための豊富な機能を提供します。JavaScriptは、クロスプラットフォームの言語であり、サーバーサイドの開発にも使用されます。JavaScriptは、ECMAScript仕様に従って設計され、現在最新のバージョンはECMAScript 2021です。

ECMAScriptは、JavaScript言語の標準化された仕様であり、文法、セマンティクス、および文法解析と実行に関する説明を提供します。ES2015（またはES6）以降のバージョンでは、ECMAScriptはより大きな役割を担うようになりました。現代のWebアプリケーションやフレームワークでは、多くの場合、主要な開発言語として使用されることがあります。

# Node.jsとは
Node.jsは、サーバーサイドでJavaScriptを実行するためのプログラムです。Node.jsは、GoogleのV8 JavaScriptエンジンを使用してJavaScriptを実行し、JavaScriptをウェブブラウザ以外の場所で実行することを可能にします。

Node.jsは、スケーラビリティ、高速性、非同期I/O、拡張性などの特性を持っており、WebアプリケーションやAPIなどのバックエンドの開発に広く使用されています。Node.jsを使用することで、同じ言語（JavaScript）でフロントエンドとバックエンドを実装できるため、開発者の生産性が向上し、コードの再利用性が高まるという利点があります。

また、Node.jsは、npm（Node Package Manager）と呼ばれるパッケージマネージャーを備えており、数多くのオープンソースのライブラリやモジュールが利用可能です。これにより、開発者は必要な機能を簡単に実装することができます。

Node.jsは、JavaScriptによるサーバーサイド開発を可能にし、Web開発において広く使用されるプログラミング言語の一つとなっています。

# ES5とES6
ES5とはECMAScript 5の略称で、2009年にリリースされたJavaScriptのバージョンです。ES5は古いバージョンのJavaScriptであり、多くの現代的な機能が欠落しています。しかし、ES5はまだよく使われており、完全なWebアプリケーションを作成するための基本的な構文やコーディング方法を示しています。

一方、ES6（またはES2015）は2015年にリリースされた最新バージョンのJavaScriptです。ES6は多くの改良、新機能、文法の修正が加えられています。例えば、let / constキーワードの導入、クラスの追加、アロー関数、デフォルト引数、分割代入などが挙げられます。これらの機能はコーディングを簡素化し、可読性や保守性を向上させました。

ただし、ES6は完全に採用されているわけではなく、ブラウザ間の互換性問題があったり、古いプロジェクトで使用されたりすることがあります。この場合、Babelと呼ばれるJavaScriptトランスパイラを使用して、ES6からES5に変換することができます。Babelは、次世代のJavaScriptコードをブラウザが理解できる旧世代のJavaScriptコードに変換するツールであり、babelが有名です。babelを使うことで、ES6以降で追加された機能を使用したコードを、ES5以前の環境でも実行することができます。

# パッケージマネージャー

パッケージマネージャーとは、プログラムやアプリケーションで使用するライブラリやモジュールなどの配布、インストール、アップデート、アンインストールなどを行うためのツールです。パッケージマネージャーを使用することにより、手動でライブラリやモジュールをダウンロードして配置したり、依存関係がある場合に手動で管理する必要がなくなります。さらに、利用されているライブラリやモジュールが最新であることを保証することもできます。代表的なパッケージマネージャーとしては、npm、yarn、pnpmなどがあります。

# Babelのセットアップ方法
BabelはJavaScriptのトランスパイラで、ES6以降のコードを従来のブラウザでも動作するように変換することができます。以下は、Babelのセットアップ方法です。

1 . Node.jsのインストール
まずはじめに、Node.jsをインストールしてください。

以下は、WindowsおよびMacOSユーザー向けのNode.jsのインストール方法です。

Windowsユーザー
手順1：Node.jsをダウンロード
https://nodejs.org/ja/ にアクセスして、LTSと書かれた緑色のボタンから Windows Installer (.msi) をダウンロードしインストールします。

手順2：インストール
ダウンロードした node-vXX.XX.X.msi ファイルをダブルクリックする
（XX.XX.X の部分は、現在のバージョン番号に置き換えてください）。
インストーラーの指示に従い、必要なセットアップ情報を入力する。
macOSユーザー
手順1：Homebrewのインストール
Homebrewは、macOSパッケージマネージャーです。ターミナルで以下のコマンドを実行しHomebrewをインストールします。

```
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
手順2：Node.jsをインストール
Terminal.app を開き、以下のコマンドを実行して Node.js をインストールします。

```
$ brew install node
```

上のコマンドを実行すると、Node.jsおよびnpm(Node Package Manager)がインストールされます。

以上です！正常にインストールされているかどうかを確認するために、以下のコマンドを実行することができます。

```
$ node -v
vXX.XX.X (バージョン番号)
```

2 . package.jsonファイルの作成

package.jsonファイルは、プロジェクトの設定ファイルです。package.jsonファイルを作成することで、プロジェクトの依存関係を管理することができます。以下のコマンドをターミナルで実行してください。

```
npm init -y
```

-yフラグを付けることによって、すべての質問にyesと回答することができます。したがって、コマンドを入力した後、何も入力せずにエンターキーを押して、すべての質問をデフォルト値で自動的に設定します。

3 . Babelパッケージのインストール
Babelを使うために、Babelパッケージをインストールします。以下のコマンドをターミナルで実行してください。

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

--save-dev オプションは、開発時に使用することを示します。 @babel/core パッケージは、Babelのコア機能を提供し、 @babel/cli パッケージは、コマンドラインからBabelを実行するための機能を提供します。

また、トランスパイルのためのBabelプラグインやプリセットを独自にインストールすることもできます。

4 . Babelの設定ファイルの作成
Babelを使ってトランスパイルするためには、Babelの設定ファイル .babelrcを作成します。

```
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

上記の例では、 @babel/preset-env を利用しています。これは、指定したECMAScriptのバージョンに対応したプラグインを自動的に追加してくれるプリセットです。

5 . トランスパイルの実行
Babelでトランスパイルを行うには、以下のコマンドを実行します。

```
npx babel src --out-dir lib
```

引数の src は、トランスパイル前のファイルが格納されているディレクトリ、 --out-dir は、トランスパイル後のファイルを出力するディレクトリを指定しています。以上のコマンドを実行すると、指定したディレクトリにトランスパイル後のファイルが生成されます。

以上が、Babelのセットアップ方法になります。

ES5のコードサンプルをお探しですね。ES5とは、ECMAScript 5というJavaScriptの標準仕様のことで、2009年に策定されました¹。ES5では、JSONやstrictモードなどの新しい機能が追加されました¹。

# トランスパイルの実行

以下に、ES6のコードサンプルをいくつか紹介します。

```js
// テンプレートリテラル
const name = 'John Doe';
const message = `Hello, ${name}!`;

// アロー関数
const add = (x, y) => x + y;

// デフォルトパラメーター
function greet(name = 'World') {
  console.log(`Hello, ${name}!`);
}

// 分割代入
const person = {
  firstName: 'John',
  lastName: 'Doe'
};

const { firstName, lastName } = person;

// スプレッド演算子
const arr = [1, 2, 3];
const arrCopy = [...arr];

// クラス
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```


これらのコードをES6にトランスパイルしてみましょう。

```
npx babel src --out-dir lib
```

トランスパイル後のコードは以下のようになります。

```js
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// テンプレートリテラル
var name = 'John Doe';
var message = "Hello, ".concat(name, "!");

// アロー関数
var add = function add(x, y) {
  return x + y;
};

// デフォルトパラメーター
function greet() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'World';
  console.log("Hello, ".concat(name, "!"));
}

// 分割代入
var person = {
  firstName: 'John',
  lastName: 'Doe'
};
var firstName = person.firstName,
  lastName = person.lastName;

// スプレッド演算子
var arr = [1, 2, 3];
var arrCopy = [].concat(arr);

// クラス
var Person = /*#__PURE__*/function () {
  function Person(firstName, lastName) {
    _classCallCheck(this, Person);
    this.firstName = firstName;
    this.lastName = lastName;
  }
  _createClass(Person, [{
    key: "getFullName",
    value: function getFullName() {
      return "".concat(this.firstName, " ").concat(this.lastName);
    }
  }]);
  return Person;
}();
```

# モジュールバンドラ

モジュールバンドラーとは、複数の JavaScript ファイルをまとめ、それらが相互に参照しあえるようにするツールです。JavaScript ファイル内で別のファイルの関数、変数、オブジェクトを参照するためには、そのファイルの読み込みや実行順序を意識する必要がありました。しかし、多数のファイルが存在したり、参照構造が深くなった場合には管理が大変です。

モジュールバンドラーを利用することで、JavaScript の分割管理をしやすくします。そして、それを結合することで一つの JavaScript ファイルにして配信することが可能になります。

代表的なモジュールバンドラーには webpack, Parcel, Rollup などがあります。使い勝手や特徴が微妙に異なりますので、プロジェクトの目的にあわせて選定することが重要です。

# モジュールバンドラのセットアップ

webpackのセットアップには以下の手順があります。

1. インストール

```
npm install --save-dev webpack webpack-cli
```

これで、Webpackがインストールされたことを確認できます。

3. 設定ファイルの作成
Webpackを実行する前に、設定ファイルを用意する必要があります。 webpack.config.js というファイル名で以下のファイルを生成してください。

```js
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
};
```

上記の設定ファイルでは、エントリーポイントとなるJSファイルが ./src/index.js であることを指定し、そのファイルからバンドルされたJSファイルを ./dist/bundle.js として出力するように指定しています。

以上の手順を経て、Webpackがセットアップされました。開発時にはnpm scriptsを使用してWebpackを実行することをおすすめします。

# モジュールバンドラの実行

npm scriptsを使用してWebpackを実行することをおすすめします。

```json
{
  "scripts": {
    "build": "webpack"
  }
}
```

上記のようにpackage.jsonにscriptsを追加することで、npm run build でWebpackを実行することができます。

`./src/sample_es5.js` に以下のコードを記述してください。

```js
function greeting(name) {
  return 'Hello ' + name;
}

module.exports = greeting;
```

`./src/index.js` に以下のコードを記述してください。

```js
var greeting = require('./sample_es5');

console.log(greeting('World'));
```

`./src/index.js` から `./src/sample_es5.js` を読み込んでいることが分かります。これをWebpackでバンドルすると、`./dist/bundle.js` に以下のようなコードが出力されます。

```js
(()=>{var r,o={520:r=>{r.exports=function(r){return"Hello "+r}}},e={};r=function r(t){var n=e[t];if(void 0!==n)return n.exports;var s=e[t]={exports:{}};return o[t](s,s.exports,r),s.exports}(520),console.log(r("World"))})();
```

# モジュールバンドラの設定

現状ではES6のコードをそのまま出力しています。ES5に変換するためには、babel-loaderを使用します。
パッケージをインストールしてwebpack.config.js に以下のコードを変更してください。

```
npm install --save-dev babel-loader
```

```js
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
    ],
  },
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
};
```

`./src/index.js` に以下のコードを変更してください。

```js
var greeting = require('./sample_es5');
console.log(greeting('ES5'));

var greet = require('./sample_es6');
var g = new greet.default('ES6');
g.say();
```

`./src/sample_es6.js` を作成します。

```js
class Greeting {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`Hello ${this.name}`);
  }
}

export default Greeting;
```

モジュールバンドルとトランスパイルが実行して、`./dist/bundle.js` を実行してみましょう。

```
npm run build
node ./dist/bundle.js
```

以下のように出力されれば成功です。

```
Hello ES5
Hello ES6
```

# CommonJSとES Modulesについて

CommonJS と ES Modulesは、Node.jsやブラウザなどで使われる JavaScriptのモジュールシステムです。しかし、この二つは異なる構文と仕組みを持ち、互換性がありません。

CommonJSは Node.js のデフォルトのモジュールシステムであり、 exports オブジェクトに値を追加することによって他のファイルからそれらの値を参照できます。そして、require() 関数を使い、外部のモジュールを読み込むことができます。

一方、ES Modulesは ECMAScript6で導入され、 import 文と export 文 という新しいキーワードを使用しています。デフォルトではstrictモードが有効となり、外部の変数へのアクセス・変更を禁止します。またimport文内で相対パス等の解決方法も指定することができます。

例えば、以下は CommonJS 形式で書かれた greet.js ファイルの例です。

```js
// greet.js - CommonJS
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

module.exports = greet;
```

exports オブジェクトに関数を登録しています。別のファイルでこれを使用するには require() 関数が必要です。

```js
// app.js - CommonJS
const greet = require("./greet");

greet("world"); // Hello, world!
```

次に、 ES Modules 形式で書かれた greet.js ファイルの例です。

```js
// greet.js - ES Modules
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

export default greet; // or `export const greet = ...` etc.
```

export default で関数を公開しています。別のファイルでこれを使用するには import 文が必要です。

```js
// app.js - ES Modules
import greet from "./greet.js";

greet("world"); // Hello, world!
```

ES Moduleは相対パスで指定しますが、拡張子は必要です。そして、ファイル名を省略した場合、index.js(index.mjs for module)が探索されます。

`.src/index.js` をES Modules形式に変更します。

```js
import greeting from './sample_es5';
console.log(greeting('ES5'));

import Greeting from './sample_es6';
const g = new Greeting('ES6');
g.say();
```

正しく動作するか確認してみましょう。

```
npm run build
node ./dist/bundle.js
```

exportとexport defaultの違いについて説明します。

まず、共通して言えることは、両方のキーワードはES Modulesで使用されます。これにより、JavaScriptコードをモジュール化して、必要に応じて再利用できます。

export： exportは、名前付きまたはデフォルトのエクスポート同様の役割を果たします。 ただし、最大の違いは、名前が付与されているかどうかです。

名前つき

```js
// greeting.js
export const message = "Hello World!";
export function sayHello(name) {
  console.log(`Hello ${name}!`);
}
```

使用側の呼び出し

```js
import {message, sayHello} from 'greeting';
```

デフォルト

```js
// greeting.js
export default class Greeting {
  constructor() {
    console.log("Hello, ES modules!");
  }
}
```

```js
// import the default exported class
import Greeting from 'greeting';
let instance = new Greeting(); // “Hello, ES modules！”
```

export default: export defaultは、ES6の標準で初めて導入されたdefaultから始まるエクスポート文法であり、単一のモジュールでデフォルトのエクスポートを定義するために使用されます。デフォルトのエクスポートには、名前がつけられていません。

```js
// greeting.js
export default class Greeting {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}
```

```js
 // Import the default exported class
import Greeting from 'greeting';
let instance = new Greeting('John');
instance.greet(); // "Hello, John!"
```

つまり、export defaultは、すぐに一つの値、クラス、オブジェクトをエクスポートする場合に使用することが多い一方で、exportは、複数の変数を一度に使用する場合や、 名前付きのエクスポートも行う場合に使用するため、プロジェクト内で必要に応じてexportとexport defaultの両方を使う場合があります。

# TypeScript

TypeScriptは、Microsoftが開発したオープンソースのプログラミング言語であり、JavaScriptと同じ文法と構造を持ちながらも、静的型付けをサポートする点が異なります。

TypeScriptは、JavaScriptの拡張バージョンとして設計されており、JavaScriptコードと互換性があります。したがって、TypeScriptのコンパイルされたJavaScriptコードは、どんなブラウザや実行環境でも動作します。

TypeScriptには次のような特徴があります。

強い静的型付けによるタイプエラーの早期発見
ECMAScript2015以降の仕様の利用が可能
オブジェクト指向プログラミング向けの機能（クラス・インターフェース・ジェネリックス等）の提供
ツール、フレームワーク、ライブラリの大規模なサポート
TypeScriptは、npmパッケージマネージャーを使用してインストールし、Visual Studio CodeなどのIDEで開発することができます。

# トランスパイルの実行

@babel/preset-typescriptを使用してTypeScriptを変換する手順は以下の通りです。

必要なパッケージをインストールします。
BabelとTypeScriptのパッケージ、および@babel/preset-typescriptをインストールします。


```
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-typescript @babel/plugin-proposal-class-properties typescript
```

Babelの設定ファイル（.babelrcまたはbabel.config.js）に、@babel/preset-typescriptを追加します。
.babelrcファイルが存在する場合：

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

babel.config.jsファイルを作成する場合：

```js
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript'
  ],
  plugins: ['@babel/plugin-proposal-class-properties']
};
```

`./src/index.ts`ファイルを作成し、TypeScriptコードを記述します。

```ts
```

TypeScriptファイルを変換します。

```
npx babel src --extensions '.ts,.tsx' --out-dir lib
```

これで、TypeScriptファイルが変換され、出力されたJavaScriptファイルにはES5コードが含まれるようになります。

# モジュールバンドラの設定

モジュールバンドラを使用してTypeScriptを変換する手順は以下の通りです。

```
npm install --save-dev ts-loader
```

`tsconfig.json`を作成します

```
npx tsc --init
```

webpack.config.jsファイルを更新し、以下のように設定します。

```js
module.exports = {
  mode: 'development',
  entry: './src/index_typescript.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
    ],
  },
  target: ["web", "es5"],
};
```

実行して確認します。

```
npm run build
node ./dist/bundle.js
```

以下のように表示されれば成功です。

```
Hello TypeScript
```

TypeScriptファイルをそのまま実行したい場合は、ts-nodeを使用します。

```
npm install --save-dev ts-node
```

動かし方は以下の通りです。

```
npx ts-node src/index_typescript.ts
```

# 開発環境の構築

## webpack-dev-serverのセットアップ

Webpack-dev-serverは、開発者がフロントエンドの開発に集中することを可能にするツールであり、「ライブリロード」（Live Reloading）や「ホットリロード」（Hot Reloading）などの機能を提供します。

```
npm install webpack-dev-server --save-dev
```

上記のコードブロックは、npmを使用してwebpack-dev-serverをインストールする方法を示しています。「--save-dev」は、依存関係を追加するためのものであり、開発時に必要なパッケージの情報を含めてpackage.jsonファイルに保存します。

設定
次に、webpack.config.jsファイルに次のような設定を追加します：

```js
const path = require('path');

module.exports = {
  //...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
```

上記のコードは、Webpack-dev-serverの設定内容を示しています。contentBaseはサーバーから配信されるコンテンツを指定するためのものであり、例えばJavaScriptやCSSなどの静的ファイルを含めることができます。compressは、圧縮オプションを有効化するためのものであり、portは使用するポート番号を指定するためのものです。

実行
最後に、以下のコマンドを実行して、アプリケーションを起動します：

```
npx webpack serve
```

これにより、Webpack-dev-serverが起動し、開発用サーバーが立ち上がります。起動後には、指定したポート番号でWebアプリケーションを表示することができます。

Webpack-dev-serverを使用することで、開発時にローカルサーバーを立ち上げ、ファイルの変更をリアルタイムに反映させることができます。また、このコードでは、HTMLWebpackPluginプラグインを使用してjsファイルに自動的にバンドルされたscriptタグを生成し、index.htmlに挿入することができます。

具体的には、webpack.config.jsの設定ファイルでhtml-webpack-pluginを次のように設定します：

```
npm install  html-webpack-plugin --save-dev
```

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ...他のWebpack設定

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html' // インデックステンプレートを指定
    })
  ]
};
```

これにより、自動的にオプションで指定したテンプレート（src/index.html）をベースとして生成されたHTMLファイルが、Webpack-dev-serverが起動するローカルサーバーのルートディレクトリに保存されます。このHTMLファイルには、自動的にビルドされたJavaScriptバンドルファイルへのscriptタグが追加されます。

この方法を使用することで、現在の開発環境を維持しながら、開発者は自動生成されたHTMLファイルを更新しなくても、変更後即座に反映がされるバンドルされたJavaScriptファイルを実行できます。

npmタスクに追加します。

```js
"scripts": {
    "build": "webpack",
    "start": "webpack server --config ./webpack.config.js --open",
},
```

ソースマップを有効化して、デバッグしやすくします。あわせて環境変数を設定して、開発環境と本番環境でソースマップの有効化を切り替えます。


```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV || "development";
const isDevelopment = env === "development";

module.exports = {
  mode: env,
  target: ["web", "es5"],
  devtool: isDevelopment ? "source-map" : false,
```

TypeScriptでソースマップを有効化するには、tsconfig.jsonに以下の設定を追加します。

```js
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```

## テスティングフレームワークのセットアップ

jestとは
JestはFacebookによって開発され、JavaScriptのテストフレームワークです。Jestの主な目的は、JavaScriptプロジェクトで単体テストもしくは統合テストを効率的かつ簡単に実行することです。

Jestは、mochaやjasmineなどの他のJavaScript用のテストフレームワークよりも、より高速かつシンプルで、開発者がテストを書きやすくなるように設計されています。また、JestはReactアプリケーションのテストに特化しているためReactのSnapshot Testing機能を利用したUIコンポーネントのテストに使われることが多くあります。

jestのセットアップ
以下の手順に従ってjestをインストールして初期設定を行います。

Jestパッケージのインストール

ターミナルでプロジェクトのルートディレクトリに移動した上で、下記コマンドを実行します。

```
npm install --save-dev jest
```

package.jsonファイルの更新

package.jsonファイル内でscriptsオブジェクトの配下にテスト用のコマンドを追加します。

```js
  "scripts": {
    "build": "webpack",
    "start": "webpack server --config ./webpack.config.js --open",
    "test": "jest --coverage"
  },
```

テストの作成

「__tests__」という名前のディレクトリまたは「*.test.js」または「*.spec.js」という接尾辞を持つJavaScriptファイルとしてテストスクリプトを作成します。

テストの実行

その上で下記コマンドを実行することでテストの実行が行えます。

```
npm test
```
ES Modulesを私用している場合はテストが失敗するので以下の設定を追加する

package.jsonの設定

```js
  "jest": {
    "moduleFileExtensions": [
      "js"
    ],
    "testMatch": [
      "**/**/*.test.js"
    ]
  }
```

TypeScript対応

TypeScriptを使用している場合は、ts-jestパッケージをインストールします。

```
npm install --save-dev ts-jest @types/jest
```

tsconfig.jsonの設定

```
"module": "es2020",
```

ファイル名について

JavaScriptのファイル命名規則として一般的に使用されるのは、以下のようなものがあります。

キャメルケース : ファイル名の先頭を小文字で始め、複数の単語が含まれる場合は、先頭を大文字で始める。例：utils.js
スネークケース : 単語間をアンダースコアで区切り、すべての文字を小文字で表記する。例：utils_functions.js
パスカルケース:単語の最初の文字だけを大文字で表記し、単語間をつなぎ合わせる形式。例: UtilsFunctions.js
これらの規則は、個人やチームによって異なることがあります。ただし、コンシステントで意味のある命名を使用することで、可読性を高めることができます。

Node.jsにおける一般的なファイル命名規則は、次のようになります。

ファイル名には、小文字の英字、数字、ハイフン（-）、アンダースコア（_）のみを使用します。
ファイル名は、拡張子を含めてできるだけ短く、明確でわかりやすい名前をつけるようにします。
ファイル名は、使用する場所や機能に基づいて命名するようにします。
Node.jsでは、ファイル名には「.js」の拡張子をつけることが一般的です。ただし、特定の用途に応じて異なる拡張子を使用することもあります。
例えば、以下のようなファイル名が一般的に使われます。

server.js: Node.jsで作成されたWebサーバーのメインファイル
app.js: Node.jsで作成されたアプリケーションのメインファイル
utils.js: 共通のユーティリティ関数を含むファイル
config.js: アプリケーションの設定ファイル
また、Node.jsプロジェクトでは、ファイル名の前に「index」という名前を付けることがよくあります。これは、そのディレクトリ内のデフォルトのエクスポートを表すファイルとして機能するためです。例えば、以下のようなファイル名があります。

index.js: モジュールのエントリーポイントとして機能するファイル
routes/index.js: アプリケーションのルーティングを管理するファイル
以上が、一般的なNode.jsファイル命名規則の例です。しかし、プロジェクトやチームによっては、異なる規則が使われる場合があります。

開発パッケージのセットアップ

```
npm install --save-dev marked@1.2.2 foreman
```

Procfileを作成する

```
app: npm app
watch: npm run watch
```

npmタスクを更新する

```
  "scripts": {
    "start": "nf start -j Procfile",
    "app": "webpack server --config ./webpack.config.js --open",
    "test": "jest --coverage",
    "watch": "webpack --watch --config webpack.config.js",
    "build": "webpack"
  },
```

**[⬆ back to top](#構成)**

### 配置

Vercelとは
Vercel（ヴァーセル）は、静的サイトのホスティング (デプロイ) から API の構築やデプロイまでのフルスタックサービスです。Vercelを使用すると、Next.js / React.js アプリを素早く簡単にデプロイすることができます。また、Vercelは、CDNを介して世界中のユーザーにアクセスするための安定した高速なパフォーマンスを提供します。

Vercelにデプロイする手順
Vercelのサインアップ
Vercel.comにアクセスし、新規登録・ログインします。
プロジェクトの作成
「New Project」ボタンを押下すると、GitHubやGitLab、BitbucketなどのVCS（バージョン管理システム）に接続可能、もしくは直接zipファイルをアップロードすることもできます。
リポジトリの選択
デプロイするリポジトリを選択します。自分のリポジトリが無ければ、Create a new repositoryをクリックして、新しいリポジトリを作成することもできます。
ビルドコマンドの入力
プロジェクトのファイル構造に合わせて、Vercelが正しいビルドコマンドを判断する場合もありますが、設定をカスタマイズする場合は、Build Command欄に npm run build または yarn build などの適切なビルドスクリプトを記述します。
環境変数の設定(必要な場合)
環境変数を使って、APIキーなどの隠された機密情報を取り扱うことができます。これらの値を保護することで、悪意ある攻撃からのアプリケーションを保護することができます。
デプロイするブランチの選択
プロジェクトのどのブランチをデプロイするのか選択します。
デプロイの開始
上記設定がすべて完了したら、「Deploy」ボタンをクリックして、デプロイを開始します。
デプロイの確認
デプロイが完了すると、VercelのダッシュボードでプレビューURLが表示されます。これをクリックするとデプロイ結果を確認することができます。また、このURLを共有して他の人とテストすることもできます。

VercelにCLIでデプロイする手順
Vercel CLIをインストールします。次のコマンドを実行してください。(事前にNode.jsがインストールされている必要があります)。

```
npm install -g vercel
```

webpack.config.jsのビルドファイルの出力先をpublicに変更します。

```
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
```

最後に以下のコマンドを実行してデプロイします。

```
vercel deploy
```

vercel.jsonファイルを編集することで、デプロイ時に様々な設定ができます。


Herokuとは
Herokuは、クラウド上にアプリケーションをデプロイするためのPaaS（Platform as a Service）です。Herokuでは、開発者が手間をかけずにアプリケーションの構築、実行、スケールすることができます。

Herokuにアプリをデプロイする手順
以下は一般的なHerokuアプリケーションのデプロイ手順です:

Step 1: Heroku アカウントの作成

最初に、Heroku 公式サイト から無料アカウントを作成してください。

Step 2: Heroku CLI のインストール

Heroku CLI（Command Line Interface）を使用して、アプリケーションをHerokuにデプロイします。
CLIのインストール手順は、このページ からご確認ください。

** Step 3: Heroku アプリケーションの作成**

Herokuのダッシュボードから新しいアプリケーションを作成することもできますが、CLIで作成することもできます。

```
$ heroku create jip-episode0
```

アプリ名を指定してコマンドを実行すると、新しいアプリケーションとgitリポジトリが作成されます。(空のリポジトリが作成されます)

** Step 4: アプリケーションのデプロイ **

最初に、アプリケーションをHerokuにデプロイするためにgitを設定します。

```
$ git init
$ git add .
$ git commit -m "initial commit"
```

次に、以下のコマンドを実行して、Herokuにアプリケーションをデプロイします。

```
$ git push heroku wip/episode/00
```

これで、コードがHeroku上にデプロイされます。Herokuはデプロイ時に自動的に依存関係を解決してくれるため、ビルドやセットアップに必要な手順を自分で書く必要はありません。ただし、必要なファイルに対して適切にProcfileを追加する必要があります。

** Step 5: アプリケーションの起動 **

アプリケーションが正常にデプロイされたら、以下のコマンドを使ってアプリケーションを起動します。

```
$ heroku ps:scale web=1
```

これで、アプリケーションが正常に起動するはずです。

以上で、Herokuにアプリケーションをデプロイする手順の簡単な紹介を終わります。


**[⬆ back to top](#構成)**

### 運用

**[⬆ back to top](#構成)**

### 開発

**[⬆ back to top](#構成)**

## 参照
- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/ja/v1.0.0/)
- [最新版で学ぶwebpack 5入門Babel 7でES2021環境の構築](https://ics.media/entry/16028/)
- [最新版TypeScript+webpack 5の環境構築まとめ](https://ics.media/entry/16329/#)