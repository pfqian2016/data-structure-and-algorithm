/**
 * 快速排序
 */
function QuickSort(arr) {
    let lens = arr.length;
    QSort(arr, 0, lens - 1);
    return arr;
}
function partition(arr, low, high) {
    let pivotkey = arr[low];
    while(low < high) {
        while(low < high && arr[high] >= pivotkey) {
            --high;
        }
        arr[low] = arr[high];
        while(low < high && arr[low] <= pivotkey) {
            ++low;
        }
        arr[high] = arr[low];
    }
    arr[low] = pivotkey;
    return low;
}
function QSort(arr, low, high) {
    if(low < high) {
        let pivotloc = partition(arr, low, high);
        QSort(arr, low, pivotloc - 1);
        QSort(arr,pivotloc + 1, high);
    }
}
