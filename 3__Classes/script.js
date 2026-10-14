// function CreateUser(firstName,lastName,age){
//   this.name = firstName,
//   this.lastName = lastName,
//   this.userAge = age
// }

// CreateUser.prototype.getFullName = function(){
//   return this.name+' '+this.lastName
// }
// CreateUser.prototype.birthAge = function(){
//   return new Date().getFullYear()-this.age
// }

// const user1 = new CreateUser('krishna','yadav',45)
// const user2 = new CreateUser('ram','yadav',20)
// console.log( user1.__proto__);
// console.log(CreateUser.prototype);

// **Classes,syntactical sugar  **//

class CreateUser {
  constructor(a,b,c){
    // console.log(a,b,c);
   this.name = 'krishna',
   this.lastName = 'yadav'
   this.age = c
  }

  // console.log('krishna'); - we cannot write code outside constrctr
  getFullName() {
    return this.name + " " + this.lastName;
  }
  birthAge() {
    return new Date().getFullYear() - this.age;
  }
}

const user1 = new CreateUser('krishna','yadav',41)

// console.dir(user1);
// console.dir(CreateUser);









