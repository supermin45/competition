/**
 * Created by Administrator on 2017/8/31.
 */
function findMaxArea(arr, n) {
    let max = 0;
    let height = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[j] - arr[i] > max) {
                max = arr[j] -arr[i];
                height = arr[i];
            }
        }
    }
    return max * height;
}
const arr = [2, 7, 9, 4, 1];
const n = 5;
console.log(findMaxArea(arr, n));