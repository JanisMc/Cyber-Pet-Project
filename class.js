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
        setInterval(() => {
            this._boredomLevel++;
        }, 5000); 
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

//export {Bunny, Dragon, Velocirator};

// if play then happy, hungry, need feed boredom --
// if feed then thirsty
// if not play or feed or thirst then bored & hungry & thirsty rampage++ 
// if hunger or thirst = 0 then pet dies
// if bored = 10 then ramage (rampage increases over time unless play / feed / drink)


// "Please select a pet" display 3 x pet options
// "Your pet would like to play" display 3 x buttons - play, feed, drink 
// if feed or drink levels = 10 "Your pet is not hungry or thirsty yet"

// if play selected run play function / action, can be pressed multiple times but warning will appear if hunger = 5, 2, 1
// if hunger = 5 "Your pet is getting hungry, you should feed it soon"
// if hunger = 2 "Your pet is very hungry, if you do not feed it soon it may die"
// if hunger = 1 "Your pet is starving, feed it now or it will die"
// if hunger = 0 "Your pet has died" - game over restart

// if thirst = 5 "Your pet is getting thirsty, you should give it a drink soon"
// if thirst = 2 "Your pet is getting very thirsty, if you do not give it a drink soon it may die"
// if thirst = 1 "Your pet is dying of thirst, give it a drink now"
// if thirst = 0 "Your pet has died" - game over restart

// if happy = 10 "Your pet is tired, it needs to rest" reset boredom, wait 5 secs, "Your pet is awake & would like to play with you" 

// if nothing pressed boredom increases every 5 seconds
// if boredom = 7 "Your pet is getting bored, you should play with it soon"
// if boredom = 9 "Your pet is very bored, it will become angry soon"
// if boredom = 10 Rampage - "Your pet is apoplectic & is going on a rampage" game over restart
