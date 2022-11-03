function shorter_reverse_longer(a,b){
    let a1 = a.split("")
    let b1 = b.split("")
    if(a1.length >= b1.length){
      const long = a.split("").reverse().join("");
      const short = b1.join("")
      return short+long+short
    }
    else{
      const long = b.split("").reverse().join("");
      const short = a1.join("")
      return short+long+short
    } 
  }