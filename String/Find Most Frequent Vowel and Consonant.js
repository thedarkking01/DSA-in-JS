/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map={}
    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1
        }else{
            map[s[i]]++
        }
    }
    // Find max vowel and consonant inside the loop
    let maxvowel=0
    let maxconsonant=0
    // let vowel=['a','e','i','o','u']
    let vowel='aeiou'
    for(let i=0;i<s.length;i++){
        if(vowel.includes(s[i])){
            if(map[s[i]]>maxvowel){
                maxvowel=map[s[i]]
            }
        }
        else{
            if(map[s[i]]>maxconsonant){
                maxconsonant=map[s[i]]
            }
        }
    }
    return maxconsonant + maxvowel
};
//time complexity: O(n) where n is the length of the string s
//space complexity: O(n) since we are using a map to store the frequency of characters

// approch 2 : key and max 
let map={}
for(let i=0;i<s.length;i++){
    map[s[i]]=!map[s[i]]?1:map[s[i]]++
}
let maxvowel=0
let maxconsonant=0
let vowel='aeiou'
for(let i=0;i<s.length;i++){
    if(vowel.includes(s[i])){
        maxvowel=Math.max(maxvowel,map[s[i]])
    }
    else{
        maxconsonant=Math.max(maxconsonant,map[s[i]])
    }
}
return maxconsonant + maxvowel
//time complexity: O(n) where n is the length of the string s
//space complexity: O(1) since we are using a fixed size map to store the frequency of characters (26 lowercase letters)