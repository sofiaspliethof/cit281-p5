class Fighter {
  constructor(name, specialMove, power) {
    this.name = name;
    this.specialMove = specialMove;
    this.health = 100;
    this.power = power; // multiplier for damage
  }

  basicAttack() {
    return Math.floor(Math.random() * 10 * this.power);
  }

  specialAttack() {
    return Math.floor(Math.random() * 20 * this.power);
  }

  receiveDamage(amount) {
    this.health -= amount;
    if (this.health < 0) this.health = 0;
  }

  isDefeated() {
    return this.health <= 0;
  }
}

module.exports = { Fighter };
