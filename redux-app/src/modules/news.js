// 초기 state선언
// API로 값을 가져오는 경우에 데이터를 가져오는 속도가 느릴 수 있으므로 loading을 작성
const initalState = {
  loading : false,
  news : null,
}

/* Thunk를 통해서 값을 받아오는 액션함수 작성 */
// thunk의 내용이 비동기 함수임을 알림 -> async 위치 확인
export const getNews = () => async (dispatch) => {
  dispatch({type : "startLoad"})
  const response = await fetch("https://newsapi.org/v2/top-headlines?country=kr&apiKey=c4c09dd0ba45435cb60e93cd10259c2a");
  const body = await response.json();
  if(body.status == 'ok'){
    dispatch({type:"getNews", payload: body.articles})
  }
  dispatch({type: "endLoad"})
}

// 리듀서 함수 작성
const news = (state = initalState, action) => {
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

export default news;