console.log("Hallo Welt")

//String myName = "Florian";
let myName: string = "Florian"

console.log(myName)

myName = "Martin";

console.log(myName);

const myConstant: string = "Test";

// myConstant = "abc"

console.log(myConstant)

const value1: string = myName + myConstant

console.log(value1)

let myNumber: number = 1.5

console.log(myNumber + 2)

for (let i = 0; i < 10; i++) {
    console.log(i)
}

if (0 === 0) {
    console.log("true")
} else {
    console.log("false")
}


//Auf any & unkown wenn möglich verzichten!
const value: any = "string"

const value3: unknown = "string"

//falsy & truthy

let wahrheitswert: undefined

const value67 = 0
if (value67) {
    console.log("truthy")
} else {
    console.log("falsy" + value67 + " ....")
}

//var nicht benutzen!
//var myValue5: string = "string"

console.clear()

//Liste
const names: string[] = ["Florian", "Martin", "Max"];

console.log(names.push("Dominic"))
console.log(names.pop())
console.log(names)

console.log(names[1])

function myFunction(myValue: number): number {
    return myValue * 2;
}

const myFunction2 = (myValue: number): number => {
    return myValue * 2;
}


console.log(myFunction(14))
console.log(myFunction2(14))

// myFunction2 = (myValue: number): number => {
//     return myValue * 3
// };
//
// console.log(myFunction2(14))

const ints: number[] = [1, 2, 3, 4]

console.log(ints.reduce((prev: number, currentValue: number) => prev * currentValue))


const newNames: number[] = names
    .filter(element => element.length >= 5)
    .map(element => element.length)

console.log(names)
console.log(newNames)


const myObject: {name: string, age: number} = {name: "Florian", age: 28}

myObject.name = "Martin"

console.log(myObject)
console.log(myObject.name)
console.log(myObject.age)
