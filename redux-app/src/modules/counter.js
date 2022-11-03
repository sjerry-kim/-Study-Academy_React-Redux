// useReducer의 형식과 유사(초기값, 리듀서 함수)
// 초기값
const initalState = {
  number : 0,
  changeNum : 1,
}

// dispatch에 들어갈 {type: "액션"} 객체를 함수로 만들어서 내보내줌
export const increase = () => ({type: "increase"}) // 리턴값이 객체
export const decrease = () => ({type: "decrease"})
                      // 화살표함수도 동일하게 매개변수의 값을 받아올 수 있음
export const change = (value) => ({type: "change", payload:value})

/*
* thunk를 사용하여 비동기로 실행하는 액션함수를 만들수 있음.
* thunk의 형식을 사용했기 때문에, 바로 dispatch를 사용하는 게 아니라
* 나중에 추가해서 사용할 수 있음.
* thunk 사용형태 : export const 함수이름 = () => (dispatch) => {}
*/

export const increaseAsync = () => (dispatch) => {
  // dispatch를 실행하기 전에 진행할 내용 작성
  // dispatch를 통해서 액션실행 > 
  // : 액션ㅇ느 매개변수로 들고오지 않았기 때문에 객체로 직접입력해주거나
  // 이미 만들어둔 액션함수를 사용해서 실행
  
  // 위에 미리 작성한 액션함수를 사용해서 전달
  setTimeout(()=>{dispatch(increase())}, 1000);
}

export const decreaseAsync = () => (dispatch) =>{
                          // 액션값을 객체로 전달
  setTimeout(()=>{dispatch({type:"decrease"})},2000);
}

// 리듀서 함수
function counter(state = initalState, action){
  switch(action.type){
    case "increase" :
      const num = parseInt(state.changeNum);
      return {...state, number : state.number+num};
    case "decrease" :
      return {...state, number : state.number-state.changeNum};
    case "change" :
      return {...state, changeNum: action.payload}
    default :
      return state;
  }
}

export default counter;