// MODEL //////////////////////////////////////////
const app = document.getElementById('app');

// Screen display values
let header = "";
let img = "";
let paragraph1 = ``;
let paragraph2 = ``;
let buttons = ``;




// PLAYER ITEMS
// Player items
let playerWeapon = "";
let playerArmor = "";
let playerTrinket = "";


// Backpack
let backpackArray = [];



// Checks if player has done certain things:
let dogFreed = false;
let strangerMet = false;
let strangerTrinket = false;




// COMBAT VARIABLES
// Player stats
let playerHP = 50;
let playerHPMax = 50;
let playerDmgModifier = 0;
let playerArmModifier = 0;
let playerHealingFlasks = 5;
let playerGold = 0;

// Enemy stats
let enemyHP = 0;
let enemyAction = "";
const enemyActionArray = [
    "Heavy attack",
    "Quick attack",
    "Block",
];
