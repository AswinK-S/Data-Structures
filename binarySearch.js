function binary(target,array){
    let left = 0;
    let right = array.length-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if (array[mid]===target){
            return array[mid];
        }
        else if(target<array[mid]){
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
    return false;
}

let array=[1,2,3,4,5]
console.log("binary search",binary(8,array));
console.log("binary search",binary(4,array));