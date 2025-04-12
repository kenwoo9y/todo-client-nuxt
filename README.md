# todo-client-nuxt

This is a ToDo Web Client built with Nuxt.js, offering a seamless and intuitive user experience.

## Tech Stack
![Nuxtjs](https://img.shields.io/badge/Nuxt-00DC82.svg?style=for-the-badge&logo=Nuxt&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

### Programming Languages
- [JavaScript](https://developer.mozilla.org/en/docs/Web/JavaScript) - Primary development language
- [TypeScript](https://www.typescriptlang.org/) - For type definitions

### Frontend
- [Nuxt.js](https://nuxt.com/) v3.16.1 - Vue.js-based full-stack framework
- [Vue.js](https://vuejs.org/) v3.5.13 - Progressive JavaScript framework
- [Vuetify](https://vuetifyjs.com/) - Material Design component framework
- [Pinia](https://pinia.vuejs.org/) v3.0.1 - State management library for Vue.js

### Development Environment
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) - Node.js package manager
- [Docker](https://www.docker.com/) - Containerization platform
- [Docker Compose](https://docs.docker.com/compose/) - Tool for defining and running multi-container Docker applications

### Testing & Quality Assurance
- [Vitest](https://vitest.dev/) v3.0.9 - Vite-native unit testing framework
- [ESLint](https://eslint.org/) v9.23.0 - JavaScript code quality and style checker
- [Prettier](https://prettier.io/) v3.5.3 - Code formatter

### CI/CD
- GitHub Actions - Continuous Integration and Deployment


## Setup
### Initial Setup
1. Clone this repository:
    ```
    $ git clone https://github.com/kenwoo9y/todo-client-nuxt.git
    $ cd todo-client-nuxt
    ```

2. Build the required Docker images:
    ```
    $ make build-local
    ```

3. Start the containers:
    ```
    $ make up
    ```

## Usage
### Container Management
- Check container status:
    ```
    $ make ps
    ```
- View container logs:
    ```
    $ make logs
    ```
- Stop containers:
    ```
    $ make down
    ```

## Development
### Running Tests
- Run tests:
    ```
    $ make test
    ```
- Run tests with coverage:
    ```
    $ make test-coverage
    ```

### Code Quality Checks
- Lint check:
    ```
    $ make lint-check
    ```
- Apply lint fixes:
    ```
    $ make lint-fix
    ```
- Check code formatting:
    ```
    $ make format-check
    ```
- Apply code formatting:
    ```
    $ make format-fix
    ```
