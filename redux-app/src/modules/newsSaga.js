import {put, takeEvery} from 'redux-saga/effects'

// 초기값
const initalState = {
  loading : false,
  news : null,
}

/* Saga를 통해 비동기 함수 작성 - 전부 제너레이터 함수*/
// saga에서는 바로 비동기(async)를 붙일 수 없으므로 안이나 밖에 따로 함수 생성
function* getNewsSaga (){
  yield put({type: 'startLoad'})
  async function getData(){
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=kr&apiKey=c4c09dd0ba45435cb60e93cd10259c2a");
    const data = await response.json();
    return data;
  }
  // saga에서 제공해주는 call : call(getData) 작성 동일
  const data = yield getData();
  yield put({type: "getNews", payload: data.articles});
  yield put({type:"endLoad"})
}

// 모든 사가를 연결하기 위한 함수
export function* newsSaga(){
  yield takeEvery("newsSaga", getNewsSaga);
}

// 사가를 실행할 액션 함수
export const getnewsSaga = () =>({type: "newsSaga"})

// 리듀서
const newsSagaReducer = (state = initalState, action) => {
  switch (action.type){
    case "getNews":
      // 값이 다 들어왔다고 생각하고 작성
      return {
      ...state, 
      news : action.payload
    }
    case "startLoad":
      return {...state, loading : true};
    case "endLoad":
      return {...state, loading: false};
    default : 
      return state
  }

}

export default newsSagaReducer;