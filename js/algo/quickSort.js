function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {//start from 1
        if (pivot > arr[i]) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
    // OR
    // const sorted = [...quickSort(left), pivot, ...quickSort(right)];
    // return sorted;
}

let someArr = [12, -12, 2, 223, 1, 0, -3];
let sortedrArr = quickSort(someArr);

console.log(sortedrArr);