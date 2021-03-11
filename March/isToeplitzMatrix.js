var isToeplitzMatrix = function(matrix) {
    
    //console.log(value)
    for (let i=0;i<matrix.length; i++){
      if (matrix[1][1] === matrix[i][i]){
        return true
      } else {
        return false
      }
    }
};


console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]))