const resultColor = (result) => {
  switch (result) {
    case "大吉":
      return "text-red-600";
    case "吉":
      return "text-yellow-500";
    case "中吉":
      return "text-indigo-500";
    case "小吉":
      return "text-gray-700";
    case "凶":
      return "text-black";
    case "運勢":
    case "...":
    case "エラー":
    default:
      return "text-black";
  } 
}

export default resultColor;
