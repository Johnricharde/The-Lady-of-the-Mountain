// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// INTRODUCTION ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| INTRODUCTION //
introduction()
function introduction() {
    header = "TALES OF VARGEN";
    img = "./img/chapter1/startscreen.jpg";
    paragraph1 = `The Lady of The Mountain<br>In the realm of Vargen,<br>where you've lived a humble life.`;
    buttons = /*HTML*/`
        <button onclick="yourPast()">BEGIN</button>`
    updateScreen()
}
function yourPast() {
    new Audio("./audio/button-click.mp3").play();
    header = "YOUR PAST";
    img = "./img/chapter1/past.jpg";
    paragraph1 = /*HTML*/`
        In times of strife, you relied on your... <br>
            <label title="Adds + 4 to armor but at the cost of mobility" class="custom-radio-button custom-radio-button-label" onclick="selectArmor('Heavy Armor')">
                <input type="radio" name="armor" value="Heavy Armor">Heavy Armor
            </label>
            <label title="Adds + 2 to armor but offers greater mobility" class="custom-radio-button custom-radio-button-label" onclick="selectArmor('Light Armor')">
                <input type="radio" name="armor" value="Light Armor">Light Armor
            </label><br><br>

        And for the times ahead, you brougth your...<br>
            <label title="Lets you blind your enemies and light up dark places" class="custom-radio-button custom-radio-button-label" onclick="selectTrinket('Helmet of Illumination')">
                <input type="radio" name="trinket" value="Helmet of Illumination">Helmet of Illumination
            </label>
            <label title="Lets you hide from enemies and sneak around" class="custom-radio-button custom-radio-button-label" onclick="selectTrinket('Cloak of Shadows')">
                <input type="radio" name="trinket" value="Cloak of Shadows">Cloak of Shadows
            </label>
            <label title="Lets you talk to those who don't normally speak your tongue" class="custom-radio-button custom-radio-button-label" onclick="selectTrinket('Amulet of Tongues')">
                <input type="radio" name="trinket" value="Amulet of Tongues">Amulet of Tongues
            </label>`;
    buttons = /*HTML*/`<button onclick="selectedOneOfEach()">Continue</button>`;   
    paragraph2 = ``;   
    updateScreen()
}
function yourFuture() {
    new Audio("./audio/button-click.mp3").play();
    header = "YOUR FUTURE";
    img = "./img/chapter1/future.jpg";
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
            </label>`;
    paragraph2 = ``
    buttons = /*HTML*/`<button onclick="linda()">Continue</button>`;
    updateScreen()
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// CHAPTER I ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| CHAPTER I //
// COMBAT TUTORIAL //////////////////////////////////
function linda() {
    new Audio("./audio/button-click.mp3").play();
    header = "LINDA";
    img = "./img/tutorial-girl.jpg";
    paragraph1 = `Before you manage to slip out of town in order to begin your journey you're stopped by "her".<br><br>"And where in the blazing hells do you think you're going?"<br><br>You had hoped you could avoid her but no such luck. She's about as pleasant as a wolf stuck in an empty well.<br>But you did say you'd spar with her before you left.<br><br>"I won't have your death on MY conscience.<br>You're not leaving until I know you're ready!"`;
    buttons = /*HTML*/`
        <button onclick="lindaGreet()">Greet her</button>
        <button onclick="day1()">Run away</button>`;
        updateScreen()
}
function lindaGreet() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `"Hmpf!"<br><br>She does not acknowledge your greeting.<br><br>"Well? Draw your weapon already,<br>and don't you expect me to go EASY on you!"`;
    buttons = /*HTML*/`
        <button onclick="tutorialCombatIntro()">Continue</button>`
        updateScreen()
}
function tutorialCombatIntro() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `"Let's go over the basics.<br>Do you remember the game we used to play?<br>rock, paper, scissors?<br><br>She makes a scissoring motion with her hand.<br><br>"Well, fighting is alot like that.<br>You use different techniques that all have their own strengths and weaknesses.<br>Here, I'll show you..."`;
    buttons = /*HTML*/`
        <button onclick="tutorialCombat()">Begin</button>`
        updateScreen()
}
function tutorialCombat() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `"First of, try to hit me with a HEAVY ATTACK,<br>and then I'll disrupt it using a QUICK ATTACK."`;
    buttons = /*HTML*/`
        <button onclick="heavyAttackTutorial()">Heavy attack</button>`
        updateScreen()
}
function heavyAttackTutorial() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `You charge at her with a HEAVY ATTACK.<br>Leaving yourself wide open.<br><br>She uses a QUICK ATTACK.<br>A quick strike to your temple stops you mid swing.<br><br>"See how I disrupted your HEAVY ATTACK with a quicker one? Now try using a QUICK ATTACK like i just did and I'll BLOCK it."`;
    buttons = /*HTML*/`
    <button onclick="quickAttackTutorial()">Quick attack</button>`
    updateScreen()
}
function quickAttackTutorial() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `You lunge at her with a QUICK ATTACK.<br>Sacrificing strength for speed.<br>She uses BLOCK.<br>A steady swing of her quarterstaff deflects your strike.<br><br>"See how I deflected your QUICK ATTACK with a solid stance? Now try using BLOCK like I just did and I'll use a HEAVY ATTACK."`;
    buttons = /*HTML*/`
    <button onclick="blockTutorial()">Block</button>`
    updateScreen()
}
function blockTutorial() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `You ready yourself with a BLOCK.<br>Focusing entirely on defense.<br>She uses a HEAVY ATTACK.<br>A mighty blow slams through your defenses.<br><br>"See how I broke your BLOCK by putting my weight into it? Alright, I think that's enough."<br><br>She wipes the sweat from her forehead, looks like you managed to tired her out.<br><br>"So then, let's summarize."`;
    buttons = /*HTML*/`
    <button onclick="summarize()">Summarize</button>`
    updateScreen()
}
function summarize() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `"HEAVY ATTACK:<br>Disrupted by QUICK ATTACK,<br>but breaks BLOCK.<br><br>QUICK ATTACK:<br>deflected by BLOCK,<br>but disrupts HEAVY ATTACK.<br><br>BLOCK:<br>Broken by HEAVY ATTACK,<br>but deflects QUICK ATTACK.`;
    buttons = /*HTML*/`
    <button onclick="lindaFarewell()">continue</button>`
    updateScreen()
}
function lindaFarewell() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `"Well, I did what i could."<br><br>She produces a healing flask from her pouch and hands it to you.<br><br>"if you die now it's your own fault!"<br><br>She turns her back to you and leaves, she never were good with farewells.`;
    buttons = /*HTML*/`
    <button onclick="day1()">Leave</button>`
    addHealingFlask()
    updateScreen()
}
   


