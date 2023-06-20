function linear(array,target){
    let result=array.filter((s)=>{
     return target===s
     })
 return result.length > 0;
}
let array=[1,2,3,4,5]
console.log(linear(array,6))
// console.log(linear(array,5))
