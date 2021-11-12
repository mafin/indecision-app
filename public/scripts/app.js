console.log('App.js is running...');

// JSX - JavaScript XML

// var template = <p id="x">This is JSX from app.js</p>;
var template = React.createElement(
    'h1',
    { id: 'x'},
    'This is JSX from app.js'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
