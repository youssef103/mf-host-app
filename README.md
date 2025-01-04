# Micro-Frontend Host App

Welcome to the **Micro-Frontend Host App** repository. This app serves as the host for integrating multiple micro-frontends using **Module Federation**. The project demonstrates how to set up and manage micro-frontends dynamically, enabling multiple independent applications to be integrated into a unified user interface.

## 🚀 Features

- **Micro-Frontend Integration**: Seamlessly load multiple micro-frontends into a single host application using Webpack's Module Federation.
- **Dynamic Module Federation**: Dynamically load and share modules between different applications (micro-frontends) in runtime.
- **Scalable Architecture**: Easily extend and add more micro-frontends as the project grows.
- **React-based**: Built using React, but can be extended to any JavaScript framework with appropriate configuration.

## 📖 Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Setup](#setup)
4. [Running the App](#running-the-app)

## 📝 Introduction

The **Micro-Frontend Host App** is a demonstration of how to use **Webpack Module Federation** to create a host app that dynamically loads remote micro-frontends. It allows you to build scalable and maintainable web applications by decoupling the frontend code into independently deployable pieces.

## 🚧 Prerequisites

Before you begin, ensure that you have the following installed:

- **Node.js** (>= v14.x)
- **npm** or **yarn**
- **Vite** (installation instructions [here](https://vitejs.dev/))
- **React** (or your preferred frontend framework)

## ⚡ Setup

### 1. Clone the repository

```bash
git clone https://github.com/youssef103/mf-host-app.git
cd mf-host-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

## Remote app

- **remote-app repo** [link](https://github.com/youssef103/mf-remote-app)
