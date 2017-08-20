/**
 * Created by Administrator on 2017/8/20.
 * 判断一个字符串中出现次数最多的字符，并统计次数
 例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
 例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}
 */
function statisticItemFrequency(str) {
    let arr = str.split('');
    let obj = {};

    arr.forEach(e => {
        let count = arr.filter(b => e === b).length;
        obj[`${e}`] = count;
    });

    function getMax() {
        let max = 0;
        for (let key in obj) {
            if (max < obj[key]) {
                max = obj[key];
                maxChar = key;
            }
        }
        return max;
    }

    let max = getMax();
    let newObj = {};
    for (let key in obj) {
        if (obj[key] === max) {
            newObj[`${key}`] = max;
        }
    }

    return newObj;
}
const str1 = 'abcsbaddbizdbas';
const str2 = 'aaaaabbdbdbb';
console.log(statisticItemFrequency(str1));
console.log(statisticItemFrequency(str2));