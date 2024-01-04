//Work only with sorted array
//O(log n)

const binarySearch = (arr, target) => {
    let startArr = 0;
    let endArr = arr.length - 1;

    while (startArr <= endArr) {
        const midArr = Math.floor((startArr + endArr) / 2);

        if (arr[midArr] === target) {
            return midArr; //We return index on array
        }
        else if (arr[midArr] < target) {
            startArr = midArr + 1;
        }
        else {
            endArr = midArr - 1;
        }
    }

    return -1;
}

const mySortArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const target = 7;
const result = binarySearch(mySortArr, target);

console.log("Result: ", result);