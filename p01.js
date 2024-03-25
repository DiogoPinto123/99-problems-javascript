/*
 Problem 1
 (*) Find the last element of a list.
*/

function findLastElement(list) {
  if (Array.isArray(list) === false) {
    console.error("Parameter provided is not an array.");
    return;
  }
  var lastElementIndex = list.length - 1;
  if (lastElementIndex === -1) {
    return null;
  }
  return list[lastElementIndex];
}

var testList = 0;
var lastElement = findLastElement(testList);
console.log(lastElement);
