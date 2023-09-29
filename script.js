// In JavaScript, objects are essential data structures used to store data as key-value pairs. They can be created using object literals or the `Object` constructor. Objects consist of properties (data) and methods (functions). Properties are accessed, modified, and deleted dynamically, with keys as property names and values of any data type. Objects are fundamental for organizing and manipulating data, serving as the backbone for representing entities, dictionaries, and various data structures in JavaScript.

// You can create an object using object literal notation by enclosing key-value pairs within curly braces `{ }`. Here's an example:

let someone = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Another way to create an object in JavaScript is by using the Object constructor.
// Creating an Empty Object:
// You can create an empty object using the Object constructor like this:

let human = new Object();

// This creates an empty object named person.

// In JavaScript objects, properties are the names that serve as keys for organizing and accessing data, while values represent the actual data associated with those properties. Properties define an object's structure, allowing for the storage of various data types within an object.

// There are two main methods to access object properties:

//            i. Dot notation
//            Ii. Bracket notation

// Dot notation is the most common and straightforward way to access object properties.
// You use a dot . followed by the property name to access the value associated with that property e.g

let boy = {
  firstName: "John",
  lastName: "Doe",
  age: 10
};

let firstName = student.firstName;
console.log(firstName); 

// Bracket notation allows you to access object properties using square brackets [].
// It is particularly useful when property names contain special characters, spaces, or when property names are stored in variables e.g

let somebody = {
  "first name": "John",
  "last name": "Doe",
  age: 30
};

let lastName = somebody["last name"]; 
console.log(lastName); 

// You can assign a value to a new or existing property name using either dot notation or bracket notation. Example using dot notation:

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Adding a new property using dot notation

person.city = "Lagos";

console.log(person.city); 

// The delete keyword in JavaScript is used to remove a property from an object. Its purpose is to delete a specific property, which can be useful when you want to remove unwanted or unnecessary data from an object e.g

let developer = {
  firstName: "iniubong",
  lastName: "isemin",
  age: 25
};

delete developer.age; // Removes the 'age' property from 'developer' object

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2022
};

// Dot notation and square bracket notation are used to access object properties in JavaScript. Dot notation uses a period (`.`) followed by the property name and is commonly used when the property name is a valid JavaScript identifier. Square bracket notation uses square brackets (`[]`) and is used when property names have special characters or are stored in variables.