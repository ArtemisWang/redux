import {takeEvery} from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'
import axios from 'axios'

// generator作异步处理的函数
function* mySagas(){
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
    axios.get('https://www.fastmock.site/mock/f6810f18774c59848477631a62a98c76/demo1/api/getTodoList')
        .then((res)=>{
            const data=res.data
            const action=getListAction(data)
            put(action)
        })
    console.log('jss')
}

export default mySagas