function chainReaction(startingVal, arrOfFuncs) {
  //   // startingVal => 0
  //   // arrOfFuncs => [addTen, subtractFive, multiplyFive]
    
  //   // addTen(0)
  //   // 10
  //   let secondVal = arrOfFuncs[0](startingVal)
    
  
  //   // subtractFive(10)
  //   // 5
  //   let thirdVal = arrOfFuncs[1](secondVal)
    
  //   // multiplyFive(5)
  //   // 25
  //   let fourthVal = arrOfFuncs[2](thirdVal)
    
  //   // 25
  //   return fourthVal;
    
    // startingVal => 25
    
    // for (let i = 0; i < arrOfFuncs.length; i++) {
    //   //multiplyFive
    //   const elem = arrOfFuncs[i];
    //   // multiplyFive(5) => 25
    //   startingVal = elem(startingVal);
    // }
    
    arrOfFuncs.forEach(elem => {
      startingVal = elem(startingVal);
    })
    
    return startingVal;
    
  }
  