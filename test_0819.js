/**
 * Created by Administrator on 2017/8/19.
 * 数组去重
 例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1],
 输出：[‘s’, ‘a’, ‘b’,1,‘1’]
 */
function deleteRepeat(arr) {
    let result = [];
    arr.forEach(e => {
        if (!result.includes(e)) {
            result.push(e);
        }
    });
    return result;
}
const  arr = ['s', 'a', 's', 'b', 'a', 1, '1', 1];
console.log(`${arr}去掉重复元素后的新数组为[${deleteRepeat(arr)}]`);