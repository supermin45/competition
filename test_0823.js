/**
 * Created by Administrator on 2017/8/23.
 * 给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组。
 给定 [1,2,[1,2]]，返回 [1,2,1,2]。

 给定 [1,2,[1,2],[3,4]]，返回 [1,2,1,2,3,4]。
 给定 [4,[3,[2,[1]]]]，返回 [4,3,2,1]。
 */
function flatten(arr){
    return    arr.reduce((acc,val) => acc.concat(Array.isArray(val)? flatten(val):val),[]);
}
const  arr1 = [1,2,[1,2],[3,4]];
const  arr2 = [4,[3,[2,[1]]]];
console.log(`[1,2,[1,2],[3,4]]变为一维数组后为：[${flatten(arr1)}]`);
console.log(`[4,[3,[2,[1]]]]变为一维数组后为：[${flatten(arr2)}]`);
