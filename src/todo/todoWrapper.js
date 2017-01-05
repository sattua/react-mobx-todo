import React, { Component } from 'react';
import {observer} from 'mobx-react';

import Todo from './todo';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoObserver from './todoObserver';

@observer
class TodoWrapper extends Component {
    
    render() {
        return (
            <div className="TodoWrapper">
                <TodoForm observer={TodoObserver} />
                <TodoList observer={TodoObserver} />
            </div>
        );
    }
}

export default TodoWrapper;