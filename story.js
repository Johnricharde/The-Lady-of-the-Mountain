// CONTROLLER ///////////////////////////////////
// Keeps track of player items
// let playerWeapon = "Sword";
// let playerArmor = "Light Armor";
// let playerTrinket = "Amulet of Tongues";


// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// INTRODUCTION ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| INTRODUCTION //
introduction()
function introduction() {
    header = "TALES OF VARGEN";
    img = "/img/chapter1/startscreen.jpg";
    paragraph1 = `The Lady of The Mountain<br>In the realm of Vargen,<br>where you've lived a humble life.`;
    buttons = /*HTML*/`
        <button onclick="yourPast()">BEGIN</button>`
    updateScreen()
}
function yourPast() {
    header = "YOUR PAST";
    img = "/img/chapter1/past.jpg";
    paragraph1 = /*HTML*/`
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
            <label class="custom-radio-button custom-radio-button-label" onclick="selectTrinket('Helmet of Illumination')">
                <input type="radio" name="trinket" value="Helmet of Illumination">Helmet of Illumination
            </label>
            <label class="custom-radio-button custom-radio-button-label" onclick="selectTrinket('Cloak of Shadows')">
                <input type="radio" name="trinket" value="Cloak of Shadows">Cloak of Shadows
            </label>
            <label class="custom-radio-button custom-radio-button-label" onclick="selectTrinket('Amulet of Tongues')">
                <input type="radio" name="trinket" value="Amulet of Tongues">Amulet of Tongues
            </label>`;
    buttons = /*HTML*/`<button onclick="selectedOneOfEach()">Continue</button>`;   
    paragraph2 = ``;   
    updateScreen()
}
function yourFuture() {
    header = "YOUR FUTURE";
    img = "/img/chapter1/future.jpg";
    paragraph1 = /*HTML*/`
        What drives you forward is your lust for... <br>
            <label class="custom-radio-button custom-radio-button-label" onclick="">
                <input type="radio" name="" value="">Adventure and Glory
            </label>
            <label class="custom-radio-button custom-radio-button-label" onclick="">
                <input type="radio" name="" value="">Fame and Fortune
            </label>
            <label class="custom-radio-button custom-radio-button-label" onclick="">
                <input type="radio" name="" value="">Power and Wisdom
            </label><br><br>
        You must confront the lady in order to seek her... <br>
            <label class="custom-radio-button custom-radio-button-label" onclick="">
                <input type="radio" name="" value="">Help
            </label>
            <label class="custom-radio-button custom-radio-button-label" onclick="">
                <input type="radio" name="" value="">Treasure
            </label>
            <label class="custom-radio-button custom-radio-button-label" onclick="">
                <input type="radio" name="" value="">Death
            </label><br><br>`;
    paragraph2 = ``
    buttons = /*HTML*/`<button onclick="day1()">Continue</button>`;
    updateScreen()
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// CHAPTER I ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| CHAPTER I //
function day1() {
    header = "LEAVING HOME";
    img = "/img/chapter1/dirt-road.jpg";
    paragraph1 = `You depart from the village of Hjort and begin your journey from home to seek out the lady.<br><br>Your reasons for doing so are yours and yours alone.<br><br>Next stop, the village of Brus.`;
    paragraph2 = `YOU CHOOSE TO...`
    buttons = /*HTML*/`
        <button onclick="dirtRoad1()">Continue</button>`;
    updateScreen()
}
function dirtRoad1() {
    header = "ON THE ROAD";
    img = "/img/chapter1/dirt-road2.jpg";
    paragraph1 = `You continue on your journey. Suddenly...`;
    buttons = /*HTML*/`
        <button onclick="dirtRoad2()">Continue</button>`;
    updateScreen()
}
// BANDIT ENCOUNTER /////////////////////////////////
function dirtRoad2() {
    if (playerTrinket == "Cloak of Shadows") {
        header = "BANDIT AMBUSH";
        img = "/img/chapter1/bandit-ambush-unsurprised.jpg";
        paragraph1 = `You spot bandits ahead. Seems their lookout didn't spot you due to your cloak of shadows`;
        buttons = /*HTML*/`
            <button onclick="bandits()">Approach</button>
            <button onclick="banditsSneakUp()">Sneak up</button>
            <button onclick="banditsAvoid()">Avoid them</button>`;
    } else if (playerTrinket != "Cloak of Shadows") {
        header = "BANDITS AHEAD";
        img = "/img/chapter1/bandit-ambush-surprised.jpg";
        paragraph1 = `Bandits appear out from behind the trees. Their lookout must've spotted you. They approach...`;
        buttons = /*HTML*/`
            <button onclick="bandits()">Continue</button>`;
    } else {bandits()}
    updateScreen()
}
function banditsSneakUp() {
    header = "SNEAK UP ON BANDITS";
    paragraph1 = `you sneak up on the bandits. you ready your ${playerWeapon}. you attack them and already two are down, their dog retaliates against the third bandit and the fourth on runs away in the panic`;
    buttons = /*HTML*/`
        <button onclick="banditsConclusion()">Continue</button>`;
    dogFreed = true;
    updateScreen()
}
function banditsAvoid() {
    header = "AVOID THE BANDITS";
    paragraph1 = `The bandits outnumber you. you decide its not work the risk and circle around the bandits so you may continue on your journey.`;
    buttons = /*HTML*/`
        <button onclick="banditsConclusion()">Continue</button>`;
    updateScreen()
}
function bandits() {
    if (playerTrinket == "Amulet of Tongues") {
        header = "BANDITS";
        img = "/img/chapter1/bandit-ambush-surprised.jpg";
        paragraph1 = `The bandits demand your money but their dog speaks up begging for your help`;
        buttons = /*HTML*/`
            <button onclick="banditsDog()">Continue</button>`; 
    } else if (playerTrinket != "Amulet of Tongues") {
        if (playerTrinket == "Helmet of Illumination") {
            header = "BANDITS";
            img = "/img/chapter1/bandit-ambush-surprised.jpg";
            paragraph1 = `The bandits demand your money`;
            buttons = /*HTML*/`
                <button onclick="banditsUseHelmet()">Fight (Helmet of Illumination)</button>
                <button onclick="banditsGiveGold()">Give gold</button>
                <button onclick="banditsRunAway()">Run away</button>`;
        } else if (playerTrinket != "Helmet of Illumination") {
            header = "BANDITS";
            img = "/img/chapter1/bandit-ambush-surprised.jpg";
            paragraph1 = `Bandits demand your money, does not have helmet`;
            buttons = /*HTML*/`
                <button onclick="banditsFight()">Fight</button>
                <button onclick="banditsGiveGold()">Give gold</button>
                <button onclick="banditsRunAway()">Run away</button>`;
        } else {banditsFight()}
    }
    updateScreen()
}
function banditsDog() {
    header = "BANDITS DOG";
    img = "/img/dog.jpg";
    paragraph1 = `The dog begs you to help him escape, advicing you to mention the name of the bandit chief`;
    buttons = /*HTML*/`
        <button onclick="banditsDog2()">Continue</button>`; 
    updateScreen()
}
function banditsDog2() {
    header = "BANDITS";
    img = "/img/chapter1/bandit-ambush-surprised.jpg";
    paragraph1 = `Bandits demand your money`;
    buttons = /*HTML*/`
        <button onclick="banditsTricked()">Trick bandits (Amulet of Tongues)</button>
        <button onclick="banditsFight()">Fight</button>
        <button onclick="banditsGiveGold()">Give gold</button>
        <button onclick="banditsRunAway()">Run away</button>`;
    updateScreen()
}
function banditsTricked() {
    paragraph1 = `You convince the bandits that your here on the bandit chief behalf in order to take the dog`;
    buttons = /*HTML*/`
        <button onclick="banditsConclusion()">Continue</button>`;
    dogFreed = true;
    updateScreen()
}
function banditsUseHelmet() {
    img = "/img/chapter1/bandits-blinded-by-light.jpg";
    paragraph1 = `the helmets light blinds the bandits, leaving you to make short work of them. the dog lashes out at its master as soon as he drops the leash`;
    buttons = /*HTML*/`
        <button onclick="banditsConclusion()">Continue</button>`;
    dogFreed = true;
    updateScreen()
}
function banditsFight() {
    if (playerWeapon == "Sword") {
        if (playerArmor == "Heavy Armor") {
            paragraph1 = `you draw your sword. the dog attacks one bandit. another runs away. the other two charge at you. you fend one off and the other one lands a blow. luckily it bounces off your heavy breastplate, leaving you unharmed`;
            buttons = /*HTML*/`
                <button onclick="banditsConclusion()">Continue</button>`;
        } else if (playerArmor != "Heavy Armor") {
            paragraph1 = `you draw your sword. the dog attacks one bandit. another runs away. the other two charge at you. you fend one off but the other lands a viscious blow.`;
            buttons = /*HTML*/`
                <button onclick="banditsConclusion()">Continue</button>`;
        }
    } else if (playerWeapon == "Longbow") {
        if (playerArmor == "Heavy Armor") {
            paragraph1 = `you draw your bow. the dog attacks one bandit. another runs away. the other two charge at you. you manage to shoot one but the other lands a blow. Luckily it bounces of your heavy breastplate`;
            buttons = /*HTML*/`
                <button onclick="banditsConclusion()">Continue</button>`;
        } else if (playerArmor != "Heavy Armor") {
            paragraph1 = `you draw your bow. the dog attacks one bandit. another runs away. the other two charge at you. you manage to shoot one but the other lands a viscious blow..`;
            buttons = /*HTML*/`
                <button onclick="banditsConclusion()">Continue</button>`;
        }
    } else if (playerWeapon == "Magic") {
        if (playerArmor == "Heavy Armor") {
            paragraph1 = `you draw your staff. the dog attacks one bandit. another runs away. the other two charge at you. you manage to throw a firebolt at one but the other lands a blow. luckily it bounces of your heavy breastplate`;
            buttons = /*HTML*/`
                <button onclick="banditsConclusion()">Continue</button>`;
        } else if (playerArmor != "Heavy Armor") {
            paragraph1 = `you draw your staff. the dog attacks one bandit. another runs away. the other two charge at you. you manage to throw a firebolt at one but the other lands a viscious blow..`;
            buttons = /*HTML*/`
                <button onclick="banditsConclusion()">Continue</button>`;
        }
    } else {banditsConclusion()};
    dogFreed = true;
    updateScreen()
}
function banditsRunAway() {
    paragraph1 = `Your run away from the bandits`;
    buttons = /*HTML*/`
        <button onclick="banditsConclusion()">Continue</button>`;
    updateScreen()
}
function banditsGiveGold() {
    paragraph1 = `You give the bandits all your gold`;
    buttons = /*HTML*/`
        <button onclick="banditsConclusion()">Continue</button>`;
    updateScreen()
}
function banditsConclusion() {
    header = "ONWARDS";
    img = "/img/chapter1/dirt-road.jpg";
    paragraph1 = `you continue on your journey after having dealt with the bandits, many more trials ahead.`;
    buttons = /*HTML*/`
        <button onclick="dogGreetsYou()">Continue</button>`;
    updateScreen()
}
// BANDIT ENCOUNTER OVER ////////////////////////////

function dogGreetsYou() {
    if (dogFreed == true) {
        if (playerTrinket == "Amulet of Tongues") {
            header = "DOG";
            img = "/img/dog.jpg";
            paragraph1 = `the dog says thank you and follows you`;
            buttons = /*HTML*/`
                <button onclick="followRoadOrThroughForest()">Continue</button>`; 
        } else if (playerTrinket != "Amulet of Tongues") {
            header = "DOG";
            img = "/img/dog.jpg";
            paragraph1 = `the dog follows you`;
            buttons = /*HTML*/`
                <button onclick="followRoadOrThroughForest()">Continue</button>`; 
        } else {console.log("Error, dogGreetsYou() function")}
    } else if (dogFreed != true) {
        followRoadOrThroughForest()
    }
    updateScreen()
}
function followRoadOrThroughForest() {
    header = "HOW TO PROCEED";
    img = "/img/chapter1/dirt-road.jpg";
    paragraph1 = `Your encounter with the bandits have led you to consider wheter or not following the road is the best course of action.`;
    buttons = /*HTML*/`
        <button onclick="crossroadInn()">Stay on the road</button>
        <button onclick="">Go through the forest</button>`; 
    updateScreen()
}
// CHOOSE TO FOLLOW THE ROAD ////////////////////////
// CROSSROAD INN ////////////////////////////////////
function crossroadInn() {
    header = "CROSSROAD INN";
    img = "/img/chapter1/crossroad-inn.jpg";
    paragraph1 = `You come across the famous Crossroad Inn, the intersection between the four towns of:<br><br>HJORT<br>Your home,<br>a humble waypoint towards the city of Grundheim.<br><br>DRUGE<br>A dwarven cesspool,<br>filled with thieves and refugees from Trollhall.<br><br> EGGON<br>A well respected shipwright village,<br>also known for harboring pirates.<br><br> BRUS<br>The birthplace of legends and fools,<br>in the shadow of Mournstone Mountain.<br>And your destination.`;
    buttons = /*HTML*/`
        <button onclick="crossroadInnInterior()">Enter</button>`
    updateScreen()
}
function crossroadInnInterior() {
    img = "/img/chapter1/crossroad-inn-interior.jpg";
    paragraph1 = `You enter the crossroad Inn`;
    buttons = /*HTML*/`
        <button onclick="crossroadLookAround()">Look around</button>
        <button onclick="">Leave</button>`; 
    updateScreen()
}
function crossroadLookAround() {
    header = "CROSSROAD INN";
    img = "/img/chapter1/crossroad-inn-interior.jpg";
    paragraph1 = `You look around and see:<br><br>A halfling barmaid behind the counter.<br><br>A dwarf with fiery red hair questioning patrons by the bar.<br><br>A man wearing the colors of the Staghelm rangers.<br><br>A strange man covered in trinkets.`;
    buttons = /*HTML*/`
        <button onclick="tippyAlebrook()">Talk to the barkeep</button>
        <button onclick="biffFirebrand()">Talk to the dwarf</button>
        <button onclick="rangerIngvar()">Talk to the ranger</button>
        <button onclick="strangerCrossroad()">Talk to the stranger</button>
        <button onclick="">Leave</button>`; 
    updateScreen()
}
// TIPPY ALEBROOK ............. //
function tippyAlebrook() {
    header = "TIPPY ALEBROOK";
    img = "/img/chapter1/crossroad-barkeep.jpg";
    paragraph1 = `"Evening, sir!<br>What can i getcha?"<br><br>She perks up as you approach,<br>revealing a wide and friendly smile.<br><br>"Food, drink, room for the night maybe?"<br><br>You wouldn't have thought it possible, but her smile widens even further. Like leather on a tanning rack.`;
    buttons = /*HTML*/`
        <button onclick="tippyAlebrookFoodAndDrink()">Buy food and drink</button>
        <button onclick="tippyAlebrookBuyRoom()">Buy a room</button>
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function tippyAlebrookFoodAndDrink() {
    paragraph1 = `She serves you a hearthy meal with an ale on the side.<br><br>All you HP has been restored.`;
    buttons = /*HTML*/`
        <button onclick="tippyAlebrookAnythingElse()">Continue</button>`
    updateScreen()
}
function tippyAlebrookBuyRoom() {
    paragraph1 = `You buy a room for the night.<br><br>Would you like to go to bed now?`;
    buttons = /*HTML*/`
        <button onclick="day1Rest()">Yes</button>
        <button onclick="tippyAlebrookAnythingElse()">No</button>`
    updateScreen()
}
function tippyAlebrookAnythingElse() {
    paragraph1 = `"Anything else i can help you with?"`;
    buttons = /*HTML*/`
    <button onclick="tippyAlebrookFoodAndDrink()">Buy food and drink</button>
    <button onclick="tippyAlebrookBuyRoom()">Buy a room</button>
    <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
// BIFF FIREBRAND ............. //
function biffFirebrand() {
    header = "BIFF FIREBRAND";
    img = "/img/chapter1/crossroad-dwarf.jpg";
    paragraph1 = `"Ye there!"<br><br>The red haired dwarf bursts out before you have time to react.<br><br>"Ye haven't by any chance seen a red haired dwarf lately have ye? About yay tall, dumb as a rock and ugly as a troll?"<br><br>He illustrates by bringing his hand up to about his own height`;
    buttons = /*HTML*/`
        <button onclick="biffFirebrandPoint()">Point at him</button>
        <button onclick="biffFirebrandNo()">Say you haven't</button>`
    updateScreen()
}
function biffFirebrandPoint() {
    paragraph1 = `The dwarf seems confused for a moment, before it suddenly dawns on him and his face sours.<br><br>"Shove that finger BACK up yer ARSE where it BELONGS ya STINKIN TROGLODYTE!"<br><br>The dwarf takes a moment to collect himself.<br><br>"I'm looking fer me little brother... have heart will ye?<br>No need fer insulting a dwarfs good looks."`;
    buttons = /*HTML*/`
        <button onclick="biffFirebrandAskAboutBrother()">Continue</button>`
    updateScreen()
}
function biffFirebrandNo() {
    paragraph1 = `"Well if ye do see him, ye tell him this fer me:<br><br>GET yer ARSE back over to DRUGE or we're doin the GOD'S DAMNED SIEGE without ye, ya damn PIECE O' LOAF!"<br><br>The dwarf takes a moment to collect himself.<br><br>"Ye got that?"`;
    buttons = /*HTML*/`
        <button onclick="biffFirebrandAskAboutBrother()">Continue</button>`
    updateScreen()
}
function biffFirebrandAskAboutBrother() {
    paragraph1 = `"Shite, forgot to INTRODUCE MESELF!<br>Name's BIFF Firebrand, eldest of the Firebrand family and proprietor of Firebrand Brandy Breweries!"<br><br>His posture seems to gain a little for each word.<br><br>"FINEST BREWERY in ALL of TROLLHALL! Though as you might've heard the Trollhalls ain't exactly dwarven territory right now."<br><br>His mood darkens.<br><br>"Which is why we're taking the fight back to them trolls! But then little Diff had to go and get himself lost... Again..."<br><br>He lets out a heavy sigh.<br><br>"Please, if ya see him?...<br>Just tell him to come back home..."`;
    buttons = /*HTML*/`
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
// RANGER INGVAR .............. //
function rangerIngvar() {
    header = "RANGER INGVAR";
    img = "/img/chapter1/crossroad-ranger.jpg";
    paragraph1 = `"Ha! Well I'll be..."<br><br>The man pushes through a grin.<br>You recognize this man, this is Ingvar Geirsson, a local ranger who helps protect the roads from bandits and beasts alike.<br><br>"I wasn't expecting to run into you here, friend! Have a seat why don't you?"<br><br>He pours you a drink<br><br>"I certainly wouldn't mind the company!"`;
    buttons = /*HTML*/`
        <button onclick="rangerIngvarSitDown()">Sit down</button>
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function rangerIngvarSitDown() {
    paragraph1 = `"I hope you'll forgive me if it's been awhile since my last visit to Hjort. Been pretty busy what with all the bandit attacks along the road to Druge"<br><br>He takes a swig of his drink.<br><br>"Ah, so tell me, what brought you all the way out here?"<br><br>`;
    buttons = /*HTML*/`
        <button onclick="rangerIngvarTell()">The Lady of the Mountain</button>
        <button onclick="rangerIngvarDontTell()">Nothing</button>`
    updateScreen()
}
function rangerIngvarTell() {
    paragraph1 = `"The lady? Why on... Well, I'm sure you have your reasons..."<br><br>Concern spreads across his face, his smile still wide though less so than before.<br><br>"I hope you know what you're doing, friend.<br>I've know good men who tried to find the lady for even better reasons."<br><br>He takes a cautious sip from his drink<br><br>"But hey, it was nice to see a friendly face.<br>I hope you find her, I really do. Just remember, there's no shame in turning back... Good luck, friend..."`;
    buttons = /*HTML*/`
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function rangerIngvarDontTell() {
    paragraph1 = `"Hehe, alright, keep your secrets!"<br><br>He snickers to himself.<br><br>"I'm sure it's none of my business anyway.<br>Gods know i've got enough on my plate already."<br><br>He points towards the red haired dwarf by the bar.<br><br>"Imagine an almost endless supply of those guys, but turned to banditry instead... yup. That's what we rangers have to deal with now after the trolls took back Trollhall..."<br><br>He brushes it off.<br><br>"But anyway, it was nice to see a friendly face. Good luck on your travels, friend."`;
    buttons = /*HTML*/`
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
// MYSTERIOUS STRANGER ........ //
function strangerCrossroad() {
    header = "STRANGE MAN";
    img = "/img/chapter1/crossroad-stranger.jpg";
    paragraph1 = `The man eyes you with a sly smile as you approach.<br><br>"You like riddles, stranger?"<br><br>You're caught off guard, but he continues.<br><br>"I find riddles hide many truths.<br>However, recently I've been troubled.<br>You see I'm trying to crack some riddles a friend threw my way... Perhaps you'd be so kind as to indulge me?"`;
    buttons = /*HTML*/`
        <button onclick="strangersRiddle1()">Accept riddle</button>
        <button onclick="crossroadLookAround()">Leave</button>`
    strangerMet = true;
    updateScreen()
}
function strangersRiddle1() {
    paragraph1 = `"Hmm, alright then."<br><br>He clears his throat before reciting the riddle<br><br>"A head of gold, a tail to match.<br>Change I bring, change I am...<br>What am I?"`;
    buttons = /*HTML*/`
        <input id="riddle-answer-1" type="text" placeholder="Write here...">
        <button onclick="strangersRiddleAnswer1()">Answer</button>
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function strangersRiddleAnswer1() {
    let riddleAnswer1 = document.getElementById('riddle-answer-1').value;
    if (riddleAnswer1.toLowerCase() == "coin") {
        paragraph1 = `"Hmm, yes i think you might be right."<br><br>He rubs his chin,<br>there's a twinkle in his eye.<br><br>"Ready for the next one?"`;
        buttons = /*HTML*/`
            <button onclick="strangersRiddle2()">Next riddle</button>
            <button onclick="crossroadLookAround()">Leave</button>`
    } else if (riddleAnswer1.toLowerCase() != "coin") {
        paragraph1 = `Hmm, no i don't that's it...`
        buttons = /*HTML*/`
            <input id="riddle-answer-1" type="text" placeholder="Write here...">
            <button onclick="strangersRiddleAnswer1()">Answer</button>
            <button onclick="crossroadLookAround()">Leave</button>`
    } else {strangersRiddle1()}
    updateScreen()
}
function strangersRiddle2() {
    paragraph1 = `He looks over your shoulder as if recalling a lost memory.<br><br>"A rich man wants me, a poor man owns me.<br>If you ate me, you would surely perish...<br>What am I"`;
    buttons = /*HTML*/`
        <input id="riddle-answer-2" type="text" placeholder="Write here...">
        <button onclick="strangersRiddleAnswer2()">Answer</button>
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function strangersRiddleAnswer2() {
    let riddleAnswer2 = document.getElementById('riddle-answer-2').value;
    if (riddleAnswer2.toLowerCase() == "nothing") {
        paragraph1 = `"Hmm, yes i think you might be right."<br><br>He rubs his chin,<br>there's a twinkle in his eye.<br><br>"Ready for the last one?"`;
        buttons = /*HTML*/`
            <button onclick="strangersRiddle3()">Next riddle</button>
            <button onclick="crossroadLookAround()">Leave</button>`
    } else if (riddleAnswer2.toLowerCase() != "nothing") {
        paragraph1 = `Hmm, no i don't that's it...`
        buttons = /*HTML*/`
            <input id="riddle-answer-2" type="text" placeholder="Write here...">
            <button onclick="strangersRiddleAnswer2()">Answer</button>
            <button onclick="crossroadLookAround()">Leave</button>`
    } else {strangersRiddle2()}
    updateScreen()
}
function strangersRiddle3() {
    paragraph1 = `His gaze locks onto your as you readies his last riddle.<br><br>"Why do you seek the Lady of the Mountain?"<br><br>There's an almost playful tone to the question.`;
    buttons = /*HTML*/`
        <button onclick="strangersRiddleAnswer3()">Answer truthfully</button>
        <button onclick="strangersRiddleAnswer3Refuse()">Refuse to answer</button>
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function strangersRiddleAnswer3() {
        paragraph1 = `"And there you have it."<br><br>He clasps his hands together.<br>You struggle to interpret his reaction.<br><br>"Thanks for humoring me, stranger."<br><br>He sounds surprisingly genuine,<br>there's a humbleness about him now.<br><br>"Here, take this as thanks,<br>and good luck on your journey."<br><br>He offers you one of his trinkets.`;
        buttons = /*HTML*/`
            <button onclick="strangersRiddleReward()">Accept gift</button>
            <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function strangersRiddleAnswer3Refuse() {
        paragraph1 = `"Well then, suppose I'll just have to keep wondering."<br><br>He looks you over until his gaze meets yours.<br><br>"Come back if you change your mind.<br>Either way i wish you good luck on your journey."<br><br>He gently brushes you off.`;
        buttons = /*HTML*/`
            <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function strangersRiddleReward() {
    paragraph1 = `He hands you a glass eye.<br>There seems to be a faint blue mist within it.`;
    buttons = /*HTML*/`
        <button onclick="crossroadLookAround()">Leave</button>`
    strangerTrinket = true;
updateScreen()
}
function day1Rest() {
    header = "REST";
    img = "/img/blackscreen.jpg";
    paragraph1 = ``;
    buttons = /*HTML*/`
        <button onclick="day2()">Wake up</button>`
    updateScreen()
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// CHAPTER II ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| CHAPTER II //
function day2() {
    img = "/img/chapter1/crossroad-inn-interior.jpg";
    paragraph1 = `You check out of the Crossroad Inn,<br>ready to continue your journey.`;
    buttons = /*HTML*/`
        <button onclick="">Continue</button>`; 
    updateScreen()
}





tutorialCombat()
function tutorialIntro() {
    header = "LINDA";
    img = "/img/tutorial-girl.jpg";
    paragraph1 = `Before you manage to slip out of town in order to begin your journey you're stopped by "her".<br><br>"And where in the blazing hells do you think you're going?"<br><br>You had hoped you could avoid her but no such luck. She's about as pleasant as a wolf stuck in a well.<br>But you did say you'd spar with her before you left.<br><br>"I won't have your death on MY conscience.<br>You're not leaving until I know you're ready!"`;
    paragraph2 = `YOU CHOOSE TO...`;
    buttons = /*HTML*/`
        <button onclick="tutorialCombat()">Greet her</button>
        <button onclick="">Run away</button>`;
        updateScreen()
}
function tutorialCombat() {
    header = "COMBAT TUTORIAL";
    paragraph1 = `"Hmpf!"<br><br>She does not acknowledge your greeting.<br><br>"Well? Draw your weapon already,<br>and don't you expect me to go EASY on you!"`;
    buttons = /*HTML*/`
        <button onclick="heavyAttack()">Heavy attack</button>
        <button onclick="quickAttack()">Quick attack</button>
        <button onclick="block()">Block</button>
        <button onclick="">Run away</button>`;
        updateScreen()
}
function tutorialCombat() {
    header = "LINDA";
    img = "/img/tutorial-girl.jpg";
    paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}`;
    paragraph2 = `YOU CHOOSE TO...`;
    buttons = /*HTML*/`
        <button onclick="heavyAttack()">Heavy attack</button>
        <button onclick="quickAttack()">Quick attack</button>
        <button onclick="block()">Block</button>
        <button onclick="">Run away</button>`;
        updateScreen()
}

