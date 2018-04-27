// data types

var myName : string = undefined;

var phone: number;

var isTrue: boolean;

var allNames : number[] = [];

allNames.push(1);

var abc : any;

function abc123() {
	// body...
}

// Tuples

var myTuple: [number, boolean, number, number] = [1, true, 1, 1];

myTuple.push(true);
// myTuple.push({name: 'hello'});

myTuple.push(1);
// myTuple.push('');

// enum

enum myChoice { Milk = 10, Tea = 9, Water, Coffee};

var choiceInString : string = myChoice[10];

var choiceInNum: number = myChoice.Water;

// console.log(choiceInString, choiceInNum);

// Unions
function returnPadding(param: string | number) : string | number{
	if(typeof param == 'number'){
		return param + 'px';
	} else{
		return param;
	}
}

returnPadding(10);
returnPadding('20px');
// returnPadding(true);

// generics
function abcFunction<T>(argument:T) :T{
	return argument;
}

abcFunction <number> (1);

abcFunction <string> ('true')