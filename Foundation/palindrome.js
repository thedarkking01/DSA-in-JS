// write a function to check if a given number is a palindrome or not
// link: https://leetcode.com/problems/palindrome-number/description/

var isPalindrome = function(x) {
    let orignal=x
    let rev=0
    while(x>0){
        rem=x%10
        rev = (rev * 10) + rem;
        x=Math.floor(x/10)
    }
    return rev==orignal
};
const number = 121;
const result = isPalindrome(number);
console.log(result);