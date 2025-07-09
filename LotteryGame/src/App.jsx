import './App.css';
import Lottery from './Lottery';
import { sum } from './Helper';

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 12;
  }

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
