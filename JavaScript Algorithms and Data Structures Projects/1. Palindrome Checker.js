function palindrome(str) {
  // assign a front and a back pointer
  // increment front pointer if current character doesn't meet criteria
  // decrements back pointer if current character doesn't meet criteria
  // compare the current characters (front and back)
  // if the whole string has been compared without returning false, it's a palindrome!

  let front = 0;
  let back = str.length - 1;

  // since back and front pointers won't always meet in the middle, use (back > front)
  while (back > front) {
    if (str[front].match(/[\W_]/)) {
      // regex will match any non-word char or _
      // this will make sure to ignore all non-alphanumeric characters
      front++;
      continue;
    }

    if (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }

    if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
    front++;
    back--;
  }

  return true;
}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /- :) 0-0"));
