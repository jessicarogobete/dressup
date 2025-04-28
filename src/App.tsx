import { useState } from 'react'
import viteLogo from '/vite.svg'
import rightArrow from './assets/arrow-right.svg'
import partygirl from './assets/Partygirlsmall.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Dress Up Party Girl!</h1>
      <div className='main_area'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <img src={partygirl} />
        <button>
          <img src={rightArrow} />
        </button>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
