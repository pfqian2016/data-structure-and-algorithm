/**
 * 插入排序
 */
function InsertSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            let num = arr[i];
            arr[i] = arr[i - 1];
            for(var j = i - 2; num < arr[j]; j--) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = num;
        }
    }
    return arr;
}
