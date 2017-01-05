import React, { Component } from 'react';
import {observer} from 'mobx-react';

import Todo from './todo';

@observer
class TodoList extends Component {
    
    /*
     * filterResults prop: 0-without filter, 1-pending, 2-done 
     */
    getFilteredTodos(){
        if(this.props.filterResults && this.props.filterResults === "0"){
            return this.props.observer.filteredTodos;
        }else if(this.props.filterResults && this.props.filterResults === "1"){
            //pending
            return this.filterByStatus(false);
        }else if(this.props.filterResults && this.props.filterResults === "2"){
            //done
            return this.filterByStatus(true);
        }
        
        
    } 
    /*
     * isSelected state on Todo component: true = done, false = pending 
     */
    filterByStatus(status){
        let todosTemp = [];
        
        this.props.observer.filteredTodos.forEach(function (todo) {
            debugger;
            if(todo.props.isSelected){
                todosTemp.push(todo);
            }
        });
        
        return todosTemp;  
    }
    
    render() {
        return (
            <div className="TodoList">
                <ul>
                    {this.getFilteredTodos()}
                </ul>
            </div>
        );
    }
}

export default TodoList;