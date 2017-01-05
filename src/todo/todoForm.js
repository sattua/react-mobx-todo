import React, { Component } from 'react';
import {observer} from 'mobx-react';

@observer
class TodoForm extends Component {
    createTodo(e){
        this.props.observer.createTodo = this.props.observer.filterKey
        this.props.observer.filterKey = "";
    }
    filter(e){
        this.props.observer.filterKey = e.target.value;
    }
    render() {
        return (
            <div className="TodoForm">
                <div>
                    <input type="text" value={this.props.observer.filterKey} onChange={this.filter.bind(this)} />
                    <input onClick={this.createTodo.bind(this)} type="submit" value='Create'/>
                </div>
            </div>
        );
    }
}

export default TodoForm;