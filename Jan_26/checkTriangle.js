/* A triangle is valid
if sum of its two sides is greater than
the third side.
*/

let a = 7;
let b = 10;
let c = 3;

if(a + b > c && b + c > a && c + a > b){
    console.log("Yes, valid for triangle");
}else{
    console.log("No, it's a triangle");
}
