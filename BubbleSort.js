/**
 * 冒泡排序
 */
function BubbleSort(arr) {
    for(let n = arr.length; n > 0; n--) {
        for(var i = 0; i < n - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1],arr[i]];
            }
        }
    }
    return arr;
}
