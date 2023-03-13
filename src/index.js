import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const h1Style = {
//     color: 'red'
// }


// const name = 'Bob';
// const message = `Hello my name is ${name} and the current time is ${Date.now()}`;

// root.render(
    // <>
    //     <h1 id='first-h1' style={ h1Style }>{ message }</h1>
    //     <h1>I am second!</h1>
    // </>
// );

root.render(
    <App />
);
