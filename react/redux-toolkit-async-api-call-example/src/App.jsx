import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/slices/todo';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("state: ", state);

  if (state?.todo?.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <button onClick={() => {
        dispatch(fetchTodos())
      }}>Fetch Todos</button>
      {
        state.todo.data && state.todo.data.map((data, index) => {
          return (
            <li key={index}>{data.title}</li>
          )
        })
      }
    </div>
  )
}

export default App
