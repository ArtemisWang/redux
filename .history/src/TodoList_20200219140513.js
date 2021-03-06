import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import store from './store'
import  {CHANGE_INPUT, DELETE_ITEM, ADD_ITEM} from './store/actionTypes'
import {changeInputAction,deleteItemAction,addItemAction} from './store/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.clickBtn=this.clickBtn.bind(this)
        this.changeInputValue=this.changeInputValue.bind(this)
        this.storeChange=this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        
    }
    render() { 
        return ( 
            
          );
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