package main

import "fmt"

func selectSort(arr []int64) {
	for i := 0; i < len(arr)-1; i++ {
		minIndex := i

		minValue := arr[minIndex]

		for j := i; j < len(arr)-1; j++ {
			if minValue > arr[j+1] {
				minValue = arr[j+1]
				minIndex = j + 1
			}
		}

		if i != minIndex {
			temp := arr[i]
			arr[i] = arr[minIndex]
			arr[minIndex] = temp
		}
	}
}

func main() {
	arr := []int64{12, 24, 234, 1, 43, 12, 65, 38, 17}

	selectSort(arr)

	fmt.Println(arr)
}
