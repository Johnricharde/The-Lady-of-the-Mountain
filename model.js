// MODEL //////////////////////////////////////////
const app = document.getElementById('app');

// Screen display values
let header = "";
let img = "";
let paragraph1 = ``;
let paragraph2 = ``;
let buttons = ``;



// Player starting items
let playerWeapon = "Sword";
let playerArmor = "Light Armor";
let playerTrinket = "Amulet of Tongues";

// Checks if player has done certain things:
let dogFreed = false;
let strangerMet = false;
let strangerTrinket = false;





// COMBAT VARIABLES
// Player stats
var playerHP = 50;
var playerDmgModifier = 0;
var playerArmModifier = 0;

// Enemy stats
var enemyHP = 50;
var enemyAction = ""
var enemyActionArray = [
    "Heavy attack",
    "Quick attack",
    "Block",
]
