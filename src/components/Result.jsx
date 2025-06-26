import React from 'react';
import resultColor from '../libs/resultColor';
const Result = ({result}) => {
  return (
    <div className={resultColor(result.result)}>{result.result}</div>
  )
}

export default Result;
