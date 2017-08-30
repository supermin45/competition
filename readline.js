/**
 * Created by Administrator on 2017/8/30.
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
        console.log(tuoFeng(data[0]));
        data = [];
    }
});
function tuoFeng(str) {
    let result = [];
    let buff = str.charAt(0);
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            if (i !== 0) {
                result.push(buff);
            }
            buff = str.charAt(i);
        } else {
            buff += str.charAt(i);
            if (i == str.length - 1) {
                result.push(buff);
            }
        }
    }
    return result;
}