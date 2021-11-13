console.log('App.js is running...');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info...</p>
    </div>
);

var templateTwo = (
    <div>
        <h1>Petr</h1>
        <p>Age: <b>123</b></p>
        <p>Location: <b>Prague</b></p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
