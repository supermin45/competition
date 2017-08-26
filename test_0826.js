/**
 * Created by Administrator on 2017/8/26.
 * 给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
 如果这个数被3整除，打印fizz.
 如果这个数被5整除，打印buzz.
 如果这个数能同时被3和5整除，打印fizz buzz.
 */
function fizzBuzz(n) {
    let result = [];

    if (n % 3 === 0) {
            result.push('fizz');
    }
    if (n % 5 === 0) {
            result.push('buzz');
    }

    if (n % 3 !== 0 && n % 5 !== 0) {
            result.push(n);
    }

    return result.length === 1 ? result : result.join(' ');
}
console.log(`3输出为:${fizzBuzz(3)}`);
console.log(`5输出为:${fizzBuzz(5)}`);
console.log(`15输出为:${fizzBuzz(15)}`);
console.log(`17输出为:${fizzBuzz(17)}`);