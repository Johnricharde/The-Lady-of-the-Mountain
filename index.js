// MODEL //////////////////////////////////////////
const app = document.getElementById('app');
let screen = document.getElementById('screen');

let header = "-TALES OF VARGEN-";
let img = "/img/startscreen.jpg";
let paragraph1 = `<h3>In the realm of Vargen,</h3>`;
let paragraph2 = `where the echoes of ancient legends intertwine with the whispers of untold secrets,<br>your journey begins...<br><br>The frigid winds of the Northlands carry tales of the Lady of the Mountain, a mysterious hag with the power to grant any wish. She is revered and feared, a source of both hope and dread among the people of this frosty land.<br><br>An urgent need burns in your heart to seek out the enigmatic hag. Perhaps it's a desperate plea for a wish that could change your life, or a quest for answers that have eluded you for too long.<br><br>One thing is certain - the journey to the summit of Mount Mournstone, where the Lady of the Mountain is rumored to dwell, is perilous and shrouded in mystery.<br><br>Few who have ventured there have returned, and those who do are forever changed by the trials they endured...`;
let = buttons = `<button onclick="enterBrusVillage()">BEGIN</button>`;

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
        // updateView()
    }

// CONTROLLER ///////////////////////////////////



// CHAPTER ONE /////////////////////////////////////////////////////////////////////////////////////// CHAPTER ONE //
function enterBrusVillage() {
    header = "-BRUS VILLAGE-"
    img = "/img/brus.jpg"
    paragraph1 = `As you enter the village of Brus at the foot of Mount Mournstone, you are greeted by a quaint and rustic settlement.<br><br>Timbered cottages with thatched roofs line the cobblestone streets, their windows adorned with flickering candlelight against the encroaching gloom. The air is filled with the scent of burning hearths and the distant murmur of hushed conversations.<br><br>Three options beckon before you:`
    paragraph2 = `<h3>YOU CHOOSE TO...</h3>`
    buttons = /*HTML*/`
        <button onclick="visitTavern()">Visit the Tavern</button><br>
        <button>Visit the General Store</button><br>
        <button>Visit the Village Elder</button>
    `
    updateScreen()
}
// VISIT THE TAVERN ------------------------------------------------------------------------------------- VISIT THE TAVERN
function visitTavern() {
    header = "-FROSTHOLM LODGE-"
    img = "/img/tavern.jpg"
    paragraph1 = `The tavern's sturdy oak door swings open, revealing a warm and welcoming interior.<br><br>The atmosphere inside Frostholm Lodge is cozy, with a handful of patrons scattered at wooden tables, engaged in quiet conversations or enjoying their meals. The hearth crackles merrily, casting a comforting warmth across the room.`
    buttons = /*HTML*/`
    <button onclick="tavernBarkeep()">Speak to the barkeep</button><br>
    <button>Accept a bard's riddle</button><br>
    <button>Join a dice game</button>
    `
    updateScreen()
}
// Speak with the barkeep ---------------------------------------------------------------------------- Speak with the barkeep
function tavernBarkeep() {
    header = "-BARKEEPER-"
    img = "/img/tavern-barkeep.jpg"
    paragraph1 = `Seated in the corner of the tavern, you notice an innkeeper who bears the marks of a life lived beyond these rustic walls. His rugged, well-built frame suggests a history filled with battles or adventurous pursuits, but his eyes, though sharp, hold a distant, world-weary gaze. With each wipe of a glass, his hands move mechanically, and his responses are succinct.<br><br>He doesn't exude warmth, but neither does he seem unfriendly. Engaging him might reveal hints of a past that he's chosen to keep at a distance, leaving you to wonder about the stories he's left behind.`
    buttons = /*HTML*/`
    <button onclick="askAboutTheLady()">Ask about the Lady of the Mountain</button><br>
    <button>Request a Strong Drink</button><br>
    <button>Share a tale of your quest</button>
    `
    updateScreen()
}
// Ask about the lady ---------------------------------------------------------------------------------- Ask about the lady
function askAboutTheLady() {
    paragraph1 = `As you lean in and inquire about the Lady of the Mountain, you notice a flicker of recognition in the innkeeper's weathered eyes. His distant gaze seems to travel to a place far beyond the tavern's walls, and for a moment, you sense a deep well of untold stories.<br><br>He speaks with a mixture of sorrow and wisdom, sharing hints of a past that he's guarded for so long. His words convey the weight of decades of experience as he discusses his own journey, the Lady of the Mountain, and the mountain's enigmatic nature. His voice carries a somber tone, revealing the complexities of the legend, but he remains elusive about the specifics of his own encounter with the Lady.`
    buttons = /*HTML*/`
        <button onclick="seekAdvice()">Seek advice for the ascent</button><br>
        <button>Ask about his own journey</button><br>
        <button>Leave</button>
    `
    updateScreen()
}
// Seek advice ------------------------------------------------------------------------------------------------ Seek advice
function seekAdvice() {
    paragraph1 = `As you inquire about the ascent, the innkeeper's demeanor subtly shifts, and his eyes convey a sense of resignation. Retrieving an item from beneath the counter, a relic from his own past journey, he hesitates but silently suggests its potential usefulness.<br><br>Deep sighs and a shadow of worry cross the innkeeper's face as he describes his son, a mirror image of his youth.<br><br>Mid-twenties, tousled blond hair, neatly trimmed beard, and a distinctive small scar on his left cheek.<br><br>The innkeeper's voice trembles with concern as he implores you to deliver a message to his son should you encounter him on your perilous journey. He stresses that the mountain is perilous for the young and reckless and hopes your words might guide his son back home safely.`
    buttons = /*HTML*/`
        <button onclick="acceptBarkeepsQuest()">Accept</button><br>
        <button>Decline</button>
    `
     updateScreen()
    }
