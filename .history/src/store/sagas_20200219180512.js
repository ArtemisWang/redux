import {takeEvery} from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'


// generator作异步处理的函数
function* mySagas(){
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
    console.log('jss')
}

export default mySagas