function day1() {
    new Audio("./audio/button-click.mp3").play();
    header = "LEAVING HOME";
    img = "./img/chapter1/dirt-road.jpg";
    paragraph1 = `You depart from the village of Hjort and begin your journey from home to seek out the lady.<br><br>Your reasons for doing so are yours and yours alone.<br><br>Next stop, the village of Brus.`;
    paragraph2 = `YOU CHOOSE TO...`
    buttons = /*HTML*/`
        <button onclick="dirtRoad1()">Continue</button>`;
    updateScreen()
}
function dirtRoad1() {
    new Audio("./audio/button-click.mp3").play();
    header = "ON THE ROAD";
    img = "./img/chapter1/dirt-road2.jpg";
    paragraph1 = `You continue on your journey. Suddenly...`;
    buttons = /*HTML*/`
        <button onclick="dirtRoad2()">Continue</button>`;
    updateScreen()
}
// BANDIT ENCOUNTER /////////////////////////////////
function dirtRoad2() {
    new Audio("./audio/button-click.mp3").play();
    if (playerTrinket == "Cloak of Shadows") {
        header = "BANDIT AMBUSH";
        img = "./img/chapter1/bandit-ambush-unsurprised.jpg";
        paragraph1 = `You spot bandits ahead. Seems their lookout didn't spot you due to your cloak of shadows`;
        buttons = /*HTML*/`
            <button onclick="bandits()">Approach</button>
            <button onclick="banditsSneakUp()">Sneak up</button>
            <button onclick="banditsAvoid()">Avoid them</button>`;
    } else if (playerTrinket != "Cloak of Shadows") {
        header = "BANDITS AHEAD";
        img = "./img/chapter1/bandit-ambush-surprised.jpg";
        paragraph1 = `Bandits appear out from behind the trees. Their lookout must've spotted you. They approach...`;
        buttons = /*HTML*/`
            <button onclick="bandits()">Continue</button>`;
    } else {bandits()}
    updateScreen()
}
function banditsSneakUp() {
    new Audio("./audio/button-click.mp3").play();
    header = "SNEAK UP ON BANDITS";
    paragraph1 = `you sneak up on the bandits. you ready your ${playerWeapon}. you attack them and already two are down, their dog retaliates against the third bandit and the fourth on runs away in the panic`;
    buttons = /*HTML*/`
        <button onclick="banditsConclusion()">Continue</button>`;
    dogFreed = true;
    updateScreen()
}
function banditsAvoid() {
    new Audio("./audio/button-click.mp3").play();
    header = "AVOID THE BANDITS";
    paragraph1 = `The bandits outnumber you. you decide its not work the risk and circle around the bandits so you may continue on your journey.`;
    buttons = /*HTML*/`
        <button onclick="banditsConclusion()">Continue</button>`;
    updateScreen()
}
function bandits() {
    new Audio("./audio/button-click.mp3").play();
    if (playerTrinket == "Amulet of Tongues") {
        header = "BANDITS";
        img = "./img/chapter1/bandit-ambush-surprised.jpg";
        paragraph1 = `The bandits demand your money but their dog speaks up begging for your help`;
        buttons = /*HTML*/`
            <button onclick="banditsDog()">Continue</button>`; 
    } else if (playerTrinket != "Amulet of Tongues") {
        if (playerTrinket == "Helmet of Illumination") {
            header = "BANDITS";
            img = "./img/chapter1/bandit-ambush-surprised.jpg";
            paragraph1 = `The bandits demand your money`;
            buttons = /*HTML*/`
                <button onclick="banditsUseHelmet()">Fight (Helmet of Illumination)</button>
                <button onclick="banditsGiveGold()">Give gold</button>
                <button onclick="banditsRunAway()">Run away</button>`;
        } else if (playerTrinket != "Helmet of Illumination") {
            header = "BANDITS";
            img = "./img/chapter1/bandit-ambush-surprised.jpg";
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
    new Audio("./audio/button-click.mp3").play();
    header = "BANDITS DOG";
    img = "./img/dog.jpg";
    paragraph1 = `The dog begs you to help him escape, advicing you to mention the name of the bandit chief`;
    buttons = /*HTML*/`
        <button onclick="banditsDog2()">Continue</button>`; 
    updateScreen()
}
function banditsDog2() {
    new Audio("./audio/button-click.mp3").play();
    header = "BANDITS";
    img = "./img/chapter1/bandit-ambush-surprised.jpg";
    paragraph1 = `Bandits demand your money`;
    buttons = /*HTML*/`
        <button onclick="banditsTricked()">Trick bandits (Amulet of Tongues)</button>
        <button onclick="banditsFight()">Fight</button>
        <button onclick="banditsGiveGold()">Give gold</button>
        <button onclick="banditsRunAway()">Run away</button>`;
    updateScreen()
}
function banditsTricked() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `You convince the bandits that your here on the bandit chief behalf in order to take the dog`;
    buttons = /*HTML*/`
        <button onclick="banditsConclusion()">Continue</button>`;
    dogFreed = true;
    updateScreen()
}
function banditsUseHelmet() {
    new Audio("./audio/button-click.mp3").play();
    img = "./img/chapter1/bandits-blinded-by-light.jpg";
    paragraph1 = `the helmets light blinds the bandits, leaving you to make short work of them. the dog lashes out at its master as soon as he drops the leash`;
    buttons = /*HTML*/`
        <button onclick="banditsConclusion()">Continue</button>`;
    dogFreed = true;
    updateScreen()
}





function banditsFight() {
    new Audio("./audio/button-click.mp3").play();
    enemyHP = 50;

    header = "BANDIT FIGHT";
    img = "./img/chapter1/bandit-ambush-surprised.jpg";
    paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>You encounter a bandit!<br><br><br><br><br>`;
    buttons = /*HTML*/`
        <button onclick="heavyAttack(banditsVictoryScreen)">Heavy attack</button>
        <button onclick="quickAttack(banditsVictoryScreen)">Quick attack</button>
        <button onclick="block()">Block</button>`


    
    dogFreed = true;
    updateScreen()
}
function banditsVictoryScreen() {
    header = "BANDITS DEFEAT";
    img = "./img/chapter1/dirt-road.jpg";
    paragraph1 = `You've defeated the bandits in combat!<br><br>You gain 10 gold.<br>You gain a rope.`;
    buttons = /*HTML*/`
        <button onclick="dogGreetsYou()">Continue</button>`;
        backpackArray.push("Rope")
        playerGold += 10;
    updateScreen()
}



function banditsRunAway() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `Your run away from the bandits`;
    buttons = /*HTML*/`
        <button onclick="banditsConclusion()">Continue</button>`;
    updateScreen()
}
function banditsGiveGold() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `You give the bandits all your gold`;
    buttons = /*HTML*/`
        <button onclick="banditsConclusion()">Continue</button>`;
    updateScreen()
}
function banditsConclusion() {
    new Audio("./audio/button-click.mp3").play();
    header = "ONWARDS";
    img = "./img/chapter1/dirt-road.jpg";
    paragraph1 = `you continue on your journey after having dealt with the bandits, many more trials ahead.`;
    buttons = /*HTML*/`
        <button onclick="dogGreetsYou()">Continue</button>`;
    updateScreen()
}
// BANDIT ENCOUNTER OVER ////////////////////////////

