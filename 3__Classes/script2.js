class User {
  constructor(name, title, age) {
    ((this.firstName = name), (this.lastName = title), (this.userAge = age));
  }
  fullName() {
    return `${this.firstName + " " + this.lastName}`;
  }
  birthAge() {
    return new Date().getFullYear() - this.userAge;
  }
  work() {
    console.log('working');
  }
}

const user1 = new User('krishna','yadav',12)
console.log(user1);
console.log(user1.fullName());
console.log(user1.birthAge());
console.log(user1.__proto__===User.prototype);

class Student extends User {
  constructor(name, title, age,favSubject) {
    super(name, title, age)
    this.favSubject = favSubject
  }
  working() {
    console.log("working");
  }
}
const student = new Student ('ram','kumar',100,'Maths')
console.log(student);
console.log(student.fullName());
console.log(student.birthAge());
console.log(student.working());

class Athletes extends User {
  constructor(name, title, age, profession) {
    super(name, title, age);
    this.profession = profession;
  }
  intro() {
    console.log(`My name is ${this.firstName + " " + this.lastName}`);
  }
  work() {
    console.log("working working");  
  }
}
const athlete1 = new Athletes ('virat','kohli',32,'cricket')
console.log(athlete1);
console.log(athlete1.intro());
console.log(athlete1.fullName());
console.log(athlete1.work());     //access nearest one 
console.log(athlete1.birthAge());












