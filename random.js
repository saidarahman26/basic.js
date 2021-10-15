var a = 2.54;
var result = Math.floor(a);
var result1 = Math.ceil(a);
var result2 = Math.round(a);
// console.log(result);
// console.log(result1);
// console.log(result2);
for ( var i = 0; i<10; i++){
    var randomNum = Math.random()*6;
    var dice = Math.round(randomNum);
    console.log(dice);
}