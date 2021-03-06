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
    renderCounterApp();
    console.log('addOne', count);
};

const minusOne = () => {
    --count;
    renderCounterApp();
    console.log('minusOne', count);
};

const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('reset', count);
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();