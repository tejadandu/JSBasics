//
function pattern(n){
    for(row = 1; row <= n; row += 1){
        let str = "";
        let stars = n - row; // n =
        for(let col = 1; col <= stars+1; col += 1){
            str += "*";
        }
        console.log(str);
    }
}

console.log(pattern(5));

/*
    *****
    ****
    ***
    **
    *

*/
