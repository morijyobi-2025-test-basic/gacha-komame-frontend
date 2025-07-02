import React from 'react';
const Button = ({handleClick}) => {
  return (
    <button onClick={handleClick}
    className="mt-8 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
      おみくじを引く
    </button>
  )
}

export default Button;