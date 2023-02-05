function pattern(n) {
    for(let row = 1; row <= n; row +=1){
        // printing n number of rows
        let str = "";
        let spaces = n - row;
        for(j = 1; j <= spaces; j +=1){
            str += " ";
        }

        let stars = 2*row - 1;
        for(let col = 1; col <= stars; col +=1){
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

*/
