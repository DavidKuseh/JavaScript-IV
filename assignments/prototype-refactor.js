

// Prototype Refactor

// 1. Copy and paste your code or the solution from yesterday

//Person
  function Person (personName,personAge) {  
    this.name = personName;
    this.age = personAge;
    this.stomach = [];
  }

  Person.prototype.greet = function () {
    return `Hello, I am ${this.name} and I am ${this.age} years old`;
  }

  Person.prototype.eat = function(eatFood) {
    return this.stomach.push(eatFood);
  }
  
  Person.prototype.poop = function() {
    return this.stomach = [];
  }

//Person Class

class Person {
  constructor(name2, age2) {
    this.name = name2;
    this.age = age2;
    this.stomach = [];
  }

  greet() {
    return `Hello, I am ${this.name} and I am ${this.age} years old`;
  }

  eat(eatFood) {
    return this.stomach.push(eatFood);
  }

  poop() {
    return this.stomach = [];
  }
}


//Car
// function Car (modelName, carMake) {
//   this.model = modelName;
//   this.make = carMake;
//   this.odometer = 0;
//   carGood = true;
// }

// Car.prototype.drive = function(distance) {
//     if (carGood == true){
//       return this.odometer += distance;
//     } 
//     return `I crashed at ${this.odometer} miles!`;
// };

//  Car.prototype.carCrash = function() {
//        carGood = false;
//  };

//  Car.prototype.repairCar = function() {
//       carGood = true;
//  };


 //Baby
 function Baby(name, age) {
    Person.call(this, name, age); 
  }

  Baby.prototype = Object.create(Person.prototype);
  
  Baby.prototype.play = function () {
    return `Plays all day`;
  }

  var baby = new Baby('Sonny', 2 ); 
  

// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

