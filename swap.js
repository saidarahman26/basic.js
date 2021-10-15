var a = 5;
var b = 7;
console.log("Before swap : a=",a, "b=",b);
var temp = a;
a = b;
b = temp ;
console.log("After swap : a =",a,"b=",b);
var x = 3;
var y = 5;
x = x+y;
y = x-y;
x = x-y;
console.log("After swap : x=",x,"y=",y);
var p = 7;
var q = 5;
[p,q] = [q,p]
console.log("After swap : p=",p,"q=",q);