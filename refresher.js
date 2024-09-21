var message = "Hello"
//var let and const

/*
1.Number
2.Bigint
3.String
4.Boolean
5.Null
6.Undefined
7.Symbol
8.Object

New Types - map,set,weakmap,weakset
*/

let number = 12
let number2 = 12.345

console.log(0.1+0.2);

//spl numeric values
console.log(11/0);

console.log("String"/100);

console.log("Ambani's networth",100_000_000_000 + 100_000)
console.log(10e9);
console.log(1e-6);

/*
String
1.Single quotes
2.Double Quotes
3.Templates using backticks
4.No special type of characters
*/

var mssg = 'hello'
var hi = "hii"

const activeUsers = 1000
let mssg2 = `There are ${activeUsers} online`;

console.log("hotstar",mssg2);

//Null And Undefined
/*
1.Null is a special value in JS that represents 'nothing,'empty'
2.Undefined-> represents value is not assisgned
*/
var a
console.log("checking value of",a);

a =10
console.log("checking val of after assigning=",a)

//type of operator

var val1= 12
console.log(typeof val1)

var val2 = "hiii"
console.log("typeOf val222222",typeof val2)

console.log("typeOf null",typeof null)

//type of array

const arr = [1,2,"mango",function(){}]
console.log(arr)
console.log(typeof arr) //not a bug

console.log(Array.isArray(arr))

//function
function abc()
{
    console.log("hii")
}
console.log(abc())

function aaa()
{
    return;
    "hiii"
}

console.log(aaa())

//Objects are used to store collection of data pr more complex
//collection of key value pairs

console.log([])

const person = {
    name: 'Dhoni',
    nickname:'Mahi',
    dob: new Date('July 07'),
    bestMatches: ['wc'],
    address: {
        place: 'Jharkhand',
        country: 'India'
    },
    val:'some-key'
}

console.log(person.nickname) // object dot notation

//square bracket notation
for(let val in person)
{
    console.log(person[val],person.val)
}


//code execution
//How does the code execution happen?
//Global context -> var and function already created
//2 phases 
/*
1.Creation and execution phases
    a. Creation Phase
        i.In this phase,JS sets up memory spaces for variables and functions
        ii. At this stage, Variables are initialized with undefined
    b.Execution phase
        i.Execution starts line by line
        ii. it assign values to the variables

    Hoisting->
    screened the variable 
    variable are hoisted before being initialized

*/

var a=1
function abc()
{
    console.log(b)
    var b = 2;
    function inner()
    {
        var c = 3
        function innerMost()
        {
            var d = 4
            console.log(a+b+c+d)
        }
        innerMost()
    }
    inner()
}
abc()















