class Dog {
  constructor(genitals) {
    this.fur = true;
    this.genitals = genitals;
    }
  bark() {
    console.log("boof or yip");
  }
}

class LaserDog extends Dog {
  shootLasers() {
    console.log("pew pew");
  }
}

const poodlePat = new LaserDog(false);

console.log(poodlePat.fur);
console.log(poodlePat.genitals);

poodlePat.bark();
poodlePat.shootLasers();

console.log(Object.getOwnPropertyNames(Dog.prototype));
console.log(poodlePat);