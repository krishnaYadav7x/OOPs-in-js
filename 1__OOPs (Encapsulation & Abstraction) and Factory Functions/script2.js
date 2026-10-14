// console.log(this);
// function a(){
//   console.log(this);
// }
// a()
// const user1 = {
//   name:'krishna',
//   age:20,
//   info: function(){
//     console.log(this);
//     console.log(this===user1);
//   }
// }

function CreateUser(firstName,lastName,age) {
  this.name = firstName;
  this.lastName = lastName;
  this.userAge = age;
}
CreateUser.prototype.getBirthYear = function(){
  return new Date().getFullYear()-this.userAge
}
CreateUser.prototype.fullName = function(){
  return this.name+' '+this.lastName
}

const user1 = new CreateUser('krishna','yadav',45)
const user2 = new CreateUser('ram','yadav',20)
console.log(user1.fullName());
console.log(user1.getBirthYear());
console.log(user2.fullName());
console.log(user2.getBirthYear());

// What is Prototypal Inheritance?

// Prototypal inheritance means an object can access properties and methods from another object through the prototype chain.













