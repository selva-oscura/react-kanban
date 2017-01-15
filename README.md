# react-kanban

Started with react-boilerplate - Boilerplate for "SurviveJS - React" 

Going through [SurviveJS - React](http://survivejs.com/react/introduction/) book.

## Getting Started

1. `git clone https://github.com/selva-oscura/react-kanban` - Clone project
2. `npm i` - Install dependencies. This might take a while.
3. `npm start` - Run development build. If it doesn't start, make sure you aren't running anything else in the same port. For Unix platforms, you can try `PORT=3000 npm start`. It will pick up the port from the environment if it's set.
4. Navigate browser to the port shown at terminal.
5. Start modifying the code. The browser should pick up the changes.

## Advanced Commands

Beyond development, the boilerplate supports other tasks listed below:

* `npm run build` - Generates a production build below `build/`. See the [Building with Webpack](http://survivejs.com/webpack/building-with-webpack/) part for more.
* `npm run deploy` - Deploys the contents of the `build/` directory below the **gh-pages** branch.
* `npm run test` - Runs `tests/` through Karma/Phantom/Mocha once.
* `npm run test:tdd` - Runs `tests/` in a TDD mode (watches for changes and rebuilds).
* `npm run test:lint` - Runs code through ESLint to spot code quality issues.
* `npm run stats` - Generates Webpack build statistics. See the [Analyzing Build Statistics](http://survivejs.com/webpack/building-with-webpack/analyzing-build-statistics/) chapter.
