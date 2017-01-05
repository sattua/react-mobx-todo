import React, { Component } from 'react';
import {observer} from 'mobx-react';

import Todo from './todo';

@observer
class TodoList extends Component {
    
    getCustomTodos(){
        let todosTemp = [];
        var index = 0;
        
        this.props.observer.filteredTodos.forEach(function (value) {
            todosTemp.push(<Todo key={index++} label={value} />);
        });
        
        return todosTemp;
    } 
    
    render() {
        
        return (
            <div className="TodoList">
                <ul>
                    {this.getCustomTodos()}
                </ul>
            </div>
        );
    }
}

export default TodoList;