//symple sort algo
//Complexity O(n^2)

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }

    console.log(arr);
}

let someArr = [12, 4, 54, 664, 2, 1, 45, 0, 87, -12];

bubbleSort(someArr);