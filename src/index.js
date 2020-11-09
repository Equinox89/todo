import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";


const el = (
    <div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList/>
    </div>
);

console.log(el)
ReactDOM.render(el, document.getElementById('root'));
