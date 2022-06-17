import "./App.css";
import { Component } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { increment, decrement, incrementByValue } from "./counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const increment1 = () => {
    dispatch(increment());
    //increment(dispatch);
  };

  const decrement1 = () => {
    dispatch(decrement());
    //decrement(dispatch);
  };

  const incrementByValue1 = (value) => {
    dispatch(incrementByValue(value));
    //incrementByValue(dispatch, value);
  };

  return (
    <div className="App">
      <div>{count}</div>
      <div>
        <button onClick={increment1}>Increment</button>
        <button onClick={decrement1}>Decrement</button>
        <button
          onClick={() => {
            incrementByValue1(3);
          }}
        >
          Increment by 3
        </button>
      </div>
    </div>
  );
};

// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//       </div>
//     );
//   }
// }

export default App;
