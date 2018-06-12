function addElementToBeginningOfArray (arr, elem){
  let newArr=[elem, ...arr]
  return newArr
}


function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem)
  return arr
}


