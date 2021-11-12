# Simple React JS application

Prepare environment
```bash
yarn global add live-server # or sudo npm install -g live-server
yarn global add babel babel-cli # or sudo npm install -g babel-cli
yarn add babel-preset-react
yarn add babel-preset-env
```

Compile
```bash
yarn install
babel src/app.js --out-file=public/scripts/app.js --presets=env,react
```

Run for development
```bash
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
live-server ./public/
```
