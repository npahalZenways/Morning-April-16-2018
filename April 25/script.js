// difference between es5 and es6

// constants
const author = 'nitin';

// arror function

var abc = param => param;

x = abc(1);

console.log(x);

// rest parameters

function receive(a, b, ...c){
	// c is printed using spread operators
	console.log(a, b, ...c)
}

receive();

receive(1, 2, 3, 4, 5, 6, 7, 8);

// Destructuring

myArray = [1, 2, 3, 4, 5];

var [first, , third] = myArray;

/*
var first = myArray[0];
var third = myArray[2];
*/

// console.log(first, third);


// scoping
if(true){
	let myVariable = 'hello';
}

function test(){
	var mySecondVariable = 'bye';
	// console.log(myVariable, mySecondVariable)
}
test();
// console.log(myVariable, mySecondVariable);

// multi-line string and string interpolation
var str = `<p>
	<span></span>
</p>`

// string interpolation
console.log(`Value of first is: ${first} Value of third is: ${third}`);
var myObj = { first, third };

