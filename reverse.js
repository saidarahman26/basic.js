// function reverseName(name){
//     var reverse = "";
//     for(var i = 0; i<name.length;i++){
//         var char = name[i];
//         reverse = char + reverse;
//     }
//     return reverse;
// }
// var forwardName = "Saida Rahman Lubna.";
// var myName = reverseName(forwardName);
// console.log("My reverse name is ", myName)
function reverseCousin(name){
    var reverse = "";
    for (var i = 0;i<name.length;i++){
        var char = name[i];
        reverse = char+reverse;
    }
    return reverse;
}
var hisName = "Syed Shamiul Islam";
var pinPon = reverseCousin(hisName);
console.log("Siam's reverse is ",pinPon);