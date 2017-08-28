function maxHeapify(arr, length, i) {
    let left = 2 * i + 1;//left child node
    let right = left + 1;//right child node
    let largest = i//root node

    if(left <= length && arr[left] > arr[largest]) {
        largest = left;
    }
    if(right <= length && arr[right] > arr[largest]) {
        largest = right;
    }
    if(largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        maxHeapify(arr, length, largest);
    }
}
function buildMaxHeap(arr, length) {
    let lens = Math.floor((length - 1) / 2);
    for(let i = lens; i >= 0; i--) {
        maxHeapify(arr, length, i);
    }
    console.log('建堆情况：');
    console.log(arr);
}
function heapSort(arr, length) {
    buildMaxHeap(arr, length);

    for(let i = length; i >= 1;) {
        [arr[i], arr[0]] = [arr[0], arr[i]];
        i--;
        maxHeapify(arr, i, 0);
    }
    console.log('排序结果：');
    return arr;
}

let arr = [0, 4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
console.log(heapSort(arr, arr.length - 1));
console.log('--------------------------------------------');
arr.pop();
console.log(heapSort(arr, arr.length - 1));
