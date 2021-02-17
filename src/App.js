import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './actions/index'
import {decrement} from './actions/index'
import {signin} from './actions/index'
import UUseEffectHook from './UUseEffectHook';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <p>increment is +5, decrement is -1</p>
      <button onClick={() => dispatch(increment(5))} >+</button>
      <button onClick={() => dispatch(decrement())} >-</button>

      {isLogged ? <h3>Now I am signed in!</h3> : ''}
      <button onClick={() => dispatch(signin())} >Sign in</button>

      <UUseEffectHook />
    </div>
  );
}

export default App;
