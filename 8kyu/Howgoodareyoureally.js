function betterThanAverage(classPoints, yourPoints) {
    let sumBal = classPoints.reduce((summa, currents) => summa + currents, 0);
    let sr = classPoints.length
    let mid = sumBal/sr;
    if(yourPoints > mid){
        return (true);  
    } else {
        return (false);
    }
    }