import React, { Component } from 'react';
import {observer} from 'mobx-react';

import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoObserver from './todoObserver';

@observer
class TodoWrapper extends Component {
    
    render() {
        return (
            <div className="TodoWrapper">
                <TodoForm observer={TodoObserver} />
                <TodoList observer={TodoObserver} filterResults="0" />
                <h2>Pending</h2>
                <TodoList observer={TodoObserver} filterResults="1" />
            </div>
        );
    }
}

export default TodoWrapper;