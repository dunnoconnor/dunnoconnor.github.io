//class template for character object
class Character {
    //constructor for character properties
    constructor() {
      //properties with placeholder values to establish datatype
      let str = 0, dex = 0, con = 0, int = 0, wis = 0, cha = 0;
      let type= "";
      let coin = 0;
      let gearlist = [];
      let name = "";
      //methods to set actual values
      this.rollStats();
      this.setClass();
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
    //sets the character class based on stat
    setClass() {
      let str = this.str;
      let dex = this.dex;
      let wis = this.wis;
      let int = this.int;
      if (str>=dex && str>=int && str>=wis){
        this.type = "Warrior";
        //warriorGear();
      } else if (dex>=int && dex>=wis){
        this.type = "Thief";
        //thiefGear();
      } else if (wis>int){
        this.type = "Cleric";
        //clericGear();
      } else {
        this.type = "Conjurer";
        //conjurerGear();
      }
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
    document.getElementById("strength").innerHTML =  ("STR: "+ hero1.str);
    document.getElementById("dexterity").innerHTML =  ("DEX: "+ hero1.dex);
    document.getElementById("constitution").innerHTML =  ("CON: "+ hero1.con);
    document.getElementById("intelligence").innerHTML =  ("INT: "+ hero1.int);
    document.getElementById("wisdom").innerHTML =  ("WIS: "+ hero1.wis);
    document.getElementById("charisma").innerHTML =  ("CHA: "+ hero1.cha);
    document.getElementById("name").innerHTML =  (hero1.name);
    document.getElementById("class").innerHTML =  (hero1.type);
    document.getElementById("coin").innerHTML =  ("Coin: " + hero1.coin);
  }
  
  
  
  function thiefGear() {
    if (coin>50){
      gearlist += "gambeson";
      coin-=50;
    }
    
  }
  
  function conjurerGear() {
    
  }
  
  function clericGear() {
    
  }
  
  function warriorGear() {
    
  }
  