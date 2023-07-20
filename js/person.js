function Person (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  // Regular Method adds greeting to EACH object
  // this.greeting = () => {
  //   console.log("Greetings " + this.firstName + " " + this.lastName);
  // }

  // Prototype Method adds greeting ONCE to the prototype object
  Person.prototype.greeting = () => {
    console.log("Greetings " + this.firstName + " " + this.lastName);
  }
}

let person = new Person ("Julie", "Sims");
console.log (person.greeting ());