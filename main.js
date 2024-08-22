const array = [1, 1, 1, 4, null, 6, null, 9, 9, 9];

function uniqArray(array) {
  const uniqueSet = new Set(array);
  return [...uniqueSet];
}
console.log(uniqArray(array));
