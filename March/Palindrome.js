//Given an integer x, return true if x is palindrome integer.

//An integer is a palindrome when it reads the same 
//backward as forward. For example, 121 is palindrome while 123 is not.


var isPalindrome = function(x) {
    let arr = x.toString().split('')
    last = arr[arr.length-1]
  for (let i=0;i<arr.length/2;i++){
  
  last = arr[arr.length-1 -i ]
   console.log('last', last)
   console.log('arr', arr[i])
   if(arr[i] != arr[arr.length-1 -i ]){
     return false
   }
  
  
  
  
   
  
  }
   return true
  };
  
  console.log(isPalindrome(1234321))