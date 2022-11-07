function highAndLow(numbers){
    numbers2=numbers.split(' ');
    var highest =parseInt(numbers2[0]);
    var lowest =parseInt(numbers2[0]);
    if (numbers2.length==1) {
      return numbers;
    }
    else {
      for (i=0;i<numbers2.length;i++) {
        if (parseInt(numbers2[i])>highest) {
          highest = parseInt(numbers2[i]);
        }
        else if (parseInt(numbers2[i])<lowest) {
          lowest = parseInt(numbers2[i]);
        }
      }
    }
    return(highest + " " + lowest);
  }