function findMinMax(array) {
  if(array.length === 0){
    return 0
  }
  let totalSum = 0;
  let currentArray = [];

  for (let i=0;i<array.length;i++) {
    totalSum += array[i];
  }

  for (let j = 0; j < array.length; j++) {
    currentArray.push(totalSum - array[j]);
  }
  let minSum = Math.min(...currentArray);
  let maxSum = Math.max(...currentArray)
  return `Minimum sum: ${minSum}` + "\n" + `Maximum sum: ${maxSum}`
}

module.exports = findMinMax