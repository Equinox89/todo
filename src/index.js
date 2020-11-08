import React from 'react';
import ReactDOM from 'react-dom';

const el = (
    <div>
        <h1>My Todo list</h1>
        <input type="text" placeholder='search'/>
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    </div>
);

console.log(el)
ReactDOM.render(el, document.getElementById('root'));
