var rotate = function(nums, k) {
    let mem = [];
    for(let i = 1; i <= k; i++){
        mem.push(nums[nums.length - k + i])
    }
    // console.error(mem)

};

const nums = [1,2,3,4,5,6,7]
rotate(nums, 3)
