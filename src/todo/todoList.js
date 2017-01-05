import React, { Component } from 'react';
import {observer} from 'mobx-react';

import Todo from './todo';

@observer
class TodoList extends Component {
    
    render() {
        
        return (
            <div className="TodoList">
                <ul>
                    {this.props.observer.filteredTodos}
                </ul>
            </div>
        );
    }
}

export default TodoList;