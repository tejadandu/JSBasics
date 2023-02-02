// Given a value n(positive integer),
// print the following pattern on the screen.

/*
    Ex: n = 4;
    ****
    ****
    ****
    ****
    Ex: n = 3
    ***
    ***
    ***
*/

function pattern(n){
    // logic for printing the pattern
    // write a loop to repeat a task for n rows
    for(row = 0; row < n; row+=1){
        // task
        // the task is to concatenate "*" n times
        let str = "";
        for(column = 0; column < n; column += 1){
            str += "*";
        }
        console.log(str);
    }
}

console.log(pattern(4));
