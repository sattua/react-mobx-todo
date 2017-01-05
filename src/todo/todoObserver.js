import {computed, observable} from 'mobx';

            
class TodoObserver {
    @observable todos = ['Trabajar', 'Dormir', 'Pagar Luz'];
    @observable filterKey = '';
    
    set createTodo(value){
        this.todos.push(value);
    }
    
    @computed get filteredTodos(){
        if(this.filterKey === ''){
            return this.todos;
        }
        let global = this;
        var doFilter = function filterByID(value) {
            var matchesFilter = new RegExp(global.filterKey.toLowerCase());
            return matchesFilter.test(value.toLowerCase()); 
        }
        
        return this.todos.filter(doFilter);
    }
}

var _TodoObserver = window._TodoObserver = new TodoObserver;

export default _TodoObserver;
