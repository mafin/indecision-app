console.log('App.js is running...');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your live in the hands of a computer.'
};

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);
var user = {
    name: 'Petr',
    age: 123,
    location: 'Prague'.toUpperCase()
};
var userName = 'Petr';
var userAge = 123;
var userLocation = 'Odolena Voda';

var templateTwo = (
    <div>
        <h1>{user.name + '!'}</h1>
        <p>Age: <b>{user.age}</b></p>
        <p>Location: <b>{user.location}</b></p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
