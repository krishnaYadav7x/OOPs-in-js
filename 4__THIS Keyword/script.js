//console.log(this); //point to window object
// const user = {
//   firstName:'krishna',
//   lastName:'yadav',
//   interest:['playing','visiting','running'],
//   getInterest:function(){
//   this.interest.forEach(function(interest){
//     console.log(this);
//   },user)
//   }
// }

// document.querySelector('body').addEventListener('click',function(){
//   console.log(this);
// })

const user = {
  firstName: "krishna",
  lastName: "yadav",
  interest: ["playing", "visiting", "running"],
  getInterest:  ()=> {
    console.log(this);    //point to window nvr user arrow fn as method 
  },
};




class User{
  constructor(firstName,lastName){
    this.userName=firstName,
    this.lastName=lastName
    console.log(this);
  }
   fullName () {
    return `${this.userName+' '+this.lastName}`
   }
   
}

const user1 = new User('Krishna','yadav')
































