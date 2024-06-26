package main

import "fmt"

func bubbleSort(arr []int64) {
	for i := 0; i < len(arr)-1; i++ {
		for j := 0; j < len(arr)-1; j++ {
			if arr[j] > arr[j+1] {
				temp := arr[j+1]
				arr[j+1] = arr[j]
				arr[j] = temp
			}
		}
	}
}

func main() {
	arr := []int64{12, 24, 234, 1, 43, 12, 65, 38, 17}

	bubbleSort(arr)

	fmt.Println(arr)
}
