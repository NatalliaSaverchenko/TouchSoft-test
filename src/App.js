import { useEffect, useState } from 'react'
import Counter from './components/Counter/Counter'
import { isEven } from './api/parity'

import './App.css';

function App() {

  const [value, setValue] = useState(0)

  useEffect(() => {
    if (isEven(value)) {
      document.body.style.backgroundColor = 'green'
    } else {
      document.body.style.backgroundColor = 'yellow'
    }
  }, [value])

  return (
    <div className="app">
      <Counter value={value} setValue={setValue} />
    </div>
  );
}

export default App;
