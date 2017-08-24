/**
 * Created by Administrator on 2017/8/24.
 *实现一个left-pad函数
 leftpad功能，就是字符串前面拼指定字符到固定长度，比如
 leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’
 三个参数，
 第一个：当前字符串；
 第二个：需要返回字符串的长度
 第三个：用来拼接的字符串
 */
function leftPad(str, length, subStr) {
    let arr = str.split('');
    let newArr = Array(length - arr.length).fill(subStr);
    let result = newArr.concat(arr);
    let string = '';
    result.forEach(a => {
        string += a;
        });

    return string;
}
const str = "hello";
const length = 20;
const subStr = "1";
console.log(`'${str}'拼接'${subStr}后的字符串为'${leftPad(str, length, subStr)}'`);