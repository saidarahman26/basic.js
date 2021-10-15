function addNumbers(num1,num2){
    var sum =0;
    for(let i = 0; i<arguments.length;i++){
        var num =arguments[i];
        sum = sum+num;
    }
    return sum;
}
var result = addNumbers(3,4,5,6,7);

console.log(result);



function getFullName(firstname , lastname){
    var name = ' ';
    for(let i = 0 ;i<arguments.length;i++){
        let namePart = arguments[i];
        name = name +' ' + namePart; 
    }
    return name;
}
const fullName = getFullName('saida','rahman','lubna');
console.log(fullName);