var SmartShoe = function(size,colour,type) {
  this.size = size;
  this.colour = colour;
  this.type = type;
  this.battery = 20;
}
SmartShoe.prototype.recharge = function(powerIncrease) {
  this.battery += powerIncrease;
  if(this.battery > 100) {
    this.battery = 100;
  }
}
var nikeShoe = new SmartShoe(10,'gray','sport edition');
// console.log(nikeShoe);
nikeShoe.recharge(30);
console.log(nikeShoe);
console.log(Object.getOwnPropertyNames(SmartShoe.prototype));

nikeShoe.recharge(20);
console.log(nikeShoe);