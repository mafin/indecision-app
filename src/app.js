console.log('App.js is running...');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your live in the hands of a computer.',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    ++count;
    console.log(count);
    console.log('addOne');
};

const minusOne = () => {
    --count;
    console.log(count);
    console.log('minusOne');
};

const reset = () => {
    count = 0;
    console.log(count);
    console.log('reset');
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
