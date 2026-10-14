//problem what if we have to create lot of objects
//factory function
// function getObject(firstName,lastName,age){
//   console.log(age);
//   return {
//     firstName,
//     lastName,
//     age,
//     getAgeYear: function(){
//       return new Date().getFullYear()-age
//     }
//   }
// }

// const user11 = getObject('krishna','yadav',23)
// const user12 = getObject('krishna','yadav',30)
// console.log(user11.getAgeYear());
// console.log(user12.getAgeYear());

// **Constructor Function and new Keyword** //

// breaking complexity and hiding

// function getAgeYear() {
//   console.log(this);
//   return new Date().getFullYear() - this.age;
// }

// function createUser(firstName, lastName, age) {

//   return {
//     firstName,
//     lastName,
//     age,
//     getBirthYear: createUser.commonMethod
//   };
// }

// createUser.commonMethod = function getBirthYear(){
//   return new Date().getFullYear()-this.age
// }

// const user1 = createUser('krishna','yadav',26)
// console.log(user1.getBirthYear());
// const user2 = createUser('raam','yadav',28)
// console.log(user2.getBirthYear());
// const user3 = createUser('vivek','yadav',12)
// console.log(user3.getBirthYear());

// const user = {
//   name:'krishna',
//   age:12,
//   info: function (){
//     console.log(this===user);
//     console.log(this.name,this.age);
//   }
// }

// user.info()

function CreateUser(firstName,lastName,age) {
  this.userName = firstName
  this.userLastName = lastName
  this.userAge = age
}

CreateUser.prototype.getBirthYear = function(){
  return new Date().getFullYear() - this.userAge;
}

const user1 = new CreateUser('krishna','yadav',20)
const user2 = new CreateUser('krishna','yadav',24)

console.log(user1.getBirthYear());

















