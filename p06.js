/*
 Problem 6
 (*) Find out whether a list is a palindrome.
*/

function isPalindrome(list) {
  if (Array.isArray(list) === false) {
    console.error("The list parameter is not an Array.");
    return;
  }
  var listLength = list.length;
  if (list.length === 0) {
    return false;
  }

  var reversedList = list.slice().reverse();
  return list.toString() === reversedList.toString();
}

console.log(isPalindrome(["x", "a", "m", "e", "x"]));
