import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount} from './store/slices/counter';

import './App.css';

function App() {

  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p> count is: {counter}</p>
        <p>

          <button type="button" onClick={() => dispatch(increment())}>
            Increment
          </button>

          <button type="button" onClick={() => dispatch(decrement())}>
            Decrement
          </button>

          <button type="button" onClick={() => dispatch(incrementByAmount(2))}>
            Increment by 2
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
