import { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmemo, deletememo } from "../modules/memo";

const Memo = () => {
  const memolist = useSelector((state)=>state.memo.memolist)
  // input 태그 2개를 만들어서 useState로 title과 text를 받아오기
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // useDispatch()를 통해서, 메모가 추가한 새로운 리스트를 생성 > memo.js 모듈에서 생성
  const dispatch = useDispatch();

  // useCallback를 사용해줄 때, 입력값이 있다면 입력값에 따라 바뀔 수 있도록 추가
  // 매개변수로 받아오는 값은 고정되지 않음. 매개변수 외의 값은 전부 고정
  const addMemo = useCallback(()=>{
    dispatch( addmemo({title: title, text: text}) )},[dispatch,title,text])

  const deleteMemo = useCallback((id)=>{
    dispatch( deletememo(id))},[dispatch])

  return (
    <div>
      <input type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
      <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
      <button onClick={addMemo}>메모</button>
      {
        memolist.map((memo)=>(
          <div>
            <h3>{memo.id}.{memo.title}:{memo.text}</h3>
            <button onClick={()=>{deleteMemo(memo.id)}}>delete</button>
          </div>
        ))
      }

      {memolist[0].title}
    </div>
  );
}

export default Memo;