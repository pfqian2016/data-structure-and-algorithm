function binSearch(arr,target) {
    arr = arr.sort((a,b) => a - b);
    let lowerBound = 0,
        upperBound = arr.length - 1;
    while(lowerBound <= upperBound) {
        let mid = Math.floor((lowerBound + upperBound) / 2);
        if(arr[mid] < target) {
            lowerBound = mid + 1;
        } else if(arr[mid] > target) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
console.log(binSearch([1,2,3,4,5,6],7));
