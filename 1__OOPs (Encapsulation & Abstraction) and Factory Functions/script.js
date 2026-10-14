const user1 = {
  firstName: "Krishna",
  lastName: "Yadav",
  age: 45,
  getUserBirthYear: function () {
    return new Date().getFullYear() - user1.age; 
  }
};

const user2 = {
  firstName: "Krishna",
  lastName: "Yadav",
  age: 49,
  getUserBirthYear: function () {
    return new Date().getFullYear() - user2.age; 
  }
};
console.log(user1.getUserBirthYear());
console.log(user2.getUserBirthYear());

//problem what if we have to create lot of objects
//factory function
function getObject(firstName,lastName,age){
  console.log(age);
  return {
    firstName,
    lastName,
    age,
    getAgeYear: function(){
      return new Date().getFullYear()-age
    }
  }
}

const user11 = getObject('krishna','yadav',23)
const user12 = getObject('krishna','yadav',30)
console.log(user11.getAgeYear());
console.log(user12.getAgeYear());















