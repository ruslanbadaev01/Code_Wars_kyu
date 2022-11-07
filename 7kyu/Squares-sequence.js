function squares(x, n) {
    let arr = []
   if(n<0 || !n){
     return arr
   }
   else{
    arr.push(x)
      for(var i=0; i<n-1; i++){
        x *=x
        arr.push(x)
      }
    return arr
   }
  }