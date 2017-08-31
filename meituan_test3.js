/**
 * Created by Administrator on 2017/8/31.
 */
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var data = [];
var n = 1;
r1.on('line', function (ans) {
    data.push(ans);
    if (data.length === n) {
        console.log(filtered(data[0]));
    }
    data = [];
});
function filtered(str) {
    let arr = str.split('');
    let newArr = arr.map(e => e = parseInt(e));
    return newArr.filter(e => e % 2 === 0);
}