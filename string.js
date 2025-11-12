
//Printing String

a = "Animesh Singh ";

n = a.length;

console.log(n);
for( var i = 0;i<n;i++){
    console.log('string',[i], a[i]);
    
}

// String Methods
e = a.toUpperCase();
f = e.trim();
console.log(f);

var a = a.slice(0, 12);console.log(a);

//geenrating random integers from console to create a usernanme based on user input name 
var ab = prompt("Enter your name :");
var randomnum = Math.floor(Math.random() * 100 ) + 1;
xyz = "@" + ab + randomnum;
console.log(xyz);

