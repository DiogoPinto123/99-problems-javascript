/*
 Problem 3
 (*) Find the K'th element of a list.
*/

function findListKthElement(list, k) {
  if (typeof k !== "number") {
    console.error("The k parameter is not a Number.");
    return;
  }
  if (Array.isArray(list) === false) {
    console.error("The list parameter is not an Array.");
    return;
  }
  return list[k - 1];
}

console.log(findListKthElement([1, 2, 3, 4, 5], 4));
