// import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counter-slice';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          dispatch(increment())
        }}>Increment</button>
        <p>{count}</p>
        <button onClick={() => {
          dispatch(decrement())
        }}>Decrement</button>
      </div>
    </>
  )
}

export default App
