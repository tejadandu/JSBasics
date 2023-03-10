// Given a value n(positive integer),
// print the following pattern on the screen.

/*
    Ex: n = 4;
       *
      **
     ***
    ****
    Ex: n = 3
      *
     **
    ***
*/

function pattern(n){
    // we will write a loop which will repeat some task for every row

    for(let row = 1; row <= n; row +=1){
        // inside this loop of row, we will do the task for each row
        // Task - < some spaces><some stars>
        // n = 7, row = 3, "    ***" -> this string will be printed for this row
        // So lets build the spaces first
        let str = "";
        let spaces = n - row;
        // loop using which we will concatenate (n - row) spaces
        for(j = 1; j <= spaces; j+=1){
            str += " ";
        }
        // after the above loop ends, we will be having (n - row) spaces
        // ex: n = 7, row = 3, str = "    "
        // loop to concatenate stars
        let stars = row;
        for(let col = 1; col <= stars; col +=1){
            str += "*";
        }
        // after the end of the above loop we have both spaces
        // and stars in the string
        console.log(str); // print the string
    }
}
console.log(pattern(4));
