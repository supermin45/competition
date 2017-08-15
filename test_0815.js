/**
 * Created by Administrator on 2017/8/15.
 *题目：统计数组 arr 中值等于 item 的元素出现的次数
 例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
 要求：不要使用for循环
 */
function countFrequency(arr, item) {
    let newArr = arr.filter((e) => {
            return e === item;
    });

    return newArr.length;
}
let arr = [1, 3, 7, 1, 4,];
let item = 1;
console.log(arr  + "中" + item + "的出现次数为：" + countFrequency(arr, item));