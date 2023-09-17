// COMBAT MECHANICS:
// Quick Attack:   Deals a certain amount of damage. Can be blocked.
// Heavy Attack:   Deals double damage but fails if the opponent uses Quick Attack.
// Block Attack:   Prevents damage from Quick Attack but cannot block Heavy Attack.

// Enemy combat actions
function generateEnemyAction() {
    let randomNum = Math.floor(Math.random() * 3);
    enemyAction = enemyActionArray[randomNum];
}
// Player combat actions
function heavyAttack(victoryScreen) {
    new Audio("./audio/button-click.mp3").play();
    generateEnemyAction()
    if (enemyAction == "Heavy attack") {
        let playerDmgRoll = rollD20();
        let enemyDmgRoll = rollD20();
        let enemyDmg = enemyDmgRoll;

        // Calculates dmg player takes after armor modifier
        if (enemyDmgRoll >= playerArmModifier) {
            enemyDmg -= playerArmModifier;
        } else if (enemyDmgRoll > 0) {
            enemyDmg = 0;
        } else {
            return}

        enemyHP -= playerDmgRoll;
        playerHP -= enemyDmg;

        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used HEAVY ATTACK!<br>But so did you!<br><br>You deal ${playerDmgRoll} damage!<br>They deal ${enemyDmg} damage!`;
    } else if (enemyAction == "Quick attack") {
        let enemyDmgRoll = rollD10();
        let enemyDmg = enemyDmgRoll;

        // Calculates dmg player takes after armor modifier
        if (enemyDmgRoll >= playerArmModifier) {
            enemyDmg -= playerArmModifier;
        } else if (enemyDmgRoll > 0) {
            enemyDmg = 0;
        } else {
            return}

        playerHP -= enemyDmg;

        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used QUICK ATTACK!<br>Disrupting your attack!<br><br>They deal ${enemyDmg} damage!<br><br>`;
    } else if (enemyAction == "Block") {
        let playerDmgRoll = rollD20();

        enemyHP -= playerDmgRoll;

        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used BLOCK!<br>But you break their guard!<br><br>You deal ${playerDmgRoll} damage!<br><br>`;
    }
    checkEnemyHP(victoryScreen);
    updateScreen();
}
function quickAttack(victoryScreen) {
    new Audio("./audio/button-click.mp3").play();
    generateEnemyAction()
    if (enemyAction == "Heavy attack") {
        let playerDmgRoll = rollD10();

        enemyHP -= playerDmgRoll;

        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used HEAVY ATTACK!<br>But you disrupted their attack!<br><br>You deal ${playerDmgRoll} damage!<br><br>`;
    } else if (enemyAction == "Quick attack") {
        let playerDmgRoll = rollD10();
        let enemyDmgRoll = rollD10();
        let enemyDmg = enemyDmgRoll;

        // Calculates dmg player takes after armor modifier
        if (enemyDmgRoll >= playerArmModifier) {
            enemyDmg -= playerArmModifier;
        } else if (enemyDmgRoll > 0) {
            enemyDmg = 0;
        } else {
            return}

        enemyHP -= playerDmgRoll;
        playerHP -= enemyDmgRoll;

        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used QUICK ATTACK!<br>But so did you!<br><br>You deal ${playerDmgRoll} damage!<br>They deal ${enemyDmgRoll} damage!`;
    } else if (enemyAction == "Block") {
        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used BLOCK!<br>Deflecting your attack!<br><br><br><br>`;
    }
    checkEnemyHP(victoryScreen);
    updateScreen();
}
function block() {
    new Audio("./audio/button-click.mp3").play();
    generateEnemyAction()
    if (enemyAction == "Heavy attack") {
        let enemyDmgRoll = rollD20();
        let enemyDmg = enemyDmgRoll;

        // Calculates dmg player takes after armor modifier
        if (enemyDmgRoll >= playerArmModifier) {
            enemyDmg -= playerArmModifier;
        } else if (enemyDmgRoll > 0) {
            enemyDmg = 0;
        } else {
            return}

        playerHP -= enemyDmgRoll;

        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used HEAVY ATTACK!<br>It breaks your guard!<br><br>They deal ${enemyDmgRoll} damage!<br><br>`;
    } else if (enemyAction == "Quick attack") {
        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used QUICK ATTACK!<br>You deflect it!<br><br><br><br>`;
    } else if (enemyAction == "Block") {
        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used BLOCK!<br>But so did you!<br><br><br><br>`;
    }
    updateScreen()
}
// Checks if enemy is dead
function checkEnemyHP(victoryScreen) {
    if (enemyHP <= 0) {
        victoryScreen();
    } else {return}
}

// Dice roll generators
function rollD20() {
    let d20Roll = Math.floor(Math.random() * 20 + 1);
    return d20Roll;
}
function rollD10() {
    let d10Roll = Math.floor(Math.random() * 10 + 1);
    return d10Roll;
}

// Healing flask functions
function useHealingFlask() {
    let healing = 25;

    if (playerHealingFlasks > 0) {
        new Audio("./audio/healing-flask-drink.mp3").play();
        if ((playerHP + healing) >= playerHPMax) {
            playerHP = playerHPMax;
        } else if ((playerHP + healing) < playerHPMax) {
            playerHP += healing;
        }
        playerHealingFlasks -= 1;
    } else {
        alert("You're out of healing potions!")
    }
    updateScreen()
}
function addHealingFlask() {
    playerHealingFlasks += 1;
}



























// FUNCTIONS FOR CHARACTER CREATION SCREEN ++++++++++++++++++++++++++++++++++++++++++++ //
function selectArmor(armor) {
    new Audio("./audio/button-click.mp3").play();
    playerArmor = armor;
    if (playerArmor == "Heavy Armor") {
        playerArmModifier = 4;
    } else if (playerArmor == "Light Armor") {
        playerArmModifier = 2;
    } else {playerArmModifier = 0}
    playerWeapon = "Sword";
    updateRadioStyles();
}
function selectTrinket(trinket) {
    new Audio("./audio/button-click.mp3").play();
    playerTrinket = trinket;
    updateRadioStyles();
}
function updateRadioStyles() {
    const labels = document.querySelectorAll('.custom-radio-button-label');
    labels.forEach(label => {
        const input = label.querySelector('input');
        if (input.name === 'armor' && input.value === playerArmor) {
            label.classList.add('selected');
        } else if (input.name === 'trinket' && input.value === playerTrinket) {
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });
}
function selectedOneOfEach() {
    if (playerArmor !== "" && playerTrinket !== "") {
        yourFuture()
    } else {
        alert("Please select one of each.");
    }
}