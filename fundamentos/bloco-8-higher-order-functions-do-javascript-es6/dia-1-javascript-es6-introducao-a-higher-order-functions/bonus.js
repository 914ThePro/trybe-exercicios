const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (strength) => Math.floor(15 + Math.random() * (strength-15));

const warriorDamage = (strength, weaponDmg) => Math.floor(strength + Math.random() * ((strength*weaponDmg)-strength));

const mageDamage = (intelligence, mana) => {
  let dano = Math.floor(intelligence + Math.random() * ((intelligence*2)-intelligence));
  let manaConsumida = 15;
  if(mana < 15){
    dano = 'Não possui mana suficiente';
    manaConsumida = 0;
  }
  return {dano, manaConsumida};
};

const gameActions = {
  warriorAtack : (damage) => {
    let damageValue = damage(warrior.strength, warrior.weaponDmg);
    dragon.healthPoints -= damageValue;
    warrior.damage = damageValue;
  },
  mageAtack: (damage) => {
    let damageValue = damage(mage.intelligence, mage.mana);
    dragon.healthPoints -= damageValue.dano;
    mage.mana -= damageValue.manaConsumida;
    mage.damage = damageValue.dano;
  },
  dragonAtack(damage){
    let damageValue = damage(dragon.strength);
    warrior.healthPoints -= damageValue;
    mage.healthPoints -= damageValue;
    dragon.damage = damageValue;
  },
  makeTurn: () => {
    gameActions.dragonAtack(dragonDamage);
    gameActions.mageAtack(mageDamage);
    gameActions.warriorAtack(warriorDamage);
    return battleMembers;
  }
  
};

console.log(gameActions.makeTurn());



