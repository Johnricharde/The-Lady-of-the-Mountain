// MODEL //////////////////////////////////////////
const app = document.getElementById('app');
let screen = document.getElementById('screen');

let header = "";
let img = "";
let paragraph1 = ``;
let paragraph2 = ``;
let buttons = ``;


// VIEW ///////////////////////////////////////////
updateScreen()
 
    function updateScreen() {
        newScreen = /*HTML*/ `
        <h1>${header}</h1>
        <img src="${img}">
        <p>${paragraph1}</p>
        <p>${paragraph2}</p>
        <div id="buttons">${buttons}</div>
        `
        screen.innerHTML = newScreen
    }

// CONTROLLER ///////////////////////////////////
let playerWeapon = "";
let playerArmor = "";
let playerTrinket = "";


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
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// CHAPTER I ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| CHAPTER I //
// introduction()
function introduction() {
    header = "-TALES OF VARGEN-";
    img = "/img/startscreen.jpg";
    paragraph1 = `<h3>In the realm of Vargen,</h3>`;
    paragraph2 = `Placeholder, introduction to the setting and setting up the plot`;
    buttons = /*HTML*/`
    <button onclick="yourPast()">BEGIN</button>
    `
    updateScreen()
}
yourPast()
function yourPast() {
    header = "-YOUR PAST-";
    img = "/img/past.jpg";
    paragraph1 = `
    In times of peril, you swore by your... <br>
        <label class="custom-radio-button custom-radio-button-label" onclick="selectWeapon('Sword')">
            <input type="radio" name="weapon" value="Sword">Sword
        </label>
        <label class="custom-radio-button custom-radio-button-label" onclick="selectWeapon('Longbow')">
            <input type="radio" name="weapon" value="Longbow">Longbow
        </label>
        <label class="custom-radio-button custom-radio-button-label" onclick="selectWeapon('Magic')">
            <input type="radio" name="weapon" value="Magic">Magic
        </label><br><br>

    In times of strife, you relied on your... <br>
        <label class="custom-radio-button custom-radio-button-label" onclick="selectArmor('Heavy Armor')">
            <input type="radio" name="armor" value="Heavy Armor">Heavy Armor
        </label>
        <label class="custom-radio-button custom-radio-button-label" onclick="selectArmor('Light Armor')">
            <input type="radio" name="armor" value="Light Armor">Light Armor
        </label><br><br>

    And for the times ahead, you brougth your...<br>
        <label class="custom-radio-button custom-radio-button-label" onclick="selectTrinket('Amulet of Foresight')">
            <input type="radio" name="trinket" value="Amulet of Foresight">Amulet of Foresight
        </label>
        <label class="custom-radio-button custom-radio-button-label" onclick="selectTrinket('Cloak of Shadows')">
            <input type="radio" name="trinket" value="Cloak of Shadows">Cloak of Shadows
        </label>
        <label class="custom-radio-button custom-radio-button-label" onclick="selectTrinket('Orb of Illumination')">
            <input type="radio" name="trinket" value="Orb of Illumination">Orb of Illumination
        </label>
    `;

    buttons = `<button onclick="selectedOneOfEach()">Continue</button>`;   
    paragraph2 = ``;   
    
    updateScreen()
}
function yourFuture() {
    header = "-YOUR FUTURE-";
    img = "/img/future.jpg";
    paragraph1 = `
    What drives you forward is your lust for... <br>
        <button>Glory and Adventure</button>
        <button>Wisdom and Knowledge</button>
        <button>Power and Wealth</button><br><br>
        You seek the lady of the mountain so that you may... <br>
        <button title="">Seek her help</button>
        <button title="">Slay her</button>`;
    paragraph2 = ``
    buttons = `<button onclick="leavingHome()">Continue</button>
    `;
    updateScreen()
}
function leavingHome() {
    header = "-LEAVING HOME-";
    img = "/img/dirt-road.jpg";
    paragraph1 = `You begin your journey from home to seek out the lady`;
    paragraph2 = ``
    buttons = `<button onclick="">Continue</button>
    `;
    updateScreen()
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// CHAPTER II ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| CHAPTER II //
function leaveBrus() {
    header = "-THE PATH AHEAD-"
    img = "/img/brus-departure.jpg"
    paragraph1 = `With a resolute heart, you step away from the comforting embrace of the village of Brus.<br>The cobblestone streets gradually give way to a rugged, snow-covered terrain as you begin your arduous journey toward the daunting silhouette of Mount Mournstone. The air is thick with anticipation, and the whispers of legends and mysteries cling to your every step.<br><br>Three distinct paths now lay before you:`;
    buttons = /*HTML*/`
        <button onclick="chooseForestPath()">Follow the Forest Trail</button>
        <button>Follow the Frozen River</button>
        <button>Follow the High Ridge</button>
        <button>Turn back</button>
    `
    updateScreen()
}
// FOREST PATH ..................................... FOREST PATH
function chooseForestPath() {
    header = "-GLOWING TREE TRUNK-"
    img = "/img/treetrunk.jpg"
    paragraph1 = `You opt for the Forest Trail, venturing into the snow-covered woods.<br>Towering trees create a natural canopy overhead, and the world is hushed, save for the soft crunch of your boots in the pristine snow. The path weaves through the ancient forest, where legends of hidden creatures and spectral whispers thrive.<br><br>As you continue your journey, you come across an unusual sight - a large, gnarled tree with a gaping hollow in its trunk. Within the hollow, you spot a shimmering, ethereal light. It pulses softly, casting an eerie glow that dances upon the surrounding snow.`;
    buttons = /*HTML*/`
        <button onclick="orbApproach()">Approach the light</button>
        <button>Observe Cautiously</button>
        <button>Bypass the Tree</button>
    `
     updateScreen()
}
function campForest() {
    header = "-FOREST CAMP-"
    img = "/img/forest-camp.jpg"
    paragraph1 = `As night falls over the snow-covered forest, the necessity of setting up camp becomes evident. You quickly gather what's available to create a makeshift campfire, providing not only much-needed warmth but also a sense of security in this chilling wilderness. Sitting by the flickering flames, the crackling fire and the distant hoot of an owl are your sole companions in this serene, dark world.<br><br>Your bedroll offers a modest comfort as you lay down to rest. Thoughts whirl in your mind, a tumultuous sea of questions and possibilities. With the enigmatic Lady of the Mountain on your mind and the forest's mysteries surrounding you, you drift into a deep, uncertain sleep, aware that the journey ahead holds both peril and promise.`;
    buttons = /*HTML*/`
        <button onclick="campForestMorning()">Sleep</button>
    `
     updateScreen()
}
function campForestMorning() {
    header = "-THE NEXT DAY-"
    img = "/img/forest-path.jpg"
    paragraph1 = `As dawn breaks and you wake from your restless slumber, your journey must press on through the snow-covered forest. The path ahead stretches into an unknown world, its secrets veiled in the frosty air. The forest, bathed in predawn light, invites you deeper into its heart, where ancient trees stand sentinel and the earth seems to whisper untold stories.<br><br>You gather your belongings, each step in the snow leaving a faint imprint of your presence. With the wilderness all around you, you contemplate your next move, aware that every decision shapes the course of your quest. The frigid air stings your cheeks as you breathe deeply, embracing the challenges and mysteries that lie ahead.`;
    buttons = /*HTML*/`
        <button onclick="runestones()">Continue</button>
        <button>Turn back</button>
    `
     updateScreen()
}
// RIDGE PATH ....................................... RIDGE PATH
function chooseRidgePath() {
    header = "--"
    img = "/img/.jpg"
    paragraph1 = ``
    buttons = /*HTML*/`
    <button onclick=""></button>
    `
    updateScreen()
}
function campRidge() {
    header = "--"
    img = "/img/.jpg"
    paragraph1 = ``
    buttons = /*HTML*/`
    <button onclick=""></button>
    `
    updateScreen()
}
function campRidgeMorning() {
    header = "--"
    img = "/img/.jpg"
    paragraph1 = ``
    buttons = /*HTML*/`
    <button onclick=""></button>
    `
    updateScreen()
}
// RIVER PATH ....................................... RIVER PATH
function chooseRiverPath() {
    header = "--"
    img = "/img/.jpg"
    paragraph1 = ``
    buttons = /*HTML*/`
    <button onclick=""></button>
    `
    updateScreen()
}
function campRiver() {
    header = "--"
    img = "/img/.jpg"
    paragraph1 = ``
    buttons = /*HTML*/`
    <button onclick=""></button>
    `
    updateScreen()
}
function campRiverMorning() {
    header = "--"
    img = "/img/.jpg"
    paragraph1 = ``
    buttons = /*HTML*/`
    <button onclick=""></button>
    `
    updateScreen()
}




// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// CHAPTER III ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| CHAPTER III //
function midPoint() {
    header = "-UNDER THE SUMMIT-"
    img = "/img/mid-point.jpg"
    paragraph1 = `You take your leave and press onward, drawing ever closer to the summit of Mount Mournstone. The air grows colder, and the landscape more unforgiving.<br><br>As you ascend, you notice the ominous signs of a storm brewing on the horizon. Dark clouds gather, and the wind carries a bitter chill. Ahead of you, the mountain presents three distinct paths, each cloaked in its own allure`;
    buttons = /*HTML*/`
        <button onclick="chooseCave()">Enter the cave</button>
        <button>Follow the path to the summit</button>
        <button>Climb towards the summit</button>
    `
     updateScreen()
}
function chooseCave() {
    header = "-ICE CAVE ENTRANCE-"
    img = "/img/cave-entrance.jpg"
    paragraph1 = `With unwavering determination in your heart and the storm's impending fury above, you decide to seek refuge within the ominous maw of the cave. As you step into its frigid darkness, the temperature drops sharply, and the sensation of crisp, icy air fills your lungs. The narrow entrance gradually widens, unveiling the secrets hidden within.<br><br>Dim, ethereal light filters through from the entrance, casting eerie, azure-hued shadows upon the icy cave walls. Stalactites resembling crystalline daggers hang from above, their icy formations glistening with an otherworldly beauty. The rocky floor, covered in a frosty glaze, crunches softly beneath your insulated boots. Water drips from unseen sources, forming small, delicate icicles and creating tiny pools in the depressions of the uneven, frozen ground.`
    buttons = /*HTML*/`
        <button onclick="caveJunction()">Continue</button>
    `
     updateScreen()
}




// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// EPILOGUE ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| EPILOGUE //
function nearSummit() {
    header = "-THE SUMMIT-"
    img = "/img/near-summit.jpg"
    paragraph1 = `As your journey draws to its culmination, you stand upon the summit of Mount Mournstone, taking in the panoramic view of the world below. You reflection upon choices made, revealing the essence of your character.<br><br>You accepted the barkeep's heartfelt plea for help, a testament to your compassion. When duty called, you heeded it, offering your aid to a desperate father.<br><br>Approaching the glowing orb nestled within the tree trunk, you claimed it for yourself, revealing a curiosity and thirst for the unknown. This choice has marked you as an adventurer at heart, willing to seize opportunities that others might shun.<br><br>In the face of adversity, you never flinched. Even when a hungry wolf threatened your path, you confronted it head-on, displaying unwavering resolve and a fierce determination to survive.`
    buttons = /*HTML*/`
        <button onclick="nearSummit2()">Continue</button>
    `
     updateScreen()
}
function nearSummit2() {
    paragraph1 = `Trusting a stranger in the woods, you showcased a willingness to see the good in people, believing in the power of cooperation amidst the unknown.<br><br>You journeyed onward, unyielding even when the very walls surrounding you crumbled under the quake's violent assault. This resilience tells of a spirit that refuses to bow to adversity, no matter how insurmountable it may seem.<br><br>Finally, your unwavering refusal to shed the blood of those at your mercy, be they man or monster, shines a light on your humanity. You've demonstrated that beneath the mantle of a warrior lies a heart that values life and mercy above all else.<br><br>As you stand at the peak, the world stretches out below, and the Lady of the Mountain awaits.<br><br>Every choice you've made has forged you into one of courage, curiosity, and compassion. Now, as you embark on the final leg of your journey, your fate awaits.`
    buttons = /*HTML*/`
        <button onclick="summit()">Continue</button>
    `
     updateScreen()
}
function summit() {
    img = "/img/summit.jpg"
    paragraph1 = `As you reach the summit of Mount Mournstone, your breaths come out in quick bursts, and your heart races with anticipation. You stand at the culmination of your journey, expecting to find the Lady of the Mountain awaiting your arrival.<br><br>Yet, there is nothing but silence. The wind whispers, and the world stretches out before you, revealing the vast expanse of mountains and the boundless ocean beyond. Birds soar freely overhead, their calls filling the air.<br><br>As you stand there, breathing in the crisp mountain air, you feel a deep connection with yourself and the choices you made throughout your journey. The obstacles you faced, the people you encountered, and the challenges you overcame have all contributed to your growth.<br><br>It's a moment of clarity, a recognition that the path you've traveled has led you to a deeper understanding of who you are and what truly matters.`
    buttons = /*HTML*/`
        <button onclick="end()">TURN BACK</button>
    `
     updateScreen()
}
function end() {
    header = "-THE END-"
    img = "/img/startscreen.jpg"
    paragraph1 = `THANKS FOR PLAYING!<br><br>-John-`
    buttons = ""
     updateScreen()
}