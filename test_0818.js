/**
 * Created by Administrator on 2017/8/18.
 *在数组 arr 中，查找值与 item 相等的元素出现的所有位置
 例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
 要求：不要使用for，while循环
 */
function findLocation(arr, item) {
    let result = [];
    let i = 0;
    arr.forEach(e => {
        if (e === item) {
            result.push(arr.indexOf(e, i));
            i = arr.indexOf(e, i) + 1;
        }
    });

    return result;
}


const  arr = [1, 3, 7, 1 ,4,];
const  item = 1;
console.log(`${arr}中${item}出现的位置为：${findLocation(arr, item)}` );