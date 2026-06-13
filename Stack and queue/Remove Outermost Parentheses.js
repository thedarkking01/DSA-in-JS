/**
 * @param {string} s
 * @return {string}
 */
// approach 1: using stack
var removeOuterParentheses = function(s) {
    let stack=[]
    let ans=""
    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
            stack.push(s[i])
            if(stack.length>1){
                ans=ans+s[i]
            }
        }else{
            if(stack.length>1){
                ans=ans+s[i]
            }
            stack.pop()
        }   
    }
    return ans
};
// time complexity: O(n) where n is the length of the string s
// space complexity: O(n) in the worst case when all parentheses are nested, otherwise O(1)

//approach 2 : without using stack 
    let level=0
    let ans=""
    for(let i=0;i<s.length;i++){
        if(s[i]=="("){
            level++
            if(level>1){
                ans=ans+s[i]
            }
        }else{
            if(level>1){
                ans=ans+s[i]
            }
            level--
        }
    }
    return ans
    // time complexity: O(n) where n is the length of the string s
    // space complexity: O(1)