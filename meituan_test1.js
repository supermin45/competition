/**
 * Created by Administrator on 2017/8/31.
 */
function findMax(arr, n) {
    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[j] - arr[i] > max) {
                max = arr[j] -arr[i];
            }
        }
    }
    return max;
}
const arr = [10, 5, 9];
const n = 3;
console.log(findMax(arr, n));