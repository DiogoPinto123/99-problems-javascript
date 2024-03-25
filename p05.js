/*
 Problem 5
  (*) Reverse a list.
*/

function reverseList(list) {
  if (Array.isArray(list) === false) {
    console.error("The list parameter is not an Array.");
    return;
  }
  return list.reverse();
}
