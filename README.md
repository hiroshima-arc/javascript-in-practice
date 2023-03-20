# 実践 JavaScript

[![Node.js CI](https://github.com/hiroshima-arc/javascript-in-practice/actions/workflows/node.js.yml/badge.svg)](https://github.com/hiroshima-arc/javascript-in-practice/actions/workflows/node.js.yml)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/hiroshima-arc/javascript-in-practice)

## 概要

JavaScriptはウェブ開発のための言語で、ECMAScriptはJavaScriptの仕様であり、バージョンアップによって新機能が追加されています。Node.jsはJavaScriptをサーバーサイドで実行するためのプログラムであり、npmと呼ばれるパッケージマネージャーを備えています。ES5とES6はJavaScriptのバージョンであり、ES6は構文や新機能の追加があり、Babelを使用することでES5に変換することができます。

### 目的

- 環境構築の理解を深める
- システムアーキテクチャの理解を深める
- 運用ツールの理解を深める

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

```
npm install
npm start
```

### [構築](./docs/build.adoc)

- 開発言語について
- 開発環境の構築
- アプリケーションコンポーネントの構築

**[⬆ back to top](#構成)**

### [配置](./docs/ship.adoc)

- システムアーキテクチャ
- GitHubとは
- GitHub Actionsとは
- Herokuとは
- Vercelとは

**[⬆ back to top](#構成)**

### [運用](./docs/run.adoc)

- NPMスクリプトとは
- Gulpとは
- Asciidocとは
- BrowserSyncとは
- 既存のnpmタスクを統合する

**[⬆ back to top](#構成)**

### [開発](./docs/dev.adoc)

- 要件
- 仕様
- 設計
- 実装

**[⬆ back to top](#構成)**

## 参照
- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/ja/v1.0.0/)
- [最新版で学ぶwebpack 5入門Babel 7でES2021環境の構築](https://ics.media/entry/16028/)
- [最新版TypeScript+webpack 5の環境構築まとめ](https://ics.media/entry/16329/#)