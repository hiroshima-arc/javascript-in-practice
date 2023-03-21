# 実践 JavaScript

[![Node.js CI](https://github.com/hiroshima-arc/javascript-in-practice/actions/workflows/node.js.yml/badge.svg)](https://github.com/hiroshima-arc/javascript-in-practice/actions/workflows/node.js.yml)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/hiroshima-arc/javascript-in-practice)

## 概要

JavaScript はウェブ開発のための言語で、ECMAScript は JavaScript の仕様であり、バージョンアップによって新機能が追加されています。Node.js は JavaScript をサーバーサイドで実行するためのプログラムであり、npm と呼ばれるパッケージマネージャーを備えています。ES5 と ES6 は JavaScript のバージョンであり、ES6 は構文や新機能の追加があり、Babel を使用することで ES5 に変換することができます。

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
- GitHub とは
- GitHub Actions とは
- Heroku とは
- Vercel とは

**[⬆ back to top](#構成)**

### [運用](./docs/run.adoc)

- NPM スクリプトとは
- Gulp とは
- Asciidoc とは
- BrowserSync とは
- 既存の npm タスクを統合する

**[⬆ back to top](#構成)**

### [開発](./docs/dev.adoc)

- 要件
- 仕様
- 設計
- 実装

**[⬆ back to top](#構成)**

## 参照

- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/ja/v1.0.0/)
- [最新版で学ぶ webpack 5 入門 Babel 7 で ES2021 環境の構築](https://ics.media/entry/16028/)
- [最新版 TypeScript+webpack 5 の環境構築まとめ](https://ics.media/entry/16329/#)
