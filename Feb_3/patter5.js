//
function pattern(n){
    for(row = 1; row <= n; row += 1){
        let str = "";
        let stars = n - row + 1; // n =
        for(let col = 1; col <= stars; col += 1){
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
