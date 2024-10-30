
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

if (0 === false) {
    console.log("true")
}
else {
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
}
else {
    console.log("falsy" + value67 + " ....")
}

//var nicht benutzen!
//var myValue5: string = "string"
