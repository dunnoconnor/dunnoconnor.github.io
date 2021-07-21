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
      let gearlist = [];
      let name = "";
      //methods to set actual values
      this.rollStats();
      this.setClass();
      this.rollHP();
      this.rollCoin();
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
        //warriorGear();
      } else if (dex>=int && dex>=wis){
        this.type = "Thief";
        this.dmg = "1d6";
        //thiefGear();
      } else if (wis>int){
        this.type = "Cleric";
        this.dmg = "1d6";
        //clericGear();
      } else {
        this.type = "Conjurer";
        this.dmg = "1d4";
        //conjurerGear();
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
  
  }
  
  function createCharacter() {
    const hero1 = new Character();
    console.log(hero1);
    //updates the webpage with character info
    document.getElementById("strength").innerHTML =  ("STR: "+ hero1.str);
    document.getElementById("dexterity").innerHTML =  ("DEX: "+ hero1.dex);
    document.getElementById("constitution").innerHTML =  ("CON: "+ hero1.con);
    document.getElementById("intelligence").innerHTML =  ("INT: "+ hero1.int);
    document.getElementById("wisdom").innerHTML =  ("WIS: "+ hero1.wis);
    document.getElementById("charisma").innerHTML =  ("CHA: "+ hero1.cha);
    document.getElementById("name").innerHTML =  (hero1.name);
    document.getElementById("class").innerHTML =  (hero1.type);
    document.getElementById("coin").innerHTML =  ("Coin: " + hero1.coin);
    document.getElementById("hp").innerHTML =  ("HP: " + hero1.hp);
    document.getElementById("dmg").innerHTML =  ("Damage Die: " + hero1.dmg);
  }
  
  
  
  function thiefGear() {
      let cost = 0;
      let loadoutDie = Math.ceil((Math.random()*6));
      switch(loadoutDie){
        case 1:
          console.log("ok")

      }

    
  }
  
  function conjurerGear() {
    
  }
  
  function clericGear() {
    
  }
  
  function warriorGear() {
    
  }
  