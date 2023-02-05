function pattern(n) {
    // body...
    upper(n);
    lower(n);
}
function upper(n){
    for(let row = 1; row <= n; row += 1){
        let str = "";
        let spaces = n - row;
        let stars = 2*row - 1;
        for(let j = 1; j <= spaces; j+=1){
            str += " ";
        }
        for(col = 1; col <= stars; col += 1){
            str += "*";
        }
        console.log(str);
    }
}


function lower(n) {
    for(let row = 1; row <= n; row += 1){
        let str = "";
        let spaces = row;
        for(let j = 1; j <= spaces; j+=1){
            str += " ";
        }
        let stars = 2*(n - row)- 1;
        for(col = 1; col <= stars; col += 1){
            str += "*";
        }
        console.log(str);
    }
}


console.log(pattern(5));

/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