function acceptBarkeepsQuest() {
    paragraph1 = `As you accept the quest, a fleeting but appreciative glimmer appears in the innkeeper's eyes. He nods in acknowledgment, the weight of shared understanding passing between you.<br><br>He places the item from his past journey into your hands, a silent token of his trust. With a final sigh, the innkeeper watches as you prepare to leave. He offers no more words but conveys his gratitude with a nod.<br><br>Turning away from the cozy atmosphere of the Frostholm Lodge, you set forth towards Mount Mournstone. There is no more time to linger, and the looming mountain awaits your ascent, shrouded in mystery and peril. As you step out into the cold, unforgiving world, a whisper of the innkeeper's voice lingers in your thoughts:<br><br>"Remember, you can always turn back..."`
    buttons = /*HTML*/`
        <button onclick="leaveBrus()">Leave</button>
    `
     updateScreen()
    }
function leaveBrus() {
    header = "-THE PATH AHEAD-"
    img = "/img/brus-departure.jpg"
    paragraph1 = `With a resolute heart, you step away from the comforting embrace of the village of Brus.<br>The cobblestone streets gradually give way to a rugged, snow-covered terrain as you begin your arduous journey toward the daunting silhouette of Mount Mournstone. The air is thick with anticipation, and the whispers of legends and mysteries cling to your every step.<br><br>Three distinct paths now lay before you:`;
    buttons = /*HTML*/`
        <button onclick="forestPath()">Follow the Forest Trail</button>
        <button>Follow the Frozen River</button>
        <button>Follow the High Ridge</button>
        <button>Turn back</button>
    `
     updateScreen()
}
// CHAPTER ONE END /////////////////////////////////////////////////////////////////////////////////////// CHAPTER ONE END //
// CHAPTER TWO /////////////////////////////////////////////////////////////////////////////////////// CHAPTER TWO //
function forestPath() {
    header = "-THE FOREST TRAIL-"
    img = "/img/forest-path.jpg"
    paragraph1 = `You opt for the Forest Trail, venturing into the snow-covered woods.<br>Towering trees create a natural canopy overhead, and the world is hushed, save for the soft crunch of your boots in the pristine snow. The path weaves through the ancient forest, where legends of hidden creatures and spectral whispers thrive.<br><br>As you continue your journey, you come across an unusual sight - a large, gnarled tree with a gaping hollow in its trunk. Within the hollow, you spot a shimmering, ethereal light. It pulses softly, casting an eerie glow that dances upon the surrounding snow.`;
    buttons = /*HTML*/`
        <button>Approach the light</button>
        <button>Observe Cautiously</button>
        <button>Bypass the Tree</button>
    `
     updateScreen()
}