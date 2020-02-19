import {takeEvery} from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'


// generator作异步处理的函数
function* mySagas(){
    yield takeEvery(GET_MY_LIST)
}

export default mySagas