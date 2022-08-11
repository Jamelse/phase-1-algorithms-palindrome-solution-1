function isPalindrome(word) {
  if (typeof word === 'string'){ // checks to see if input is string
    let lower = word.toLowerCase() // takes string and lowercases it
    let reverse = lower.split('').reverse().join('') // reverses the word
    return reverse === lower; // checks if lower cased input and reversed input match
  }
}

/* 
 function takes a string and tests if it's a string
 puts string to lower case
 reverses the string
 returns true/false if the reverse matches the to lower case
*/

/*
function takes a string and tests if the input is a string. if true
it lowercases the string. Then, it splits, reverses, then rejoins the string.
if the reversed version of the string === the lowercased version then returns true,
if not then false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log ('Expecting: true');
  console.log('=>', isPalindrome('level'));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
