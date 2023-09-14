









// COMBAT MECHANICS:
// Quick Attack:   Deals a certain amount of damage. Can be blocked.
// Heavy Attack:   Deals double damage but fails if the opponent uses Quick Attack.
// Block Attack:   Prevents damage from Quick Attack but cannot block Heavy Attack.
function generateEnemyAction() {
    let randomNum = Math.floor(Math.random() * 3);
    enemyAction = enemyActionArray[randomNum];
}

function heavyAttack() {
    generateEnemyAction()
    if (enemyAction == "Heavy attack") {
        let dmgRoll = rollD20();
        enemyHP -= dmgRoll;
        dmgRoll = rollD20();
        playerHP -= dmgRoll;
        console.log("Enemy used Heavy attack! But so did you!")
    } else if (enemyAction == "Quick attack") {
        let dmgRoll = rollD10();
        playerHP -= dmgRoll;
        console.log("Enemy used Quick attack! Disrupting your attack!")
    } else if (enemyAction == "Block") {
        let dmgRoll = rollD20();
        enemyHP -= dmgRoll;
        console.log("Enemy used block! But you break their guard!")
    }
    console.log("player: " + playerHP);
    console.log("enemy: " + enemyHP);
}
function quickAttack() {
    generateEnemyAction()
    if (enemyAction == "Heavy attack") {
        let dmgRoll = rollD10();
        enemyHP -= dmgRoll;
        console.log("Enemy used Heavy attack! But you disrupted their attack!")
    } else if (enemyAction == "Quick attack") {
        let dmgRoll = rollD10();
        enemyHP -= dmgRoll;
        dmgRoll = rollD10();
        playerHP -= dmgRoll;
        console.log("Enemy used Quick attack! But so did you!")
    } else if (enemyAction == "Block") {
        console.log("Enemy used block! Deflecting your attack!")
    }
    console.log("player: " + playerHP);
    console.log("enemy: " + enemyHP);
}
function block() {
    generateEnemyAction()
    if (enemyAction == "Heavy attack") {
        let dmgRoll = rollD20();
        playerHP -= dmgRoll;
        console.log("Enemy used Heavy attack! It breaks your guard!")
    } else if (enemyAction == "Quick attack") {
        console.log("Enemy used Quick attack! You deflect it!")
    } else if (enemyAction == "Block") {
        console.log("Enemy used block! But so did you!")
    }
    console.log("player: " + playerHP);
    console.log("enemy: " + enemyHP);
}

function rollD20() {
    var d20Roll = Math.floor(Math.random() * 20 + 1);
    return d20Roll;
}
function rollD10() {
    let d10Roll = Math.floor(Math.random() * 10 + 1);
    return d10Roll;
}











































// FUNCTIONS FOR CHARACTER CREATION SCREEN ++++++++++++++++++++++++++++++++++++++++++++ //
function selectWeapon(weapon) {
    playerWeapon = weapon;
    updateRadioStyles();
}
function selectArmor(armor) {
    playerArmor = armor;
    updateRadioStyles();
}
function selectTrinket(trinket) {
    playerTrinket = trinket;
    updateRadioStyles();
}
function updateRadioStyles() {
    const labels = document.querySelectorAll('.custom-radio-button-label');
    labels.forEach(label => {
        const input = label.querySelector('input');
        if (input.name === 'weapon' && input.value === playerWeapon) {
            label.classList.add('selected');
        } else if (input.name === 'armor' && input.value === playerArmor) {
            label.classList.add('selected');
        } else if (input.name === 'trinket' && input.value === playerTrinket) {
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });
}
function selectedOneOfEach() {
    if (playerWeapon !== "" && playerArmor !== "" && playerTrinket !== "") {
        yourFuture()
    } else {
        alert("Please select one of each.");
    }
}