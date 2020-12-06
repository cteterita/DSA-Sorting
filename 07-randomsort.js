// 7. Sort in place
// Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).

// Using a Fisher-Yates shuffle...

function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function shuffle(arr) {
    if (arr.length === 1) return arr;
    // Grab the last value
    let lastEl = arr[arr.length-1];
    // Pick a random index
    let i = Math.floor(Math.random()*arr.length);
    // Put the last value at the random index
    let temp = arr[i]
    arr[i] = lastEl;
    // Recursively shuffle the rest of the array, leaving the final (just swapped) element in place
    return [...shuffle(arr.slice(0,arr.length-1)), temp];
}

console.log(shuffle([1,2,3,4,5]));