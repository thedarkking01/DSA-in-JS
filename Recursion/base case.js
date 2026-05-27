// function fun(num) {
//     if (num === 0) {
//         return ;
//     }
//     console.log(num);
//     fun(num - 1);
// }
// fun(5);


// print n to 1 
// function printNto1(num) {
//     if (num <1) {
//         return ;
//     }
//     console.log(num);
//     printNto1(--num);
// }
// printNto1(5);


// print 1 to n
function print1toN(num) {
    let n=5;
    if(num > n) {
        return ;
    }    
    console.log(num);
    print1toN(++num);//     print1toN(num+1);
}
print1toN(1);