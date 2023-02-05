function pattern(n) {
    for(let row = 1; row <= n; row += 1){
        let str = "";
        let spaces = n - row + 1;
        for(col = 1; col <= spaces; col += 1){
            str += "*";
        }
        console.log(str);
    }
}

console.log(pattern(5));
