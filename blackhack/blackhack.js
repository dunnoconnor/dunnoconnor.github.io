

//class template for character object
class Character {
    //constructor for character properties
    constructor() {
      //properties with placeholder values to establish datatype
      let str = 0, dex = 0, con = 0, int = 0, wis = 0, cha = 0;
      let type= "";
      let coin = 0;
      let hp = 0;
      let dmg = "";
      let equipment = [];
      let spellList = [];
      let name = "";
      //methods to set actual values
      this.rollStats();
      this.rollCoin();
      this.setClass();
      this.rollHP();
      this.rollName();
    }
    //rolls 3d6 for each stat, modified if the previous stat is >= 15
    rollAStat(nerfed=false){
      let d1 = Math.ceil((Math.random()*6));
      let d2 = Math.ceil((Math.random()*6));
      let d3;
      if(nerfed==true){
        d3 = 2;
      } else {
        d3 = Math.ceil((Math.random()*6));
      }
      let sum = d1+d2+d3;
      return sum;
    }
    //calls rollAStat for each stat distribution
    rollStats() {
      this.str = this.rollAStat();
      if(this.str>=15){
        this.dex = this.rollAStat(true);
      } else {
        this.dex = this.rollAStat();
      }
      if(this.dex>=15){
        this.con = this.rollAStat(true);
      } else {
        this.con = this.rollAStat(true);
      }
      if(this.con>=15){
        this.int = this.rollAStat(true);
      } else {
        this.int = this.rollAStat();
      }
      if(this.int>=15){
        this.wis = this.rollAStat(true);
      } else {
        this.wis = this.rollAStat();
      }
      if(this.wis>=15){
        this.cha = this.rollAStat(true);
      } else {
        this.cha = this.rollAStat();
      }
    }
    //sets the character class based on stats
    setClass() {
      let str = this.str;
      let dex = this.dex;
      let wis = this.wis;
      let int = this.int;
      if (str>=dex && str>=int && str>=wis){
        this.type = "Warrior";
        this.dmg = "1d8";
        this.warriorGear();
      } else if (dex>=int && dex>=wis){
        this.type = "Thief";
        this.dmg = "1d6";
        this.thiefGear();
      } else if (wis>int){
        this.type = "Cleric";
        this.dmg = "1d6";
        this.clericGear();
        this.clericSpells();
      } else {
        this.type = "Conjurer";
        this.dmg = "1d4";
        this.conjurerGear();
        this.conjurerSpells();
      }
    }
    //roll a random HP
    rollHP() {
      let hpDie, hpMod;
      switch(this.type){
        case "Warrior":
          hpDie = 10;
          hpMod = 4;
        case "Thief":
          hpDie = 6;
          hpMod = 4;
        case "Cleric":
          hpDie = 8;
          hpMod = 4;
        case "Conjurer":
          hpDie = 4;
          hpMod = 4;
      }
      //console.log(this.type,hpDie,hpMod);
      let hpRoll = Math.ceil((Math.random()*hpDie));
      this.hp = (hpRoll+hpMod)
      
    }
    //rolls a random amount of starting coin
    rollCoin() {
      let d1 = Math.ceil((Math.random()*6));
      let d2 = Math.ceil((Math.random()*6));
      let d3 = Math.ceil((Math.random()*6));
      let sum = (d1+d2+d3)
      this.coin = (sum*10)
    }
    //rolls a random name from an array
    rollName() {
      let names = ["Alys","Angharad","Beca","Bethan","Carys","Catrin","Ceri","Efa","Elin","Erin","Ffion","Gwen","Heledd","Lowri","Mari","Megan","Nia","Rhian","Rhiannon","Sara","Siân","Sioned","Aled","Cai","Carwyn","Dafydd","Dylan","Elis","Emyr","Gareth","Gethin","Gruffudd","Harri","Ieuan","Iwan","Jac","Marc","Osian","Owain","Owen","Rhodri","Rhys","Siôn","Steffan","Tomos"];
      let nameRoll = Math.floor((Math.random()*names.length));
      this.name = names[nameRoll];
    }

    thiefGear() {
      let gear = ["Knife","Rations d4", "Small Sack","Torches d6","Thieves' Tools"];
      let cost = 42;
      let extraEquipment = [];
      let loadoutDie = Math.ceil((Math.random()*3));
      switch(loadoutDie){
        case 1:
          extraEquipment = ["Rope","Iron Spikes", "Work Tools"];
          cost += 5;
        case 2:
          extraEquipment = ["Bow", "Quiver d10", "Flint and Steel"];
          cost += 25;
        case 3:
          extraEquipment = ["Gambeson"];
          cost += 50;
      }
      for (let item in extraEquipment){
        gear.push(extraEquipment[item]);
      }
      if (cost>=this.coin){
        this.coin = 0;
      } else {
        this.coin -= cost;
      }
      this.equipment = gear;
  }

