'use strict';

console.log('App.js is running...');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info...'
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Petr'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        React.createElement(
            'b',
            null,
            '123'
        )
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        React.createElement(
            'b',
            null,
            'Prague'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
