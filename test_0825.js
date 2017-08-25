/**
 * Created by Administrator on 2017/8/25.
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