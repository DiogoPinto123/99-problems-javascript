/*
 Problem 4
 (*) Find the number of elements of a list.
*/

function findNumberOfElements(list) {
  if (Array.isArray(list) === false) {
    console.error("The list parameter is not an Array.");
    return;
  }
  return list.length;
}

console.log(findNumberOfElements([1, 2, 3, 4, 5, 6, 7]));
