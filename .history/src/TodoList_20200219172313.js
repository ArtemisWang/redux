import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store'
import {changeInputAction,deleteItemAction,addItemAction, getListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI';
import axios from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.clickBtn=this.clickBtn.bind(this)
        this.changeInputValue=this.changeInputValue.bind(this)
        this.storeChange=this.storeChange.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
        
    }
    render() { 
        return ( 
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                list={this.state.list}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
          );
    }
    componentDidMount(){
        axios.get('https://www.fastmock.site/mock/f6810f18774c59848477631a62a98c76/demo1/api/getTodoList')
        .then((res)=>{console.log(res)})
    }

    changeInputValue(e){
        const action=changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action=addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        const action=deleteItemAction(index)
        console.log(index)
        store.dispatch(action)
    }
}
 
export default TodoList;