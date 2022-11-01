// 메모배열 저장
// 초기값
const inistalState = {
  memolist :[
    {
      id : 1,
      title: "제목",
      text: "내용"
    }
  ]
}

// 리듀서값 작성
function memo(state=inistalState, action){
  switch(action.type){
    default:
      return state;
  }
}

export default memo;