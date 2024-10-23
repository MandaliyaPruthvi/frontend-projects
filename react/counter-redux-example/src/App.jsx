// import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state);

  const handleIncrement = () => {
    // setCount(count + 1);
    dispatch({type: 'INCREMENT'});
  }

  const handleDecrement = () => {
    dispatch({type: 'DECREMENT'});
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleIncrement}>Increment</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
