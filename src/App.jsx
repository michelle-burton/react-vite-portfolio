import { useState } from 'react'
import './index.css'
import { Hero, Footer } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      </div>
          <h1 class="text-3xl font-bold underline">My Portfolio</h1>
          <Hero />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
          </p>
          <Footer/>
    </>
  )
}

export default App
