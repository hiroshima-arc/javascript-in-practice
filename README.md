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


**[⬆ back to top](#構成)**

### 配置

**[⬆ back to top](#構成)**

### 運用

**[⬆ back to top](#構成)**

### 開発

**[⬆ back to top](#構成)**

## 参照
- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/ja/v1.0.0/)