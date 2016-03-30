# react-railgun

An elegant universal react-redux starter kit.<br/><br/>

![techs](https://raw.githubusercontent.com/nRewik/react-railgun/master/static/techs.png)

# Features

 * Universal React, Redux
 * Universal Hot Reloading
 * Development & Production Environment
 * No testing library ( pick yours )
 * No magic, KISS, just look at the code

# Tech

* [Webpack](https://webpack.github.io) Bundle our scripts into a single 'bundle.js' enabling hot reload via hmr
* [Babel](https://babeljs.io) Use ES6, ES7 now
* [Express](http://expressjs.com) HTTP server for server side rendering
* [React](https://facebook.github.io/react/) Fast, composable library for building UI
* [Redux](https://github.com/reactjs/redux) Solid software architecture
* [React Router](https://github.com/reactjs/react-router) Routing library for React
* [ESlint](http://eslint.org) with [Javascript Standard Style](http://standardjs.com/rules.html) Enforce consistent code style


# Structure

```
.
├── LICENSE
├── app-home.js
├── build/
├── package.json
├── source/
│   ├── client/
│   │   └── index.js
│   ├── server/
│   │   ├── app.js
│   │   ├── render-layout.js
│   │   ├── render.js
│   │   ├── routes/
│   │   ├── server.dev.js
│   │   ├── server.js
│   │   └── settings/
│   └── shared/
│       ├── components/
│       ├── configure-store.js
│       ├── reducers/
│       └── routes/
├── static/
├── webpack.config.dev.js
└── webpack.config.prod.js
```

# Getting started
```
git clone https://github.com/nRewik/react-railgun.git MyApp
cd MyApp
npm install
npm start

# Open localhost:3000
# For development use `npm run start-dev`
```

---------
Crafted with ❤️ by Nutchaphon Rewik.
