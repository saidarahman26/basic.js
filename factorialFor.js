// function factorial(n){
//     var factorial=1;
//     for(var i = 1 ;i<=n;i++){
//         factorial=factorial*i

//     }
//     return factorial;
// }
// var result = factorial(6);
// console.log(result);
function factorial(n){
    var fact=1;
    for(var i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
}
var result=factorial(10);
console.log(result);