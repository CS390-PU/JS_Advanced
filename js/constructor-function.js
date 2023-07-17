function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greeting = () => {
    console.log("Greetings " + this.name);
  }
}

let teacher = new Person("Steve", 35);
let student = new Person("Sally", 18);

teacher.greeting();
student.greeting();