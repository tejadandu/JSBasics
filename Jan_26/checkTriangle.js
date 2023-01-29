/* A triangle is valid
if sum of its two sides is greater than
the third side.
*/

let a = 10;
let b = 4;
let c = 9;

if(a + b > c && b + c > a && c + a > b){
    console.log("Yes, valid for triangle");
}else{
    console.log("No, it's a triangle");
}


if(a == b && b == c && c == a){
    console.log("Equilateral");
}else if(a==b || b==c || c==a){
    console.log("isoscelene");
}else{
    console.log("scelene");
}


