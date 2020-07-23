// let calc = {
//   num1: 20,
//   num2: 30,
//   sum: function() {
//     return this.num1 + this.num2;
//   },
//   difference: function() {
//     return this.num1 - this.num2;
//   }
// };


// console.log(calc.sum()); // 50
// console.log(calc.difference()); // -10
// calc.num1 = 40;
// calc.num2 = 10;
// console.log(calc.sum()); // 40 + 10 = 50
// console.log(calc.difference()); // 40 - 10 = 30


const bank = {
  savings: 0,
  checking: 0,

  deposit: function(money) {
    this.savings += money;
  },

  transfer: function(amountToTransfer) {
    this.savings -= amountToTransfer;
    this.checking += amountToTransfer;
  },
  
  getBankInfo: function () {
    console.log(`Your savings has ${this.savings}`);
    console.log(`Your checking has ${this.checking}`);
  }
}


bank.deposit(40);
bank.getBankInfo();
bank.transfer(10);
bank.getBankInfo();



