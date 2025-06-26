const resultColor = (result) => {
  switch (result) {
    case "S":
      return "text-red-500";
    case "A":
      return "text-blue-500";
    case "B":
      return "text-green-500";
    case "C":
      return "text-gray-600";
    default:
      return "text-black";
  } 
}

export default resultColor;
