import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/cicd/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
      The Lives of the Most Excellent Painters, Sculptors, and Architects (Italian: Le vite de' più eccellenti pittori, scultori, e architettori), often simply known as The Lives (Italian: Le Vite), is a series of artist biographies written by 16th-century Italian painter and architect Giorgio Vasari, which is considered "perhaps the most famous, and even today the most-read work of the older literature of art",[1] "some of the Italian Renaissance's most influential writing on art",[2] and "the first important book on art history".[3]

Vasari published the work in two editions with substantial differences between them; the first edition, two volumes, in 1550 and the second, three volumes, in 1568 (which is the one usually translated and referred to). One important change was the increased attention paid to Venetian art in the second edition, even though Vasari still was, and has ever since been, criticised for an excessive emphasis on the art of his native Florence.
      </p>
    </div>
  )
}

export default App
