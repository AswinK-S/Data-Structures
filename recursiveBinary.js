// function recursiveBinary(array,target){
//     return search(array,target,0,array.length-1)
// }

// function search(array,target,left,right){
//     if(left > right){
//         return -1;
//     }
//     let mid = Math.floor((left + right)/2)
    
//     if(target === array[mid]){
//         return mid
//     }
//     else if(target < array[mid]){
//         return search(array,target,left,mid-1)
//     }

//     else{
//       return search(array, target,mid+1,right)  
//     }

// }

// function binary(nums, target) {
//     return search(nums,target,0,nums.length-1)  
//   }
  
  function search(nums,target,left,right){
      if(left > right){
          return false
      }
  
      let mid=Math.floor((left + right)/2)
  
      if(target === nums[mid]){
        console.log('yes')
          return nums[mid]
      }
  
      else if(target< nums[mid]){
          return search(nums,target,left,mid-1)
      }
       else{
          return search(nums,target,mid+1,right)
      }
  };
let nums=[1,2,3,4,5,6]
console.log(search(nums,9,0,nums.length-1));
console.log(search(nums,6,0,nums.length-1));
