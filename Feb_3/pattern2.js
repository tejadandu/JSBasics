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
    // logic for printing the pattern
    // write a loop to repeat a task for n rows
    for(let row = 1; row <= n; row +=1){
        // task
        // the task is to concatenate "*" row of no of times

        let str = "";
        for(column = 1; column <= row; column +=1){ // only change is the limit of loop
            str += "*";
        }
        console.log(str);
    }
}

console.log(pattern(4));
