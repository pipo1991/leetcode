/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const l1 = nums1.length, l2 = nums2.length;
    const midIndex = Math.floor((l1 + l2) / 2);
    if ((l1 + l2) % 2 == 1) {
        return findKthElement(midIndex, 0, l1 - 1 , 0, l2 - 1);
    } else {
        const midFirst = findKthElement(midIndex, 0, l1 - 1 , 0, l2 - 1);
        const midSecond = findKthElement(midIndex - 1, 0, l1 - 1 , 0, l2 - 1);
        return (midFirst + midSecond) / 2;
    }

    function findKthElement(k, i1, j1, i2, j2) {
        if (j1 < i1) {
            return nums2[k - i1];
        }
        if (j2 < i2) {
            return nums1[k - i2];
        }
        var indexMid1 = parseInt((i1 + j1) / 2 ) , indexMid2 = parseInt((i2 + j2) / 2);
        var mid1 = nums1[indexMid1], mid2 = nums2[indexMid2];
        if (indexMid1 + indexMid2 < k) {
            if (mid1 > mid2) {
                return findKthElement(k, i1, j1, indexMid2 + 1, j2);
            } else {
                return findKthElement(k, indexMid1 + 1 , j1, i2 , j2);
            }
        } else {
            if (mid1 > mid2) {
                return findKthElement(k, i1 , indexMid1 - 1 , i2 , j2);
            } else {
                return findKthElement(k, i1, j1, i2 , indexMid2 - 1);
            }
        }
    }
};
