import React, { Component } from 'react';
import './css/todo.css'

let Todo = React.createClass({
    
    getInitialState : function() {
        return { 
            visibility: true, // component visibility on screen.
            isSelected: false // component visibility on screen.
        };
    },
    
    /*
     * Changes isSelected state from true to false and viceversa
     * 
     * @returns {Generator}
     */
    selectionToggle: function() {
        if(this.state.isSelected){
            this.setState( { isSelected: false} );
        }else{
            this.setState( { isSelected: true } );
        }
    },
    
    getSelectionState: function(){
        if(this.state.isSelected){
            return "Done!!!";
        }else{
            return "Pending";
        }
    },
    
    render: function() {
        return (
            <div className="Todo">
                <div className="todo-box" >
                    <table>
                        <tbody>
                        <tr> 
                            <td><label>{this.props.label}, is {this.getSelectionState()} </label> </td>
                            <td> <input type="checkbox" onClick={ this.selectionToggle } /> </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

export default Todo;