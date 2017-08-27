/**
 * Created by Administrator on 2017/8/27.
 * 给定编码如下，给出一个整数,返回解码方法的种数；
 例如：
 给你的数12，有两种方式解码 AB(12) 或者 L(12). 所以返回 2
 1-> 'A’
 2-> ‘B’
 …
 26-> ‘Z’
 */
function decodeNumber(num) {
    let obj = {number: num, result: '', count: 0};

    if (num <= 10 || num === 20) {
        obj.count = 1;
        obj.result += String.fromCharCode(num + 64);
    } else if (num > 10 && num !== 20){
        let ten = Math.floor(num / 10);
        let ge = num % 10;
        obj.result += String.fromCharCode(num + 64) + '/';
        obj.result += String.fromCharCode(ten + 64) + String.fromCharCode(ge + 64);
        obj.count  = 2;
    }

    return obj;
}

console.log(decodeNumber(20));
console.log(decodeNumber(12));
console.log(decodeNumber(26));
console.log(decodeNumber(6));
console.log(decodeNumber(10));