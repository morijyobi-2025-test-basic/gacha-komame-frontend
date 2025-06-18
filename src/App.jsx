import { useState } from 'react'
import Result from './components/Result'
import Button from './components/Button'

function App() {
  const [result, setResult] = useState({"result": "X"})

  const handleClick = async () => {
      const response = await fetch('http://localhost:3000/gacha')
      const data = await response.json()
      setResult(data)
  };

  return (
    <div>
      <Result result={result} />
      <Button handleClick={handleClick}/>
    </div>
  )
}

export default App
