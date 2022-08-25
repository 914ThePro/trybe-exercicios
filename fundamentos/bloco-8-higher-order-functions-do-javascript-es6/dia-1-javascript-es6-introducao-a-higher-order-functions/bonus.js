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
    console.log('Não possui mana suficiente');
    manaConsumida = 0;
  }
  return {dano, manaConsumida};
};



