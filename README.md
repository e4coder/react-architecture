# PrimeTrader App

## Table of Contents
1. [Overview](#overview)
2. [Technologies Used](#technologies-used)
3. [Development Setup](#development-setup)
   - [Prerequisites](#prerequisites)
   - [Getting Started](#getting-started)
4. [Architecure](#architecture)
   - [Folder Structure](#folder-structure)

## Overview
This architecture is inspired from the bulletproof-react architecture. Which utilizes the following Technologies.

## Technologies Used

- **React**: A JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components that can manage their own state.
- **TypeScript**: A superset of JavaScript that adds static types, which can help catch errors at compile time. It's commonly used for developing large-scale applications and provides better tooling and documentation support.
- **Vite**: A build tool that provides a faster and more efficient development experience for modern web projects. It features hot module replacement and is designed to work seamlessly with frameworks like React.
- **Tailwind CSS**: A utility-first CSS framework that enables rapid UI development by providing pre-defined classes for styling elements directly in your markup.
- **Jatoi**: A lightweight state management solution that is simpler than Zustand. It provides an intuitive API for managing application state without the complexity of larger libraries.
- **Zustand**: A small, fast, and scalable state management solution for React applications. It simplifies the management of application state, particularly in larger applications.
- **TanStack Router**: A flexible and powerful router for React applications, designed to handle complex routing scenarios while providing features like data fetching and nested routes.
- **TanStack Query**: A powerful data-fetching library for React that simplifies server state management. It provides hooks for fetching, caching, and updating data, enhancing the developer experience.
- **Storybook**: An open-source tool for developing UI components in isolation. It allows developers to create and showcase components independently, facilitating easier testing and documentation.

# Development Setup
This guide walks you through setting up a development environment for the project. This setup includes cloning the repo and setting up the ENV.

| Service        | Description                | URI                     | Env          |
|----------------|----------------------------|-------------------------|--------------|
| app            | Frontend                 | localhost:3000          | Local       |
| backend     | API Server       | {url}          |  Sandbox       |
| Websocket Service     | Websocket Service for notifications | {url}          | sandbox       |

## Prerequisites
Before you begin, ensure you have the following installed on your system:
* Nodejs
* npm

## Getting Started
1. **Clone the Repository** (if applicable)
```shell
$ git clone <REPOSITORY>
```
2. CD into the project
```shell
$ cd <REPOSITORY>
```
3. Create the `.env` file
```env
VITE_APP_API_URL=https://tempapi.primetrader.com/api/v1
VITE_APP_DEV=true
```
4. Install Dependencies
```shell
$ npm i
```
5. Run the development servers
```
$ npm run dev
$ npm run storybook
```

# Architecture

The architecture takes inspiration from the bulletproof react architecture.

## Folder Structure
- **/src**
  - **/app**
  - **/assets**
  - **/components**
  - **/config**
  - **/features**
  - **/lib**
  - **/routes**
  - **/store**
  - **/types**
  - **/utils**

| Directory         | Description                                          |
|-------------------|---------------------------------------------         |
| /app              | Module and Page composition                          |
| /assets           | Static asset files                                   |
| /components       | Globally accessible components                       |
| /config           | Global configurations and env setup                  |
| /features         | Components to be used for module compositions        |
| /lib              | Global library setup ( api-clients, ... )            |
| /routes           | Tanstack Router Setup                                |
| /store            | Setup of global stores ( Zustand, Jatoi ... )        |
| /types            | Globally accessible types                            |
| /utils            | Globally accessible utility functions                |

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
