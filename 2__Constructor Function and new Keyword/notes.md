## OOP is a programming approach in which we organize our code around objects that contain data (properties) and behavior (methods).

| Pillar            | Meaning                                                                            | Simple example                                                       |
| ----------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Encapsulation** | Bundling data and methods together while controlling access to internal data.      | A bank account controls how its balance can change.                  |
| **Abstraction**   | Hiding implementation details and exposing only what is necessary .                 | You drive a car without needing to understand its engine internally. |
| **Inheritance**   | Creating a class based on another class to reuse or extend its behavior.           | An `ElectricCar` class extends a `Car` class.                        |
| **Polymorphism**  | Allowing a common interface or method to behave differently for different objects. | Different vehicles implement `start()` differently.                  |


## What is a Factory Function?

- A factory function is a regular function that creates and returns an object.

**Disadvantage**

- The most important disadvantage is that methods defined inside a factory function are recreated for every object.


# What is this in JavaScript?

>this is a special keyword that refers to a value determined by how a function is called.

>When you call a regular function as an object's method, this refers to the object used to make that call.


# 1. What is a Constructor Function in JavaScript?

>A constructor function is a regular function used to create and initialize objects using the new keyword

## Constructor function

* A constructor function can have a prototype property.
* new creates and initializes an object.
* The new object's internal prototype points to the constructor's prototype object.
* Multiple objects created with the same constructor can share that prototype.
* Methods placed on the prototype can be shared by all those objects.




