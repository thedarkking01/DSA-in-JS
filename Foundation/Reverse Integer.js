// 7. Reverse Integer : https://leetcode.com/problems/reverse-integer/

var reverse = function(x) {
    let rev=0;
    xcopy=x
    x=Math.abs(x)
    while(x>0){
        rem=x%10
        rev=(10*rev)+rem
        x=Math.floor(x/10)
    }
    // let limit =Math.pow(2,31)
    let limit=2**31
    if(rev<-limit || rev>limit) return 0;
    return (xcopy<0)?-rev:rev
};
