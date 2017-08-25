/**
 * Created by Administrator on
 * 将数组中所包含的某个元素找出，并放在数组后面
 给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].
 function XXX(arr,elem){ }
 参数：
 arr:数组
 elem:某个元素
 */
function findTargetItem(arr, item) {
    let target = arr.filter(e => e === item);
    let noRepeat = [];
    arr.forEach(a => {
        if (arr.filter(e => e === a).length === 1) {
            noRepeat.push(a);
        }
    });

    return noRepeat.concat(target);
}
const arr = [0, 1, 0, 3, 12];
const item = 0;
console.log(`数组[${arr}]找出目标元素拼接后的数组为:[${findTargetItem(arr, item)}]`);