// Unions

function padding(param: number | string) : string {
    if(typeof param == "number"){
        return param + "px";
    } else{
        return param;
    }
}

padding(10); // returns 10px
padding('20px') // return 20px
// padding(true) // return true

// generics

function gen<T>(param: T) {
    return param
}

gen<number>(45);

gen<string>('');

// classes

class school {
    private schoolName: string;
    constructor(schoolname) {
        this.schoolName = schoolname;
    }

    setschool(){
        // this.schoolName = schoolname;
        return this.schoolName;
    }
}

var mySchool: school;

interface studentRules{
    name: string;
    marks: number;
    getname();
}

function myGenericFunction<T>(params:T) {
    console.log(params)
}

myGenericFunction<studentRules>({name: '', marks:9, getname:()=>{}})

myGenericFunction<school>(mySchool)

class student extends school implements studentRules{
    name;
    marks;

    getname = ()=>{
    };
    constructor(name, marks, schoolname){
        super(schoolname);
        this.name = name;
        this.marks = marks;
    }

    print(){
        console.log('name');
    }
}

var student1 : student = new student('ntini', 123, 'abc school');

console.log(student1)
// student.print();

export module m1{
    export class abc{

    }
}

export module m2{
    export class abc{

    }
}

var abcobj = new m1.abc();