    warriorGear() {
    let gear = ["Sword","Rations d4", "Small Sack","Torches d6"];
    let cost = 17;
    let extraEquipment = [];
    let loadoutDie = Math.ceil((Math.random()*3));
    switch(loadoutDie){
      case 1:
        extraEquipment = ["Gambeson","Rope","Iron Spikes", "Work Tools"];
        cost += 55;
      case 2:
        extraEquipment = ["Gambeson","Bow", "Quiver d10", "Flint and Steel"];
        cost += 75;
      case 3:
        extraEquipment = ["Leather Armor"];
        cost += 100;
    }
    for (let item in extraEquipment){
      gear.push(extraEquipment[item]);
    }
    if (cost>=this.coin){
      this.coin = 0;
    } else {
      this.coin -= cost;
    }
    this.equipment = gear;
  }

    clericGear() {
      let gear = ["Mace","Holy Symbol","Rations d4", "Small Sack","Torches d6"];
      let cost = 42;
      let extraEquipment = [];
      let loadoutDie = Math.ceil((Math.random()*3));
      switch(loadoutDie){
        case 1:
          extraEquipment = ["Gambeson"];
          cost += 50;
        case 2:
          extraEquipment = ["Backpack", "Lantern", "Flask of Oil d6","Herbs d8"];
          cost += 24;
        case 3:
          extraEquipment = ["Holy Water","Handheld Mirror","Iron Spikes"];
          cost += 31;
      }
      for (let item in extraEquipment){
        gear.push(extraEquipment[item]);
      }
      if (cost>=this.coin){
        this.coin = 0;
      } else {
        this.coin -= cost;
      }
      this.equipment = gear;
  }
  
    conjurerGear() {
    let gear = ["Staff","Spellbook","Rations d4", "Small Sack","Torches d6"];
    let cost = 17;
    let extraEquipment = [];
    let loadoutDie = Math.ceil((Math.random()*3));
    switch(loadoutDie){
      case 1:
        extraEquipment = ["Vial of poison"];
        cost += 10;
      case 2:
        extraEquipment = ["Backpack", "Lantern", "Flask of Oil d6","Herbs d8"];
        cost += 24;
      case 3:
        extraEquipment = ["Holy Water","Handheld Mirror","Iron Spikes"];
        cost += 31;
    }
    for (let item in extraEquipment){
      gear.push(extraEquipment[item]);
    }
    if (cost>=this.coin){
      this.coin = 0;
    } else {
      this.coin -= cost;
    }
    this.equipment = gear;
  }

    clericSpells() {
    let spellDie = Math.ceil((Math.random()*4));
    let spells = ["Cure Light Wounds","Detect Evil","Light","Protection from Evil","Purify Food and Drink"];
    let knownSpells = [];
    for(let i=0;i<spellDie;i++){
      let listDie = Math.floor((Math.random()*spells.length));
      let thisSpell = spells.splice(listDie, 1);
      knownSpells.push(thisSpell[0]);
    }
    this.spellList = knownSpells;
  }

  conjurerSpells() {
  let spellDie = 2+Math.ceil((Math.random()*4));
  let spells = ["Charm", "Detect Magic","Light","Magic Missle","Shield","Sleep"];
  let knownSpells = [];
  for(let i=0;i<spellDie;i++){
    let listDie = Math.floor((Math.random()*spells.length));
    let thisSpell = spells.splice(listDie, 1);
    knownSpells.push(thisSpell[0]);
  }
  this.spellList = knownSpells;
  }

}

  
  function createCharacter() {
    const hero = new Character();
    console.log(hero);

    document.getElementById("strength").innerHTML =  ("STR: "+ hero.str);
    document.getElementById("dexterity").innerHTML =  ("DEX: "+ hero.dex);
    document.getElementById("constitution").innerHTML =  ("CON: "+ hero.con);
    document.getElementById("intelligence").innerHTML =  ("INT: "+ hero.int);
    document.getElementById("wisdom").innerHTML =  ("WIS: "+ hero.wis);
    document.getElementById("charisma").innerHTML =  ("CHA: "+ hero.cha);
    document.getElementById("name").innerHTML =  (hero.name);
    document.getElementById("class").innerHTML =  (hero.type);
    document.getElementById("coin").innerHTML =  ("Coin: " + hero.coin);
    document.getElementById("hp").innerHTML =  ("HP: " + hero.hp);
    document.getElementById("dmg").innerHTML =  ("Damage Die: " + hero.dmg);
    console.log(hero.type);
    document.getElementById("class-image").src = (`./images/${hero.type.toLowerCase()}_class_icon.jpeg`);
    
    let list = document.getElementById("list");
    list.innerHTML = "";
    for (let item in hero.equipment){
      let listItem = document.createElement('li');
      list.appendChild(listItem);
      listItem.innerText = hero.equipment[item];
    }

    let sList = document.getElementById("spell-list");
    sList.innerHTML = "";
    for (let item in hero.spellList){
        let listItem = document.createElement('li');
        sList.appendChild(listItem);
        listItem.innerText = hero.spellList[item];
        console.log(hero.spellList);
      }
  }

document.querySelector('#create').addEventListener("click", function(event) {
    event.preventDefault();
    createCharacter();
  });

  document.querySelector('#print').addEventListener('click', function(event){
    window.print();
  }
);

