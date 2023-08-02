// closure #1

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

  // closure #2

  function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();

  // closure #3

  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  var aCounter1 = makeCounter();
  aCounter1();
  aCounter1();
  console.log(aCounter1());
  var aCounter2 = makeCounter();
  console.log(aCounter2());