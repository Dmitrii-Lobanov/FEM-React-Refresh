### FEM-React-Refresh

This is a repository to implement various react tools and update my skills lest to miss something useful and important

To run this project you need to run two commands:

in `api` folder: `npm run dev`
in root folder: `npm run dev`

## Build a React without a Build step

Create `padre-ginos` folder

Create an `index.html` file.

Put in it scripts for react and react-dom from CDN

```
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
```

Add a div with id="root" to the body

Run script by `npx serve`

Then add `<script src="./src/App.js"></script>` to the body

Add `Pizza` component and render 6 pizzas in `App` component

Add props to `Pizza` component

## Tooling

Add Prettier

Add ESLint

`npm i -D eslint eslint-config-prettier globals`

Configure ESLint

Add `.gitignore` file

Add `Vite`

Get rid off script tags

Create a basic Vite config

Install React and ReactDOM

`npm install react@18.3.1 react-dom@18.3.1`

## JSX

Create `Pizza.jsx` file

Add JSX to `Pizza` component

Add `className` to `Pizza` component

Configure ESLint for JSX

`npm i -D eslint-plugin-react`

Adjust ESLint config to disable prop-types and unescaped entities

Setup API Server by adding `api` folder with `server.js` file

Configure Vite proxy to use API server

Run `npm run dev` in both `api` and root folders

## React Hooks

Create an Order component to use state for pizza type and size

Add useEffect to fetch pizza types from API

Add a custom hook by extracting the logic for fetching pizza of the day

## Tanstack Router

Install Tanstack Router `npm i @tanstack/react-router`

Install Tanstack Router Devtools `npm i -D @tanstack/router-plugin @tanstack/router-devtools`

Add Tanstack Router to the project

## Tanstack Query

Install Tanstack Query `npm i @tanstack/react-query`

Install Tanstack Query Devtools `npm i -D @tanstack/react-query-devtools @tanstack/eslint-plugin-query`

Add ESLint plugin for Tanstack Query

Add React Query Devtools to the root component

Add QueryClientProvider to the root component

