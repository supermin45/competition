/**
 * Created by Administrator on 2017/8/11.
 * 题目：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。g
 */
function fromChainDeleteVal(str, val) {

    let result = [];
    var arr = str.split('->');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ('' + val)) {
            result.push(arr[i]);
        }
    }
    result = result.join('->');
    return result;

}
let str = '1->2->3->3->4->5->3';
let val = 3;
console.log(fromChainDeleteVal(str, val));