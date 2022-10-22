function findAverage(array) {
    let sum = array.reduce((partialSum, a) => partialSum + a, 0)
    if (array !=0){
        let res;
        res = sum/array.length
        return res;
  
    }else{
        return 0;
    }
  }