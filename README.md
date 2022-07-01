<h1 align="center">
  <br>
    <img src="public/icon.svg" width="200" height="200">
  <br>
    📦 storage-service 🗃️
  <br>
</h1>

<h3 style="color: orange;" align="center">A minimal, self-hosted API service for tagging, organizing and locating any item.</h4>
<br>
<p align="center"><span style="font-weight: bold">NOTE:</span> This project is a very early work in progress and not yet ready for general use.</p>
<br>

<p align="center">
<!-- Docker Hub -->
  <a href="https://hub.docker.com/repository/docker/smdevelopment/storage-service">
    <img src="https://img.shields.io/docker/pulls/smdevelopment/storage-service.svg"
         alt="Docker Hub">
  </a>
  <!-- Typescript -->
  <a href="https://badges.frapsoft.com/typescript/code/typescript.svg?v=101">
    <img src="https://badges.frapsoft.com/typescript/code/typescript.svg?v=101"
            alt="Typescript">
  <!-- Issues -->
  <a href="https://github.com/StefanM98/storage-service/issues">
    <img src="https://img.shields.io/github/issues/StefanM98/storage-service"
         alt="issues">
  </a>
  <!-- License -->
  <a href="https://img.shields.io/badge/license-MIT-blue.svg">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg"
        alt="MIT License">
  <!-- PRs -->
  <a href="https://github.com/StefanM98/storage-service/pulls">
      <img src="https://img.shields.io/badge/PRs-welcome-ff69b4.svg"
           alt="PRs">
  <br><br>
  <!-- Signature -->
  <a href="https://stefandev.com">
    <img src="https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-Stefan_Milanovic-ff1414.svg"
        alt="Signature">
  </a>
  <br><br>
  <a href="https://www.buymeacoffee.com/stefandev" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
</p>

<hr \>

<h2>📖 Table of Contents</h2>

