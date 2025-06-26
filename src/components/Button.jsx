import React from 'react';
const Button = ({handleClick}) => {
  return (
    <button onClick={handleClick}
    className="border rounded px-2 py-1 bg-slate-200 hover:bg-slate-100">ガチャを回す</button>
  )
}

export default Button;