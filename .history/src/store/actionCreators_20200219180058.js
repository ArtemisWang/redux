import  {CHANGE_INPUT, DELETE_ITEM, ADD_ITEM, GET_LIST} from './actionTypes'
import axios from 'axios'

export const changeInputAction=(value)=>({
    type:CHANGE_INPUT,
    value
})

export const deleteItemAction=(index)=>({
    type:DELETE_ITEM,
    index
})

export const addItemAction=()=>({
    type:ADD_ITEM
})

export const getListAction=(data)=>({
    type:GET_LIST,
    data
})

export const getTodoList=()=>{
    return (dispatch)=>{
        axios.get('https://www.fastmock.site/mock/f6810f18774c59848477631a62a98c76/demo1/api/getTodoList').then((res)=>{
            const data=res.data
            const action=getListAction(data)
            dispatch(action)
        })
        
    }
}

export const getMyListAction=()=>({
    type:GET_MY_LIST
})