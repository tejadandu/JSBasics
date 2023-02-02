// check whether the number is even or odd using betwise ^ (xor) operator
let x = 1010; // equivalent decimal value 10
let y = x >> 1;
let z = y << 1;
let lastbit = x ^ z;
if(lastbit == 0){
    console.log("Even");
}else{
    console.log("Odd");
}
