import React, { useState } from 'react';
import Result from './components/Result'
import Button from './components/Button'

const getOmikujiResult = (apiResult) => {
  switch (apiResult) {
    case "S":
      return "大吉";
    case "A":
      return "吉";
    case "B":
      return "中吉";
    case "C":
      return "小吉";
    default:
      return "凶";
  }
}

function App() {
  const [displayText, setDisplayText] = useState("運勢");

  const handleClick = async () => {
    setDisplayText("...");
    try {
      const response = await fetch('http://localhost:3000/gacha');
      const data = await response.json();
      const omikuji = getOmikujiResult(data.result);
      setDisplayText(omikuji);
    } catch (error) {
      console.error("Failed to fetch gacha result:", error);
      setDisplayText("エラー");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Result result={{ result: displayText }} />
      <Button handleClick={handleClick} />
    </div>
  )
}

export default App
