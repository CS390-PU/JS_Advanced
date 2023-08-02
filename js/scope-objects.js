function largest (x, y) {
    if (x < y) {
       let temp = x;
       x = y;
       y = temp;
    }
    console.log (x, y);
}

largest (Math.random (), Math.random ());

function swap (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function shuffle(arr) {
    let count = 0;
    while (count < arr.length) {
       const i = Math.floor(Math.random() * arr.length);
       const j = Math.floor(Math.random() * arr.length);

        swap (arr, i, j);
        ++count;
    }
    return arr;
 }

 console.log (shuffle([1, 2, 3, 4, 5]));