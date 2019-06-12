# Qantas Code Test

## Overview

Qantas Code Test

http://kieradog.github.io/Qantas-Code-Test

React, Storybook, Storybook Snapshot Test, Jest Unit Test (@testing-library/react), Basic Webpack and Babel.

Test Coverage: 99.08%

### Browser Compatibility

- Target: > 0.25%, not dead
- Tested: Chrome, Safari

## Issues

- E2E might fail because it required to start server on 8080, need docker
- Some Component is not 100% covered, because of guarded by `propTypes`
- The `props` and `onChange` function of `SortSelect` need documented, `{ key: string, directions: Direction[]}` and `{ key: string, direction: Direction }`
- using `styled-components@3`, because of v4's `jest-styled-components` is not supported

## Getting Started

### Prerequisites

- Git
- Node(& npm): any 10.x version starting with 10.13.0 or greater

### Installation

1. `npm i` to install the website's npm dependencies

### Running locally

1. `npm run start:dev` to start the hot-reloading development server
2. open http://localhost:8080 to open the site in your favorite browser

- Tool: Webpack, Webpack Dev Server

### Storybook

1. `npm run storybook` to start the hot-reloading storybook server
2. open https://localhost:6006 to open the storybook in your favorite browser

- Tool: Storybook

## Running the tests

1. `npm i` to install the website's npm dependencies
2. `npm run test` to run __Lint__, __Unit Test__, __Snapshot Test__, __E2E Test__.

### Lint

ESLint, check syntax, find problems, and enforce code style.

- Tool: ESLint
- Style Guide: airbnb

### Unit Test

`npm run test:unit` to run unit test (`./src/components/**/*.spec.jsx`)

- Tool: Jest, @testing-library/react

### Snapshot Test

`npm run test:snap` to run snapshot test (`./src/components/**/*.stories.jsx`) 

- Tool: Jest, Storybook
- Test Config: `./storyshots/storyshots.spec.js`
- Snapshots: `./storyshots/__snapshots__/storyshots.spec.js`

### E2E Test

`npm run test:e2e` to run E2E test

- Tool: Jest, Puppeteer, jest-puppeteer

## Deploy

### Build

`npm run build` to build website artifacts

- Tool: Webpack, Babel
- Artifacts: `./dist`

### Environments

#### Github Page

`npm run deploy` to deploy to Github Page

## Authors

- Long Zhao, zlong@outlook.com
