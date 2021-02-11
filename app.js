class Pet {
    constructor(name) {
        this._name = name;
        this._foodLevel = 10;
        this._thirstLevel = 10;
        this._happinessLevel = 5;
        this._boredomLevel = 5;
    }
    play() {
        this._foodLevel--;
        this._happinessLevel++;
        this._boredomLevel--;
    }
    feed() {
        this._foodLevel++;
        this._thirstLevel--;
    }  
    drink() {
        this._thirstLevel++;
    }
    bored() {
        this._boredomLevel++;
        // increase over time unless play
    }
}

class Bunny extends Pet {
    constructor(name, lovesCarrot, jumpsAround, wagFluffyTail, eatsFurniture) {
        super(name);
        this._lovesCarrot = lovesCarrot;
        this._jumpsAround = jumpsAround;
        this._wagFluffyTail = wagFluffyTail;
        this._eatsFurniture = eatsFurniture;
    }
    get lovesCarrot() {
        return this._lovesCarrot;
        // feed action
    }
    get jumpsAround() {
        return this._jumpsAround;
        // play action
    }
    get wagFluffyTail() {
        return this._wagFluffyTail;
        //if happy =10
    }
    get eatsFurniture() {
        return this._eatsFurniture;
        //if rampage = 10
    }
}

class Dragon extends Pet {
    constructor(name, lovesSheep, fliesAround, spreadsWings, breathsFire) {
        super(name);
        this._lovesSheep = lovesSheep;
        this._fliesAround = fliesAround;
        this._spreadsWings = spreadsWings;
        this._breathsFire = breathsFire;
    }
    get lovesSheep() {
        return this._lovesSheep;
        // feed action
    }
    get fliesAround() {
        return this._fliesAround;
        // play action
    }
    get spreadsWings() {
        return this._spreadsWings;
        // if happy = 10
    }
    get breathsFire() {
        return this._breathsFire;
        // if rampage = 10
    }
}

class Velociraptor extends Pet {
    constructor(name, lovesPeople, runsAround, roars, eatsNeighbours, ) {
        super(name);
        this._lovesPeople = lovesPeople;
        this._runsAround = runsAround;
        this._roars = roars;
        this._eatsNeighbours = eatsNeighbours;
    }
    get lovesPeople() {
        return this._lovesPeople;
        // feed action
    }
    get runsAround() {
        return this._runsAround;
        // play action
    }
    get roars() {
        return this._roars;
        //if happy = 10
    }
    get eatsNeighbours() {
        return this._eatsNeighbours;
        //if ramapge =10
    }
}

// if play then happy, hungry, need feed boredom --
// if feed then thirsty
// if not play or feed or thirst then bored & hungry & thirsty rampage++ 
// if hunger or thirst = 0 then pet dies
// if bored = 10 then ramage (rampage increases over time unless play / feed / drink)
