console.log('App.js is running...');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your live in the hands of a computer.',
    options: ['One', 'Two']
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No potions'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
var user = {
    name: 'Petr',
    age: 123,
    location: 'Prague'.toUpperCase()
};

function getLocation(location) {
    if (location) {
        return <p>Location: <b>{location}</b></p>
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous' + '!'}</h1>
        {(user.age && user.age >= 18) && <p>Age: <b>{user.age}</b></p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
