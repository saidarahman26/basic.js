var marks = [67, 50, 68, 70, 82, 47,65,92,64]
var lowest = marks[0];
for ( var i =0; i<marks.length; i++){
    var element = marks[i];
    
    if (element<lowest){
        lowest=element
    }
}
console.log("Lowest Number is :",lowest);