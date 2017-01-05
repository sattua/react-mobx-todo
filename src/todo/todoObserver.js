import {computed, observable} from 'mobx';
import React, { Component } from 'react';

import Todo from './todo.js';
            
class TodoObserver {
    @observable todos = [];
    @observable filterKey = '';
    
    set createTodo(todo){
        this.todos.push(<Todo key={todo.key} label={todo.label} />);
    }
    
    @computed get filteredTodos(){
        if(this.filterKey === ''){
            return this.todos;
        }
        
        let global = this;
        var doFilter = function (todo) {
            debugger;
            var matchesFilter = new RegExp(global.filterKey.toLowerCase());
            
            return matchesFilter.test( todo.props.label.toLowerCase() ); 
        }; 
        
        return this.todos.filter(doFilter);
    }
}

var _TodoObserver = window._TodoObserver = new TodoObserver;

export default _TodoObserver;
