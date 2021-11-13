'use strict';

console.log('App.js is running...');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your live in the hands of a computer.'
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    )
);
var user = {
    name: 'Petr',
    age: 123,
    location: 'Prague'.toUpperCase()
};
var userName = 'Petr';
var userAge = 123;
var userLocation = 'Odolena Voda';

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        React.createElement(
            'b',
            null,
            user.age
        )
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        React.createElement(
            'b',
            null,
            user.location
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
