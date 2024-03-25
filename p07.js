/*
 Problem 7
 (**) Flatten a nested list structure.
*/

function flattenList(list) {
  if (Array.isArray(list) === false) {
    console.error("The list parameter is not an Array.");
    return;
  }

  return list.flat(1000);
}

var unflattenedList = [
  "Hello",
  1,
  ["Hi", "Goodbye", 5, [2, 5]],
  [1, [2, 3, [4, 6]]],
];
console.log(flattenList(unflattenedList));
