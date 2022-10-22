const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const dist = distanceToPump;
    const mg = mpg;
    const fuel = fuelLeft;
    if(mg*fuel>=dist){
      return true;
    }else{
      return false;
    }
  };