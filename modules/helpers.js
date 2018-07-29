function getRandomNum(max = 100, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateHex(seed) {
  return `#${Math.floor(seed.toFixed(15)*16777215).toString(16)}`;
}

function generateNum(seed, max = 100, min = 0) {
  return Math.floor(seed * (max - min) + min);
}


export { getRandomNum, generateHex, generateNum };
export default { getRandomNum, generateHex, generateNum };