function dogGreetsYou() {
    new Audio("./audio/button-click.mp3").play();
    if (dogFreed == true) {
        if (playerTrinket == "Amulet of Tongues") {
            header = "DOG";
            img = "./img/dog.jpg";
            paragraph1 = `the dog says thank you and follows you`;
            buttons = /*HTML*/`
                <button onclick="followRoadOrThroughForest()">Continue</button>`; 
        } else if (playerTrinket != "Amulet of Tongues") {
            header = "DOG";
            img = "./img/dog.jpg";
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
    new Audio("./audio/button-click.mp3").play();
    header = "HOW TO PROCEED";
    img = "./img/chapter1/dirt-road.jpg";
    paragraph1 = `Your encounter with the bandits have led you to consider wheter or not following the road is the best course of action.`;
    buttons = /*HTML*/`
        <button onclick="crossroadInn()">Stay on the road</button>
        <button onclick="">Go through the forest</button>`; 
    updateScreen()
}
// CHOOSE TO FOLLOW THE ROAD ////////////////////////
// CROSSROAD INN ////////////////////////////////////
function crossroadInn() {
    new Audio("./audio/button-click.mp3").play();
    header = "CROSSROAD INN";
    img = "./img/chapter1/crossroad-inn.jpg";
    paragraph1 = `You come across the famous Crossroad Inn, the intersection between the four towns of:<br><br>HJORT<br>Your home,<br>a humble waypoint towards the city of Grundheim.<br><br>DRUGE<br>A dwarven cesspool,<br>filled with thieves and refugees from Trollhall.<br><br> EGGON<br>A well respected shipwright village,<br>also known for harboring pirates.<br><br> BRUS<br>The birthplace of legends and fools,<br>in the shadow of Mournstone Mountain.<br>And your destination.`;
    buttons = /*HTML*/`
        <button onclick="crossroadInnInterior()">Enter</button>`
    updateScreen()
}
function crossroadInnInterior() {
    new Audio("./audio/button-click.mp3").play();
    img = "./img/chapter1/crossroad-inn-interior.jpg";
    paragraph1 = `You enter the crossroad Inn`;
    buttons = /*HTML*/`
        <button onclick="crossroadLookAround()">Look around</button>
        <button onclick="">Leave</button>`; 
    updateScreen()
}
function crossroadLookAround() {
    new Audio("./audio/button-click.mp3").play();
    header = "CROSSROAD INN";
    img = "./img/chapter1/crossroad-inn-interior.jpg";
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
    new Audio("./audio/button-click.mp3").play();
    header = "TIPPY ALEBROOK";
    img = "./img/chapter1/crossroad-barkeep.jpg";
    paragraph1 = `"Evening, sir!<br>What can i getcha?"<br><br>She perks up as you approach,<br>revealing a wide and friendly smile.<br><br>"Food, drink, room for the night maybe?"<br><br>You wouldn't have thought it possible, but her smile widens even further. Like leather on a tanning rack.`;
    buttons = /*HTML*/`
        <button onclick="tippyAlebrookFoodAndDrink()">Buy food and drink</button>
        <button onclick="tippyAlebrookBuyRoom()">Buy a room</button>
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function tippyAlebrookFoodAndDrink() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `She serves you a hearthy meal with an ale on the side.<br><br>All you HP has been restored.`;
    buttons = /*HTML*/`
        <button onclick="tippyAlebrookAnythingElse()">Continue</button>`
    updateScreen()
}
function tippyAlebrookBuyRoom() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `You buy a room for the night.<br><br>Would you like to go to bed now?`;
    buttons = /*HTML*/`
        <button onclick="day1Rest()">Yes</button>
        <button onclick="tippyAlebrookAnythingElse()">No</button>`
    updateScreen()
}
function tippyAlebrookAnythingElse() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `"Anything else i can help you with?"`;
    buttons = /*HTML*/`
    <button onclick="tippyAlebrookFoodAndDrink()">Buy food and drink</button>
    <button onclick="tippyAlebrookBuyRoom()">Buy a room</button>
    <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
// BIFF FIREBRAND ............. //
function biffFirebrand() {
    new Audio("./audio/button-click.mp3").play();
    header = "BIFF FIREBRAND";
    img = "./img/chapter1/crossroad-dwarf.jpg";
    paragraph1 = `"Ye there!"<br><br>The red haired dwarf bursts out before you have time to react.<br><br>"Ye haven't by any chance seen a red haired dwarf lately have ye? About yay tall, dumb as a rock and ugly as a troll?"<br><br>He illustrates by bringing his hand up to about his own height`;
    buttons = /*HTML*/`
        <button onclick="biffFirebrandPoint()">Point at him</button>
        <button onclick="biffFirebrandNo()">Say you haven't</button>`
    updateScreen()
}
function biffFirebrandPoint() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `The dwarf seems confused for a moment, before it suddenly dawns on him and his face sours.<br><br>"Shove that finger BACK up yer ARSE where it BELONGS ya STINKIN TROGLODYTE!"<br><br>The dwarf takes a moment to collect himself.<br><br>"I'm looking fer me little brother... have heart will ye?<br>No need fer insulting a dwarfs good looks."`;
    buttons = /*HTML*/`
        <button onclick="biffFirebrandAskAboutBrother()">Continue</button>`
    updateScreen()
}
function biffFirebrandNo() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `"Well if ye do see him, ye tell him this fer me:<br><br>GET yer ARSE back over to DRUGE or we're doin the GOD'S DAMNED SIEGE without ye, ya damn PIECE O' LOAF!"<br><br>The dwarf takes a moment to collect himself.<br><br>"Ye got that?"`;
    buttons = /*HTML*/`
        <button onclick="biffFirebrandAskAboutBrother()">Continue</button>`
    updateScreen()
}
function biffFirebrandAskAboutBrother() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `"Shite, forgot to INTRODUCE MESELF!<br>Name's BIFF Firebrand, eldest of the Firebrand family and proprietor of Firebrand Brandy Breweries!"<br><br>His posture seems to gain a little for each word.<br><br>"FINEST BREWERY in ALL of TROLLHALL! Though as you might've heard the Trollhalls ain't exactly dwarven territory right now."<br><br>His mood darkens.<br><br>"Which is why we're taking the fight back to them trolls! But then little Diff had to go and get himself lost... Again..."<br><br>He lets out a heavy sigh.<br><br>"Please, if ya see him?...<br>Just tell him to come back home..."`;
    buttons = /*HTML*/`
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
// RANGER INGVAR .............. //
function rangerIngvar() {
    new Audio("./audio/button-click.mp3").play();
    header = "RANGER INGVAR";
    img = "./img/chapter1/crossroad-ranger.jpg";
    paragraph1 = `"Ha! Well I'll be..."<br><br>The man pushes through a grin.<br>You recognize this man, this is Ingvar Geirsson, a local ranger who helps protect the roads from bandits and beasts alike.<br><br>"I wasn't expecting to run into you here, friend! Have a seat why don't you?"<br><br>He pours you a drink<br><br>"I certainly wouldn't mind the company!"`;
    buttons = /*HTML*/`
        <button onclick="rangerIngvarSitDown()">Sit down</button>
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function rangerIngvarSitDown() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `"I hope you'll forgive me if it's been awhile since my last visit to Hjort. Been pretty busy what with all the bandit attacks along the road to Druge"<br><br>He takes a swig of his drink.<br><br>"Ah, so tell me, what brought you all the way out here?"<br><br>`;
    buttons = /*HTML*/`
        <button onclick="rangerIngvarTell()">The Lady of the Mountain</button>
        <button onclick="rangerIngvarDontTell()">Nothing</button>`
    updateScreen()
}
function rangerIngvarTell() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `"The lady? Why on... Well, I'm sure you have your reasons..."<br><br>Concern spreads across his face, his smile still wide though less so than before.<br><br>"I hope you know what you're doing, friend.<br>I've know good men who tried to find the lady for even better reasons."<br><br>He takes a cautious sip from his drink<br><br>"But hey, it was nice to see a friendly face.<br>I hope you find her, I really do. Just remember, there's no shame in turning back... Good luck, friend..."`;
    buttons = /*HTML*/`
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function rangerIngvarDontTell() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `"Hehe, alright, keep your secrets!"<br><br>He snickers to himself.<br><br>"I'm sure it's none of my business anyway.<br>Gods know i've got enough on my plate already."<br><br>He points towards the red haired dwarf by the bar.<br><br>"Imagine an almost endless supply of those guys, but turned to banditry instead... yup. That's what we rangers have to deal with now after the trolls took back Trollhall..."<br><br>He brushes it off.<br><br>"But anyway, it was nice to see a friendly face. Good luck on your travels, friend."`;
    buttons = /*HTML*/`
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
// MYSTERIOUS STRANGER ........ //
function strangerCrossroad() {
    new Audio("./audio/button-click.mp3").play();
    header = "STRANGE MAN";
    img = "./img/chapter1/crossroad-stranger.jpg";
    paragraph1 = `The man eyes you with a sly smile as you approach.<br><br>"You like riddles, stranger?"<br><br>You're caught off guard, but he continues.<br><br>"I find riddles hide many truths.<br>However, recently I've been troubled.<br>You see I'm trying to crack some riddles a friend threw my way... Perhaps you'd be so kind as to indulge me?"`;
    buttons = /*HTML*/`
        <button onclick="strangersRiddle1()">Accept riddle</button>
        <button onclick="crossroadLookAround()">Leave</button>`
    strangerMet = true;
    updateScreen()
}
function strangersRiddle1() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `"Hmm, alright then."<br><br>He clears his throat before reciting the riddle<br><br>"A head of gold, a tail to match.<br>Change I bring, change I am...<br>What am I?"`;
    buttons = /*HTML*/`
        <input id="riddle-answer-1" type="text" placeholder="Write here...">
        <button onclick="strangersRiddleAnswer1()">Answer</button>
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function strangersRiddleAnswer1() {
    new Audio("./audio/button-click.mp3").play();
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
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `He looks over your shoulder as if recalling a lost memory.<br><br>"A rich man wants me, a poor man owns me.<br>If you ate me, you would surely perish...<br>What am I"`;
    buttons = /*HTML*/`
        <input id="riddle-answer-2" type="text" placeholder="Write here...">
        <button onclick="strangersRiddleAnswer2()">Answer</button>
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function strangersRiddleAnswer2() {
    new Audio("./audio/button-click.mp3").play();
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
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `His gaze locks onto your as you readies his last riddle.<br><br>"Why do you seek the Lady of the Mountain?"<br><br>There's an almost playful tone to the question.`;
    buttons = /*HTML*/`
        <button onclick="strangersRiddleAnswer3()">Answer truthfully</button>
        <button onclick="strangersRiddleAnswer3Refuse()">Refuse to answer</button>
        <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function strangersRiddleAnswer3() {
    new Audio("./audio/button-click.mp3").play();
        paragraph1 = `"And there you have it."<br><br>He clasps his hands together.<br>You struggle to interpret his reaction.<br><br>"Thanks for humoring me, stranger."<br><br>He sounds surprisingly genuine,<br>there's a humbleness about him now.<br><br>"Here, take this as thanks,<br>and good luck on your journey."<br><br>He offers you one of his trinkets.`;
        buttons = /*HTML*/`
            <button onclick="strangersRiddleReward()">Accept gift</button>
            <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function strangersRiddleAnswer3Refuse() {
    new Audio("./audio/button-click.mp3").play();
        paragraph1 = `"Well then, suppose I'll just have to keep wondering."<br><br>He looks you over until his gaze meets yours.<br><br>"Come back if you change your mind.<br>Either way i wish you good luck on your journey."<br><br>He gently brushes you off.`;
        buttons = /*HTML*/`
            <button onclick="crossroadLookAround()">Leave</button>`
    updateScreen()
}
function strangersRiddleReward() {
    new Audio("./audio/button-click.mp3").play();
    paragraph1 = `He hands you a glass eye.<br>There seems to be a faint blue mist within it.`;
    buttons = /*HTML*/`
        <button onclick="crossroadLookAround()">Leave</button>`
    backpackArray.push("Glass eye")
    strangerTrinket = true;
updateScreen()
}
function day1Rest() {
    new Audio("./audio/button-click.mp3").play();
    header = "REST";
    img = "./img/blackscreen.jpg";
    paragraph1 = ``;
    buttons = /*HTML*/`
        <button onclick="day2()">Wake up</button>`
    updateScreen()
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// CHAPTER II ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| CHAPTER II //
function day2() {
    new Audio("./audio/button-click.mp3").play();
    img = "./img/chapter1/crossroad-inn-interior.jpg";
    paragraph1 = `You check out of the Crossroad Inn,<br>ready to continue your journey.`;
    buttons = /*HTML*/`
        <button onclick="crossroadLookAround()">Continue</button>`; 
    updateScreen()
}





// wolfCombat()

function wolfCombat() {
    header = "WOLF";
    img = "./img/wolf.jpg";
    paragraph1 = `PLAYER HP: ${playerHP}<br>ENEMY HP: ${enemyHP}<br><br>You encounter a wolf!`;
    buttons = /*HTML*/`
        <button onclick="heavyAttack()">Heavy attack</button>
        <button onclick="quickAttack()">Quick attack</button>
        <button onclick="block()">Block</button>`
    updateScreen()
}