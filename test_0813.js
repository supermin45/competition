/**
 * Created by Administrator on 2017/8/13.
 * 给定一个未排序的整数数组，找到其中位数。
 */
function median(arr) {
    newArr = arr.sort(function (x, y) {
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
    let result;
    let mid = Math.floor(newArr.length / 2);
    if (newArr.length % 2 !== 0) {
        result = newArr[mid - 1];
    } else {
        result = (newArr[mid - 1] + newArr[mid]) / 2;
    }
    return result;
}
let arr = [3, 9, 6, 8, 4, 15, 2, 18];
console.log(arr + "的中位数为：" + median(arr));

