/**
 * Created by Administrator on 2017/8/16.
 * 题目：找出数组 arr 中重复出现过的元素
 例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
 */
function findRepeatItem(arr) {
   let newArr = arr.filter((e, index) => {
       return arr.lastIndexOf(e) !== index;
       });

   return newArr;
}
const arr = ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];
console.log(arr + '中重复出现的元素为：' + findRepeatItem(arr));