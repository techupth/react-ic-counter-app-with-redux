import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy10 } from "../slices/counterSlice";

function CounterApp() {
  const counter = useSelector((state) => {
    return state.counter.value;
  });

  const dispatch = useDispatch();

  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch(incrementBy10(10));
          }}
        >
          Increment by 10
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
