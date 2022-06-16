function isPalindrome(word) {
    // Write your algorithm here
    const words = word.length;
    for (let i = 0; i < words / 2; i++) {
        if (word[i] !== word[words - 1 - i]) {
            return false;
        }
    }
    return true;
}
//console.log("abba");
console.log("robot");
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

The solution simply checks whether the parsed in parameter is a palindrome and
return trus
if not it prints out false*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("EXpecting:true");

    console.log("=>", isPalindrome("abba"));
    console.log("");

    console.log("Expecting:false");
    console.log("=>", isPalindrome("ba"));
    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;