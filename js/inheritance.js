class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting = () => {
    console.log("Greetings " + this.firstName + " " + this.lastName);
  }
}

class PickleballPlayer extends Person {
  constructor (firstName, lastName, age) {
    super (firstName, lastName);
    this.age = age;
  }

  greeting = () => {
    console.log("Greetings Pickleball Player" + this.firstName + " " + this.lastName);
  }
}

let person = new Person ("Julie", "Sims");
person.greeting ();

let athlete = new PickleballPlayer ("Mark", "Watson", 40);
athlete.greeting ();