- [🎤 Introduction/Motivation](#-introductionmotivation)
  - [🤔 Why?](#-why)
  - [📦Storage Web/Mobile App](#storage-webmobile-app)
- [✔️ Project State & Features](#️-project-state--features)
- [🚀 Technologies](#-technologies)
- [🔧 Configuration](#-configuration)
- [🚩 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#️-prerequisites)
  - [Production](#production)
  - [Development](#development)
    - [Clone the repository](#clone-the-repository)
    - [Install dependencies](#install-dependencies)
    - [Rebuild the project](#rebuild-the-project)
    - [Fix code style and formatting issues](#fix-code-style-and-formatting-issues)
    - [Other useful commands](#other-useful-commands)
    - [Tests](#tests)
- [❕Known Limitations](#known-limitations)
    - [Images](#images)
    - [Supported Databases](#supported-databases)
- [💬 Contributing](#-contributing)
- [💖 Support](#-support)
- [📜 License](#-license)

## 🎤 Introduction/Motivation

### 🤔 Why?
Like most people, I have a basement filled with boxes containing things I will *(eventually)* need. And like many of those people, I tend to forget what I have and where I left it, especially if I don’t access it often. So I thought it would be cool if I had a way to be able to lookup what I have and where I left it in a simple way.

### 📦Storage Web/Mobile App
I plan to build a frontend application that relies on this service ([and you can too!](#-contributing)), in the comming months. Star the project and [follow me on LinkedIn](https://www.linkedin.com/in/stefanmilanovic/) to get updates and hear about other cool stuff!

In the meantime, I'm using [this custom iOS Shortcut](https://www.icloud.com/shortcuts/8afa841067f74876aa83426c7b635e2c) I built to add a single item to a storage. You simply provide the `URL` of your instance when importing. Once imported, you can add items to the storage by triggering the shortcut and passing in the `id` of the storage you want to add the item to. You will get prompted to take a picture, enter the name of the item, and optionally scan a barcode or change the quantity. My use case for this was programming a NFC tag to run the shortcut passing in the storage `id` stored in the tag's memory. I will be adding shortcuts for viewing the contents of a storage in the future.

## ✔️ Project State & Features

The project is still in its early stages of development and is not yet ready for general use. Here's the current state of things:

| Feature / Function | Description | Status |
|----------------|----------|----|
| 📦 Basic Item Storage                |  Working endpoints for viewing, creating, updating, and deleting storage containers.    |  ✅  |
| 🖼️ Upload/Download Item images       |  Currently, images are stored in as a `base64` encodded string in the DB. They will be properly stored in blob-based storage soon.    |  🚧  |
| 🔑 User based authentication   | User Registration & Login API endpoints  |  📅  |
| 📋 Detailed Tests & Documentation  | Tests and detailed API usage documention coming soon. |  📅  |
| 🏡 Home Assistant Integration/Card   |  [Home Assistant](https://www.home-assistant.io/) is a free and open-source software for home automation designed to be a central control center for smart homes with a focus on local control and privacy. Integrating storage-service with HA adds custom lovelace dashboard cards and new events & services.   |  📅  | 
| ↗️ UNRAID Community App  | Listing of the storage-service in the UNRAID community app store. |  📅  |

Legend:&emsp;
✅ <span style="color: #00ff00">Ready for general use</span>&emsp;
🚧 <span style="color: #ffa500">Work in progress</span>&emsp;
📅 <span style="color: #00d9ed">Planned</span>

<br>

>🌟 Have an idea for a feature? Please open an issue or PR. Want to add a feature yourself? Please check out the [Contributing](#-contributing) section.

<br>

## 🚀 Technologies
This API was built using Typescript and [LoopBack 4](https://loopback.io/doc/en/lb4/). 
Loopback is an **award-winning**, highly extensible, open-source Node.js and TypeScript framework based on Express. It enables you to quickly create APIs and microservices composed from backend systems such as databases and SOAP or REST services. With repositories playing such a crucial role, you can think of LoopBack as a **Model-Repository-View-Controller (MRVC)** framework.

I recently discovered LoopBack and decided to try it out. Leveraging their well-documented CLI tool, I was able to build this entire API in just a few hours while learning the basics of the framework! If you're familiar with TypeScript, I highly recommend you check out the [TypeScript API](https://loopback.io/doc/en/lb4/TypeScript-API.html) to get a better understanding of how LoopBack works.

## 🔧 Configuration

The following environment variables are currently available:

| Name | Description | Default | Required |
|------|-------------|---------|----------|
| `DB_CONNECTOR` | Database connector to use | `3000` | `mysql` | Yes |
| `DB_URL` | Database connection URL | None | No |
| `DB_HOST` | Database connection hostname | `localhost` | Yes |
| `DB_PORT` | Database connection port | `3000` | Yes |
| `DB_DATABASE` | Name of the database to use | `storage` | Yes |
| `DB_USER` | Database user | None | Yes |
| `DB_PASSWORD` | Database password | None | Yes |
| `MIGRATE_DB` | If true, performs database table migration upon starting the service. | `true` | No |

## 🚩 Getting Started

### ☑️ Prerequisites
- [Docker](https://www.docker.com/)
- A LoopBack supported database (see [LoopBack supported databases](https://loopback.io/doc/en/lb4/Database-connectors.html))

### Production

To run in production, simply run the following command replacing the values as necessary:

```sh
docker run -d --name='Storage-Service' 
    --net='bridge' 
    -e TZ="America/New_York" 
    -e HOST_OS="Unraid" 
    -e 'DB_CONNECTOR'='mysql' 
    -e 'DB_URL'='' 
    -e 'DB_HOST'='192.168.1.123' 
    -e 'DB_PORT'='3000' 
    -e 'DB_USER'='YOUR_USERNAME' 
    -e 'DB_PASSWORD'='YOUR_PASSWORD' 
    -e 'DB_DATABASE'='storage' 
    -e 'MIGRATE_DB'='true' 
    -p '3000:3000/tcp' 'smdevelopment/storage-service:v1'
```

### Development

#### Clone the repository
```sh
git clone https://github.com/StefanM98/storage-service.git && cd storage-service
```

#### Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

#### Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

#### Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

#### Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

#### Tests

```sh
npm test
```

## ❕Known Limitations

#### Images
- Item images are currently stored in as a `base64` encodded string in the DB (using LONGTEXT). They will be properly stored in blob storage soon. Until then, expect slower performance.

#### Supported Databases



## 💬 Contributing

I built this project for my very specfic use case, but if you have a feature you'd like to add, reach out! Pull requests are more than welcome! Here to learn by doing? Check the issue tracker for any issues marked "Good first issue".

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## 💖 Support

Found this project useful? Please consider supporting my development by buying me a coffee! ☕

<a href="https://www.buymeacoffee.com/stefandev" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## 📜 License

This software is licensed under the [MIT](https://github.com/nhn/tui.editor/blob/master/LICENSE) © [Stefan Milanovic](https://stefandev.com/).
