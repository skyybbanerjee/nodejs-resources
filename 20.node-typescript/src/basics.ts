// console.log("Hello NodeJs from typescript🔵");
// function getName(name: string): string {
//   return `Hello, ${name}!`;
// }

// console.log(getName("TypeScript🔵"));

// basic types
let isDone: Boolean = false; //boolean
let decimal: number = 6; // number
let str: string = "Hi"; // string

// arrays
let numArr: number[] = [1, 2, 3]; // number[]
let strArr: string[] = ["product 1", "product 2", "product 3"]; // string[]

//any
let anyType: any = 22;
anyType = "Hiii";
anyType = 45;

//undefined
let undefinedType: undefined = undefined;

//null
let nullType: null = null;

// union
let unionType: string | number = "Hello";
unionType = 22;

// tuples
let tuple: [string, number, boolean] = ["Hello", 10, true]; // string, number, boolean

// enums
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green; // 1

enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let s: Size = Size.Medium; // 2

// functions
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("TypeScript")); // Hello, TypeScript!

// interfaces
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "John",
  age: 30,
};

// classes
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

let cat: Animal = new Animal("Cat");

cat.speak(); // Cat makes a sound.

// inheritance
class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} barks.`);
  }
}

let dog: Dog = new Dog("Dog");

dog.speak(); // Dog makes a sound.

dog.bark(); // Dog barks.

// generics
function genericFunction<T>(arg: T): T {
  return arg;
}

console.log(genericFunction<string>("Hello, TypeScript!")); // Hello, TypeScript!

// type aliases
type Num = number;
let numAlias: Num = 22;

type StringOrNumber = string | number;
let strOrNumAlias: StringOrNumber = "Hello, TypeScript!";

// interfaces with optional properties
interface OptionalPerson {
  name?: string;
  age?: number;
}

let optionalPerson: OptionalPerson = {
  name: "John",
  age: 30,
};

// interfaces with readonly properties
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let readonlyPerson: ReadonlyPerson = {
  name: "John",
  age: 30,
};

//readonlyPerson.name = 'Jane'; // Error: Cannot assign to 'name' because it is a read-only property.

// interfaces with function properties
interface Greeter {
  (name: string): string;
}

let greeter: Greeter = function (name: string): string {
  return `Hello, ${name}!`;
};

console.log(greeter("TypeScript")); // Hello, TypeScript!

// types
type PersonType = {
  name: string;
  age: number;
};

let personType: PersonType = {
  name: "John",
  age: 30,
};

// interfaces with index signatures
interface StringArray {
  [index: number]: string;
}

let stringArray: StringArray = ["Hello", "TypeScript"];

console.log(stringArray[0]); // Hello

// classes with private and protected members
class Animal1 {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

let animal1: Animal1 = new Animal1("Cat");

animal1.speak(); // Cat makes a sound.

// class Dog1 extends Animal1 {
//   bark(): void {
//     console.log(`${this.name} barks.`);
//   }
// }

// let dog1: Dog1 = new Dog1("Dog");

// dog1.speak(); // Dog makes a sound.

// dog1.bark(); // Error: Property 'bark' is private and only accessible within class 'Dog1'.

// abstract classes with abstract methods

abstract class Animal2 {
  abstract speak(): void;
}


// let animal2: Animal2 = new Animal2(); // Error: Cannot create an instance of an abstract class.

// Difference between Interface and Types:

// Interface:
// 1. Declaration of properties and methods.
// 2. Can only contain public members.
// 3. Can extend other interfaces.
// 4. Can be implemented by multiple classes.
// 5. Cannot create an instance of an interface.

// Type:
// 1. Declaration of a new type.
// 2. Can contain any number of members.
// 3. Cannot extend or implement other types.
// 4. Can be used as a return type of a function.
// 5. Can be used as a type annotation.

//arrow functions

let greetArrow = (name: string) => `Hello, ${name}!`;

console.log(greetArrow("TypeScript")); // Hello, TypeScript!

// rest parameters

function sum(...numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// spread operator

let numbers = [1, 2, 3, 4, 5];
let spreadNumbers = [...numbers, 6, 7, 8];

console.log(spreadNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

// destructuring

let [first, second,...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5, 6, 7, 8]

// default parameters

function greetDefault(name = "World"): string {
  return `Hello, ${name}!`;
}

console.log(greetDefault()); // Hello, World!

// destructuring with default parameters

let { name: myName = "John" } = { name: "Alice" };

console.log(myName); // Alice

// template literals

let message = `Hello, ${greetDefault()}, how are you?`;

console.log(message); // Hello, Hello, World!, how are you?

// destructuring with template literals

let { name: myName1 } = { name: "Alice" };

console.log(`Hello, ${myName1}!`); // Hello, Alice!

// destructuring with nested objects

let { person: { name: myName2 } } = { person: { name: "Alice" } };

console.log(myName2); // Alice






