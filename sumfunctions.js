
prompt = require('prompt-sync')();//parseInt example
let x= prompt ("Type any number:");//we are using a parseInt keyword
let y=prompt ("Type another number:");;
let nums1= parseInt(x);
let nums2=parseInt(y);

function sum(nums1,nums2){
    this.nums1=nums1;
    this.nums2=nums2;
    let answer = nums1+nums2;
    return answer;
}
console.log(sum(nums1,nums2))