// 6. Bucket sort
// Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use arr.splice(), shift() or unshift() for this exercise.

let dataset = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

function bucketSort(arr, min, max) {
    // We create a bucket for every value between the max and min
    var buckets = [...Array(max-min+1)].map(e => []);
    for (let i=0; i < arr.length; i++) {
        // We drop every value into its bucket
        buckets[Math.floor(arr[i]-min)].push(arr[i]);
    }
    // Finally we concatenate all the arrays in order and return the result
    return [].concat.apply([], buckets);
}

console.log(bucketSort(dataset, 1, 98));