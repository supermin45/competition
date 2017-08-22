/**
 * Created by Administrator on 2017/8/22.
 *计算两个数组的交数组

 注意：理解题意（不是找出在两数组中都存在的元素）
 例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].
 */
function findIntersection (nums1, nums2) {
    return nums1.filter(e => e === nums2[0] || e === nums2[nums2.length -1]);
}
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const nums3 = [1, 2, 3, 4];
const nums4 = [2, 3, 4];
console.log(`[${nums1}]与[${nums2}]的交集为[${findIntersection (nums1, nums2)}]`);
console.log(`[${nums3}]与[${nums4}]的交集为[${findIntersection (nums3, nums4)}]`);