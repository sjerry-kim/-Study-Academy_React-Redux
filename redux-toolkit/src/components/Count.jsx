import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../modules/counter";

const Count = () => {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>{dispatch(increment())}}>+1</button>
      <button onClick={()=>{
        // incrementByAmount()의 인수값으로 들어간느 값은 payload로 전달됨
        dispatch(incrementByAmount(11))}}>
          click
      </button>
    </div>
  );
}

export default Count;