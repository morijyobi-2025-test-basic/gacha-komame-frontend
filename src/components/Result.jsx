import React from 'react';
import resultColor from '../libs/resultColor';
const Result = ({result}) => {
  return (
    <div className={`border-2 border-gray-800 p-8 writing-vertical-rl text-6xl ${resultColor(result.result)}`}>
      {result.result}
    </div>
  )
}

export default Result;
