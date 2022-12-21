var arr = [2, 0, 4, 9, 5, 15, 23, 1];

var insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j = i-1
        
        while (j >= 0 && arr[j] > current) {
            arr[j+1] = arr[j]
            j--;

        }
        arr[ j + 1] = current;
    }
    return arr
}
insertionSort(arr)

console.log(arr)