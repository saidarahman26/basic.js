var numbers = [45, 56, 76, 89, 56];
var sum = 0;
for ( var i = 0; i<numbers.length; i++){
    var element = numbers[i];
    sum = sum+element
}
console.log("Total value =",sum);

function getArraySum (n){
    sum = 0;
    for( var i = 0; i<n.length;i++){
       var element = n[i];
       sum= sum+element; 

    }
    return sum;
}
var result = getArraySum([45,67,80,70,65,78])
console.log("Array sum is :",result)