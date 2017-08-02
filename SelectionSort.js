function selectionSort(arr) {
    let minIndex;
    let lens = arr.length;
    for(let i = 0; i < lens; i++) {
        minIndex = i;
        for(let j = i + 1; j < lens; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
console.log(selectionSort([2,5,1,3,4]));
