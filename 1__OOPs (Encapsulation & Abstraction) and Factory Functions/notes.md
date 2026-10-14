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