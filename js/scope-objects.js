function largest (x, y) {
    if (x < y) {
       let temp = x;
       x = y;
       y = temp;
    }
    console.log (x, y);
}

largest (Math.random (), Math.random ());