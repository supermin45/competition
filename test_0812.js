/**
 * Created by Administrator on 2017/8/12.
 */
function printNarcissistic() {
    let arr = [];
    for (let i = 100; i < 999; i++) {
        let hundredNumber = Math.floor(i / 100);
        let tenNumber = Math.floor(i % 100 / 10);
        let bitNumber = i % 10;
        let a = Math.pow(hundredNumber, 3) + Math.pow(tenNumber, 3) + Math.pow(bitNumber, 3);
        if (i === a) {
            arr.push(i);
        }
    }
    return arr;
}
console.log('所有的水仙花数为：' + printNarcissistic());
