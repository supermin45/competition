/**
 * Created by Administrator on 2017/8/11.
 * 题目：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。g
 */
function chain(str, cal) {
    let arr = splitStr(str, cal);
    let result = '';
    for (let i = 0; i < arr.length - 1; i++) {
        result += arr[i] + '->';
    }
    result += '5';
    return result;
}
function splitStr(str, cal) {
    var arr = str.split('->');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === cal) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
let str = '1->2->3->3->4->5->3';
let cal = "3";
console.log(chain(str, cal));