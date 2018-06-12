let chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray (arr, elem){
  let newArr=[elem, ...arr]
  return newArr
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem)
  return arr
}
function addElementToEndOfArray(arr, elem) {
  let newArr= [...arr, elem]
  return newArr
  }
  
function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem)
  return arr
} 


