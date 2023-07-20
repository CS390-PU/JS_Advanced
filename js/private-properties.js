function Person (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  let val = "Greetings ";

  this.greeting = () => {
    console.log(val + this.firstName + " " + this.lastName);
  }
  function howdy () {console.log ("Howdy");}
}

var person = new Person ("Julie", "Sims");
person.greeting ();
console.log (person.firstName);
console.log (person.val);
person.howdy ();