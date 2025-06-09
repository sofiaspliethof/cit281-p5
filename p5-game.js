const { Fighter } = require('./p5-class');

const fighters = [
  new Fighter("Sphynx", "Skin Slap", 1.2),
  new Fighter("Glorp Kat", "Alien Beam", 1.1),
];



function getFighters() {
  return fighters.map(f => ({
    name: f.name,
    health: f.health,
    specialMove: f.specialMove
  }));
}

function attackFighter(attackerName, targetName, moveType) {
  const attacker = fighters.find(f => f.name === attackerName);
  const target = fighters.find(f => f.name === targetName);

  if (!attacker || !target) {
    return { error: 'Invalid attacker or target' };
  }

  let damage = 0;
  if (moveType === 'basic') {
    damage = attacker.basicAttack();
  } else {
    damage = attacker.specialAttack();
  }

  target.receiveDamage(damage);
  return {
    message: `${attacker.name} used ${moveType} on ${target.name} for ${damage} damage.`,
    fighters
  };
}

module.exports = { getFighters, attackFighter };
