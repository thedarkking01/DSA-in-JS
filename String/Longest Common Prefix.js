/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let x=0
    while(x<strs.length){
        let ch=strs[0][x] // index = 0 
        for(let i=1;i<strs.length;i++){ // campare index 0 with index 1,2..
            if(ch!=strs[i][x]||x==strs[i].length){
                return strs[0].substring(0,x)
            }
        }
        x++
    }
    return strs[0]
};
//time complexity : o(n)
// space complexity: o(1) since we are using a constant amount of space to store the variable x and the character ch, and we are not using any additional data structures that grow with the input size.