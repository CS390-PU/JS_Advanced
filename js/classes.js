class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting = () => {
    console.log("Greetings " + this.firstName + " " + this.lastName);
  }
}

let person = new Person ("Julie", "Sims");
person.greeting ();