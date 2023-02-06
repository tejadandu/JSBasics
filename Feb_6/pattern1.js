function pattern(n){
    upper(n);
    middle(n);
    lower(n);
}

function upper(n){
    for(let row = 1; row <= n; row++){
        let str = "";
        let counter = n;
        for(let i = 1; i<= row; i++){
            str += counter;
            counter --;
        }
        console.log(str);
    }
}

function middle(n){
    let str = "";
    let counter2 = n;
    for(let row = 0; row <= n; row++){
        str += counter2;
        counter2 --;
    }
    console.log(str);
}

function lower(n){
    for(let row = 1; row <= n; row ++){
        let str = "";
        let counter3 = n;
        for(let k = 1; k <= n - row +1; k++){
            str += counter3;
            counter3--;
        }
        console.log(str);
    }
}

console.log(pattern(5));
