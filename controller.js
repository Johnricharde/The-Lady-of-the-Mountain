









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
        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used HEAVY ATTACK!<br>But so did you!`;
    } else if (enemyAction == "Quick attack") {
        let dmgRoll = rollD10();
        playerHP -= dmgRoll;
        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used QUICK ATTACK!<br>Disrupting your attack!`;
    } else if (enemyAction == "Block") {
        let dmgRoll = rollD20();
        enemyHP -= dmgRoll;
        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used BLOCK!<br>But you break their guard!`;
    }
    updateScreen()
}
function quickAttack() {
    generateEnemyAction()
    if (enemyAction == "Heavy attack") {
        let dmgRoll = rollD10();
        enemyHP -= dmgRoll;
        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used HEAVY ATTACK!<br>But you disrupted their attack!`;
    } else if (enemyAction == "Quick attack") {
        let dmgRoll = rollD10();
        enemyHP -= dmgRoll;
        dmgRoll = rollD10();
        playerHP -= dmgRoll;
        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used QUICK ATTACK!<br>But so did you!`;
    } else if (enemyAction == "Block") {
        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used BLOCK!<br>Deflecting your attack!`;
    }
    updateScreen()
}
function block() {
    generateEnemyAction()
    if (enemyAction == "Heavy attack") {
        let dmgRoll = rollD20();
        playerHP -= dmgRoll;
        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used HEAVY ATTACK!<br>It breaks your guard!`;
    } else if (enemyAction == "Quick attack") {
        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used QUICK ATTACK!<br>You deflect it!`;
    } else if (enemyAction == "Block") {
        paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>Enemy used BLOCK!<br>But so did you!`;
    }
    updateScreen()
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