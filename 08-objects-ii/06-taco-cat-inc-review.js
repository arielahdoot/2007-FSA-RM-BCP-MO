let tacoCatInc = {
    gourmetShell: {
      'hard treat shell': {cost: 2, quantity: 100},
      'soft treat shell': {cost: 1.5, quantity: 100}
    },
  
    gourmetFishFilling: {
      'salmon': {cost: 5, quantity: 100},
      'tuna': {cost: 5.5, quantity: 100},
      'sardines': {cost: 1.5, quantity: 100}
    },
  
    gourmetVeggie: {
      'cat grass': {cost: 1, quantity: 100}
    },
  
    gourmetSeasoning: {
      'cat nip': {cost: 0.5, quantity: 100},
      'treat dust': {cost: 0.1, quantity: 100} // $10
    },
  
    cash: 0
  };
  
  tacoCatInc.currentInventory = function() {
    let totalInventory = 0;
    for (let category in this) {
      if (category === 'cash') {
        continue;
      }
      // 'gourmetShell'
    //   value = {
    //   'hard treat shell': {cost: 2, quantity: 100},
    //   'soft treat shell': {cost: 1.5, quantity: 100}
    // },
      const categoryInventory = this[category];
      for (let ingredient in categoryInventory) {
        // 'hard treat shell'
        console.log(ingredient);
        // {cost: 2, quantity: 100}
        // {cost: XX, quantity: xx}
        const ingredientInventory = categoryInventory[ingredient];
        // 200
        const ingredientCost = ingredientInventory.cost * ingredientInventory.quantity;
        totalInventory += ingredientCost;
      }
    }
    
    return totalInventory;
  }
  
  
  tacoCatInc.sale = function (order) {
  //   order -> {
  //   gourmetShell: 'hard treat shell',
  //   gourmetFishFilling: 'salmon'
  // }
    
    // 2 + 5
    let orderTotal = 0;
    
    for (let category in order){
      // category => gourmetFishFilling
      // 'salmon'
      let ingredient = order[category];
      // {cost: 5, quantity: 99}
      const ingredientInventory = tacoCatInc[category][ingredient];
      orderTotal += ingredientInventory.cost;
      ingredientInventory.quantity--;
      
    }
    
    this.cash += orderTotal;
    return orderTotal;
  }