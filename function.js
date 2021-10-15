function sayLoveYou(){
    console.log('hey...lalalalalala');
    console.log('ohh hoo...lalallalalalla');
}
sayLoveYou();
sayLoveYou();
function doubleIt(num){
    var result = num * 2;
    console.log(result);

}
doubleIt(5);
doubleIt(10);
function doubleIt(money){
    var result=money*2;
    return result;
}
var first = doubleIt(5);
var second = doubleIt(10);
var total = first+second
console.log(total);
function add(num1,num2){
    var result=num1+num2;
    return result;
}
var sum=add(12,5);
console.log(sum);

function evenify(num){
    var result;
    if (num%2 == 0){
        result =num;
    }
    else{
        result = num*2;
    }
    return result;
}
var result = evenify(17);
var square = result*result;
console.log('square',square);


function evenify_all(nums){
   
    var even_array = [];
    for (var i = 0; i<nums.length; i++){
        var num = nums[i];
        var result = evenify(num);
        even_array.push(result); 
    }
    return even_array;
}
var array = [4,8,9,6,5,50,80]
var nums_array = evenify_all(array);
console.log(nums_array);