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

// PROLOGUE //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// PROLOGUE //
introduction()
function introduction() {
    header = "-TALES OF VARGEN-";
    img = "/img/startscreen.jpg";
    paragraph1 = `<h3>In the realm of Vargen,</h3>`;
    paragraph2 = `where the echoes of ancient legends intertwine with the whispers of untold secrets,<br>your journey begins...<br><br>The frigid winds of the Northlands carry tales of the Lady of the Mountain, a mysterious hag with the power to grant any wish. She is revered and feared, a source of both hope and dread among the people of this frosty land.<br><br>An urgent need burns in your heart to seek out the enigmatic hag. Perhaps it's a desperate plea for a wish that could change your life, or a quest for answers that have eluded you for too long.<br><br>One thing is certain - the journey to the summit of Mount Mournstone, where the Lady of the Mountain is rumored to dwell, is perilous and shrouded in mystery.<br><br>Few who have ventured there have returned, and those who do are forever changed by the trials they endured...`;
    buttons = /*HTML*/`
    <button onclick="enterBrusVillage()">BEGIN</button>
    `
    updateScreen()
}
function enterBrusVillage() {
    header = "-BRUS VILLAGE-"
    img = "/img/brus.jpg"
    paragraph1 = `As you enter the village of Brus at the foot of Mount Mournstone, you are greeted by a quaint and rustic settlement.<br><br>Timbered cottages with thatched roofs line the cobblestone streets, their windows adorned with flickering candlelight against the encroaching gloom. The air is filled with the scent of burning hearths and the distant murmur of hushed conversations.<br><br>Three options beckon before you:`
    paragraph2 = ``
    buttons = /*HTML*/`
        <button onclick="visitTavern()">Visit the Tavern</button><br>
        <button>Visit the General Store</button><br>
        <button>Visit the Village Elder</button>
        <button>Turn back</button>
    `
    updateScreen()
}
// VISIT THE TAVERN .................................................................... VISIT THE TAVERN
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
function askAboutTheLady() {
    paragraph1 = `As you lean in and inquire about the Lady of the Mountain, you notice a flicker of recognition in the innkeeper's weathered eyes. His distant gaze seems to travel to a place far beyond the tavern's walls, and for a moment, you sense a deep well of untold stories.<br><br>He speaks with a mixture of sorrow and wisdom, sharing hints of a past that he's guarded for so long. His words convey the weight of decades of experience as he discusses his own journey, the Lady of the Mountain, and the mountain's enigmatic nature. His voice carries a somber tone, revealing the complexities of the legend, but he remains elusive about the specifics of his own encounter with the Lady.`
    buttons = /*HTML*/`
        <button onclick="seekAdvice()">Seek advice for the ascent</button><br>
        <button>Ask about his own journey</button><br>
        <button>Leave</button>
    `
    updateScreen()
}
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
// PROLOGUE END //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// PROLOGUE END //

// CHAPTER I ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// CHAPTER I //
function forestPath() {
    header = "-GLOWING TREE TRUNK-"
    img = "/img/treetrunk.jpg"
    paragraph1 = `You opt for the Forest Trail, venturing into the snow-covered woods.<br>Towering trees create a natural canopy overhead, and the world is hushed, save for the soft crunch of your boots in the pristine snow. The path weaves through the ancient forest, where legends of hidden creatures and spectral whispers thrive.<br><br>As you continue your journey, you come across an unusual sight - a large, gnarled tree with a gaping hollow in its trunk. Within the hollow, you spot a shimmering, ethereal light. It pulses softly, casting an eerie glow that dances upon the surrounding snow.`;
    buttons = /*HTML*/`
        <button onclick="approachLight()">Approach the light</button>
        <button>Observe Cautiously</button>
        <button>Bypass the Tree</button>
    `
     updateScreen()
}
function approachLight() {
    paragraph1 = `You cautiously approach the gnarled tree and the enigmatic light within its hollow trunk. As you draw nearer, the glow intensifies, bathing the surrounding area in an ethereal radiance. It's a mesmerizing sight, like a beckoning beacon in the cold, dark forest.<br><br>As you inch closer, you notice the source of the light is a small, glowing orb, hovering just above the hollow's floor. It seems to respond to your presence, pulsing gently in response to your movements.`;
    buttons = /*HTML*/`
        <button onclick="takeTheOrb()">Take the orb</button>
        <button>Speak to the Orb</button>
        <button>Step back</button>
    `
     updateScreen()
}
function takeTheOrb() {
    paragraph1 = `You extend your hand toward the glowing orb, your fingers tingling with anticipation. As your hand makes contact with the radiant sphere, a surge of warmth and energy flows through you. It's as if the orb is a conduit to a realm beyond, a world of ancient mysteries and untold secrets.<br><br>The forest around you seems to come alive with whispers, and the ethereal light dances around your hand, creating mesmerizing patterns in the air. You feel a profound connection with the orb, as though it has chosen you for a purpose that remains veiled in enigma.<br><br>With the orb in your grasp, you sense an unspoken invitation to continue your journey, guided by the mysteries it holds.`;
    buttons = /*HTML*/`
        <button onclick="lonelyWolf()">Continue</button>
    `
     updateScreen()
}
function lonelyWolf() {
    header = "-A LONELY WOLF-"
    img = "/img/wolf.jpg"
    paragraph1 = `As you trudge deeper into the snow-clad forest, a sudden movement captures your attention. Against the pristine, white canvas of the landscape, a lone black wolf emerges. Its dark fur stands in stark contrast to the snowy surroundings, and its eyes gleam with hunger and predatory intent.<br><br>The wolf's demeanor leaves little room for doubt. It appears hostile, its gaze locked onto you with a hunger that sends a shiver down your spine.`;
    buttons = /*HTML*/`
        <button onclick="fightTheWolf()">Fight</button>
        <button>Offer food</button>
        <button>Run away</button>
    `
     updateScreen()
}
function fightTheWolf() {
    paragraph1 = `You decide to confront the menacing black wolf head-on, bracing yourself for a fierce battle. With adrenaline pumping through your veins, you draw your weapon and prepare to defend yourself.<br><br>The wolf lunges at you with lightning speed, teeth bared and claws slashing through the air. The battle that ensues is brutal and intense, a clash of survival instincts between predator and prey. You trade blows with the wolf, each strike taking its toll on both you and the formidable beast.<br><br>After a relentless struggle, your determination and combat skills prevail. You manage to land a decisive blow, causing it to whimper and retreat into the forest. The fight has taken its toll on you as well, leaving you battered and bruised, with deep scratches and bite marks as souvenirs of the fierce encounter.`;
    buttons = /*HTML*/`
        <button onclick="forestCamp()">Continue</button>
    `
     updateScreen()
}
function forestCamp() {
    header = "-FOREST CAMP-"
    img = "/img/forest-camp.jpg"
    paragraph1 = `As night falls over the snow-covered forest, the necessity of setting up camp becomes evident. You quickly gather what's available to create a makeshift campfire, providing not only much-needed warmth but also a sense of security in this chilling wilderness. Sitting by the flickering flames, the crackling fire and the distant hoot of an owl are your sole companions in this serene, dark world.<br><br>Your bedroll offers a modest comfort as you lay down to rest. Thoughts whirl in your mind, a tumultuous sea of questions and possibilities. With the enigmatic Lady of the Mountain on your mind and the forest's mysteries surrounding you, you drift into a deep, uncertain sleep, aware that the journey ahead holds both peril and promise.`;
    buttons = /*HTML*/`
        <button onclick="forestNextDay()">Sleep</button>
    `
     updateScreen()
}
function forestNextDay() {
    header = "-THE NEXT DAY-"
    img = "/img/forest-path.jpg"
    paragraph1 = `As dawn breaks and you wake from your restless slumber, your journey must press on through the snow-covered forest. The path ahead stretches into an unknown world, its secrets veiled in the frosty air. The forest, bathed in predawn light, invites you deeper into its heart, where ancient trees stand sentinel and the earth seems to whisper untold stories.<br><br>You gather your belongings, each step in the snow leaving a faint imprint of your presence. With the wilderness all around you, you contemplate your next move, aware that every decision shapes the course of your quest. The frigid air stings your cheeks as you breathe deeply, embracing the challenges and mysteries that lie ahead.`;
    buttons = /*HTML*/`
        <button onclick="runestoneCircle()">Continue</button>
        <button>Turn back</button>
    `
     updateScreen()
}
function runestoneCircle() {
    header = "-THE RUNESTONES-"
    img = "/img/runestones.jpg"
    paragraph1 = `As you journey deeper into the snow-covered forest, the tranquility of the woods is momentarily shattered by an entrancing spectacle. In a small, secluded clearing, your gaze fixates on a circle of massive runestones meticulously arranged. Each colossal stone is etched with intricate runes that emit a gentle, otherworldly luminescence.<br><br>With caution guiding your approach, you become acutely aware of a presence nearby. Emerging from the forest's dusky veil, a solitary figure materializes, draped in a weathered cloak that conceals their identity beneath a deep hood. This enigmatic wanderer, akin to your own adventurous spirit, is deeply engrossed in a captivating and enigmatic ritual.`;
    buttons = /*HTML*/`
        <button onclick="approachCloakedFigure()">Approach Peacefully</button>
        <button>Interrupt the Ritual</button>
        <button>Observe in Silence</button>
    `
     updateScreen()
}
function approachCloakedFigure() {
    header = "-NILS WAYMAKER-"
    img = "/img/cloaked-figure.jpg"
    paragraph1 = `With a peaceful and non-threatening demeanor, you cautiously approach the hooded figure engaged in the mysterious ritual by the runestones. Your footsteps are careful, and your hands remain visible to signal your intention of no harm.<br><br>As you draw near, the figure pauses their ritual, and you can feel their gaze upon you. The atmosphere crackles with a sense of tension as you exchange a few quiet words. It becomes apparent that the figure is a guardian of these ancient runestones.<br><br>Their longbow, once a symbol of potential threat, is now lowered, and they seem open to a peaceful interaction. You sense that they may have valuable insights to share, but you also understand the importance of proceeding with caution.`;
    buttons = /*HTML*/`
        <button onclick="askAboutRunestones()">Ask about the runestones</button>
        <button>Seek guidance</button>
        <button>Gift a token</button>
    `
     updateScreen()
}
function askAboutRunestones() {
    paragraph1 = `With genuine curiosity, you inquire about the runestones, and Nils Waymaker, the hooded figure before you, acknowledges your question with a soft nod. He proceeds to unveil the secrets of these ancient stones, revealing that they are the runestones of his noble ancestors.<br><br>"These runestones," Nils begins, "are more than mere stones; they are the legacy of my forebears, the Waymakers. The name 'Waymaker' was earned by generations of my ancestors who dedicated their lives to threading the untraveled wilds of these lands. Where once lay dense, uncharted forests, they forged pathways for others to follow, creating the very roads that now connect our towns and villages."`;
    buttons = /*HTML*/`
        <button onclick="askAboutRunestones2()">Continue</button>
    `
     updateScreen()
}
function askAboutRunestones2() {
    paragraph1 = `As he speaks, Nils gestures towards the runestones, each one bearing chiseled inscriptions that narrate the remarkable achievements of his lineage. The runes recount tales of bravery, exploration, and the unyielding spirit of those who carved a way through the untamed wilderness.<br><br>Nils' words carry a sense of pride and reverence for his family's legacy, and you can't help but admire the profound impact their endeavors had on the land. His ancestors' achievements continue to shape the world you now journey through, as their paths have paved the way for your own quest to find the Lady of the Mountain.`;
    buttons = /*HTML*/`
        <button onclick="askNilsAboutTheLady()">Ask about the Lady of the Mountain</button>
        <button>Ask about his own travels</button>
        <button>Ask why he is here</button>
    `
     updateScreen()
}
function askNilsAboutTheLady() {
    paragraph1 = `With a thoughtful expression, you turn your attention toward Nils Waymaker and inquire about the Lady of the Mountain. Nils, with a knowing look, nods in understanding.<br><br>"Ah, the Lady of the Mountain," he begins. "I've never made the journey myself, one of my ancestors, a brave soul, once ventured up toward the summit. They spoke of a network of caves that could provide shelter from the relentless storms that lash the mountainside. A refuge on the path to the Lady's domain, you might say."<br><br>His voice carries a sense of reverence as he continues, "But be warned, for the caves have their own guardian—a fearsome ice troll that dwells within. The tales tell of my ancestor facing this creature and emerging victorious, wielding fire against the troll's icy fury." Nils' gaze seems to drift momentarily as he reflects on the ancient story.<br><br>"Remember," he adds with a meaningful look, "the destination has no meaning without the journey itself."`;
    buttons = /*HTML*/`
        <button onclick="midPoint()">Leave</button>
    `
     updateScreen()
}
// CHAPTER I END ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// CHAPTER I END

// CHAPTER II /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// CHAPTER II
function midPoint() {
    header = "-UNDER THE SUMMIT-"
    img = "/img/mid-point.jpg"
    paragraph1 = `You take your leave and press onward, drawing ever closer to the summit of Mount Mournstone. The air grows colder, and the landscape more unforgiving.<br><br>As you ascend, you notice the ominous signs of a storm brewing on the horizon. Dark clouds gather, and the wind carries a bitter chill. Ahead of you, the mountain presents three distinct paths, each cloaked in its own allure`;
    buttons = /*HTML*/`
        <button onclick="enterCave()">Enter the cave</button>
        <button>Follow the path to the summit</button>
        <button>Climb towards the summit</button>
    `
     updateScreen()
}
function enterCave() {
    header = "-ICE CAVE ENTRANCE-"
    img = "/img/cave-entrance.jpg"
    paragraph1 = `With unwavering determination in your heart and the storm's impending fury above, you decide to seek refuge within the ominous maw of the cave. As you step into its frigid darkness, the temperature drops sharply, and the sensation of crisp, icy air fills your lungs. The narrow entrance gradually widens, unveiling the secrets hidden within.<br><br>Dim, ethereal light filters through from the entrance, casting eerie, azure-hued shadows upon the icy cave walls. Stalactites resembling crystalline daggers hang from above, their icy formations glistening with an otherworldly beauty. The rocky floor, covered in a frosty glaze, crunches softly beneath your insulated boots. Water drips from unseen sources, forming small, delicate icicles and creating tiny pools in the depressions of the uneven, frozen ground.`
    buttons = /*HTML*/`
        <button onclick="caveCrossroad()">Continue</button>
    `
     updateScreen()
}
function caveCrossroad() {
    header = "-ICE CAVE CROSSROAD-"
    img = "/img/cave-crossroad.jpg"
    paragraph1 = `As you venture deeper into the cave, the rhythmic, almost melodic dripping sound you initially heard grows louder, resonating through the icy chamber. It leads you to a crystal-clear underground stream flowing gently through the cavern, its waters shimmering like liquid sapphires. The soothing, ethereal quality of the stream contrasts starkly with the unforgiving conditions outside, providing a sense of tranquility within the heart of this frozen realm.<br><br>Ahead, you find yourself at a junction within the ice cave, facing two distinct routes: one ascends along the frost-kissed ledge, while the other descends into a shadowed abyss. The decision of which path to take weighs on your mind as you ponder the mysteries and potential dangers that lie ahead in this subterranean world of ice and shadow.`
    buttons = /*HTML*/`
        <button onclick="followTheLedge()">Follow the ledge</button>
        <button>Descend into the abyss</button>
    `
     updateScreen()
}
function followTheLedge() {
    header = "-ICE CAVE TUNNEL-"
    img = "/img/cave-tunnel.jpg"
    paragraph1 = `You navigate the narrow ledge with steady steps and unwavering focus. Despite its treacherous appearance, you manage to make it across unscathed. As you leave the precarious pathway behind, the cavern's dimensions change once again.<br><br>Your journey forward becomes an arduous task as the passage narrows to the point where you must maneuver sideways, your body pressed tightly between the icy walls.  As you continue to traverse the tight passage, your progress is slow and deliberate. The sensation of confinement is inescapable, and it feels as though the very mountain itself is conspiring to test your resolve.<br><br>The further you press on, the more the tunnel tightens, threatening to impede your journey entirely.`
    buttons = /*HTML*/`
        <button onclick="caveTunnel()">Continue</button>
    `
     updateScreen()
}
function caveTunnel() {
    header = "-ICE CAVE TUNNEL-"
    img = "/img/cave-tunnel.jpg"
    paragraph1 = `As you inch forward through the increasingly narrow passage, the tension in the air is palpable. It's as if the very mountain itself has grown restless, ready to unleash its fury. Suddenly, with a shuddering violence that rocks your senses, the cave begins to convulse.<br><br>The walls close in tighter, and jagged rocks dislodge from above, pelting the ground with a cacophony of sharp impacts. Dust and ice particles fill the air, obscuring your vision. Your heart pounds in your chest as you desperately search for a path forward amidst the chaos.<br><br>Moments stretch into eternity as you grapple with your decision. The deafening roar of the quake drowns out all thought, and the sensation of entrapment intensifies. Each second feels like an eternity as you're pressed further into the suffocating tunnel.`
    buttons = /*HTML*/`
        <button onclick="caveTunnelPressOn()">Press on</button>
        <button>Try to retreat</button>
        <button>Stay put</button>
    `
     updateScreen()
}
function caveTunnelPressOn() {
    header = "-ICE CAVE LAIR-"
    img = "/img/ice-cave-lair.jpg"
    paragraph1 = `As you press on, escaping the deadly tremors that threatened to crush you within the narrowing passage, you emerge into a nightmarish scene. The cavernous den before you is littered with the bones of unfortunate creatures that met their grisly end here. The skeletal remains tell a tale of terror, and dread courses through your veins as you realize the gruesome truth:<br>this is the lair of something monstrous.<br><br>Eerie howling echoes through the cavern, sending chills down your spine. The deep reverberations of colossal footsteps approach from deeper within the cave, rattling the very ground beneath your feet. Whatever dwells here is not only massive but also probably the one responsible for the violent quake that nearly sealed your fate in the tunnel.`
    buttons = /*HTML*/`
        <button onclick="trollLightTorch()">Light a torch</button>
        <button>Draw your weapon</button>
        <button>Hide</button>
    `
     updateScreen()
}
function trollLightTorch() {
    header = "-ICE CAVE LAIR-"
    img = "/img/ice-troll.jpg"
    paragraph1 = `You retrieve a torch from your belongings and ignite it. As the flickering flames dance to life, the once-shrouded den is bathed in a warm, orange glow. In that revealing light, you behold the behemoth responsible for the tumultuous quake.<br><br>Before you stands an ice troll of staggering proportions. Towering high, it dwarfs any living creature you've ever seen, its bluish-white, frigid skin glistening in the torchlight. The troll's gnarled and muscular form exudes an intimidating aura, but there's a hint of vulnerability in its glowing, ice-blue eyes. It seems this massive creature is as much a prisoner of this desolate cave as you are.<br><br>With the torch burning fiercely, you also notice the troll's apparent discomfort as it recoils from the radiant heat. Ice trolls are known to be vulnerable to fire, and the flames you now wield give you a distinct advantage. The troll emits a deep, guttural growl, its eyes narrowing in response to the fiery torment.`
    buttons = /*HTML*/`
        <button onclick="caveLairHole()">Leave the troll</button>
        <button>Extinguish the torch</button>
    `
     updateScreen()
}
function caveLairHole() {
    header = "-ICE CAVE LAIR-"
    img = "/img/ice-lair-hole.jpg"
    paragraph1 = `With the torch held high, its flames casting long, wavering shadows across the cavern's walls, you keep the menacing ice troll at bay. Its guttural growls continue, echoing through the cavern, as it backs away, its discomfort intensifying in the presence of fire.<br><br>As you cautiously survey your surroundings, searching for a means of escape from this dire confrontation, your eyes lock onto a narrow opening in the cave's wall. It's just large enough for a person to squeeze through but far too small for the hulking troll to follow.<br><br>Beyond the fissure, you catch a glimpse of daylight, a glimmer of hope amid the surrounding darkness. Determination fuels your actions, and you decide to seize this opportunity. The treacherous climb through the hole awaits you, promising escape from the clutches of the ice troll and the perilous depths of the cave. With a deep breath, you step closer to the fissure, preparing to make your ascent and continue your journey through the mountain's heart.`
    buttons = /*HTML*/`
        <button onclick="caveLairHoleExit()">Continue</button>
    `
     updateScreen()
}
function caveLairHoleExit() {
    header = "-ICE CAVE EXIT-"
    img = "/img/cave-hole-exit.jpg"
    paragraph1 = `Emerging from the narrow fissure, you find yourself on the other side, the chilly mountain air kissing your skin. Before you, the breathtaking vista of the summit unfolds. The peak of Mount Mournstone rises majestically against the backdrop of the roiling storm clouds that churn below, casting an awe-inspiring and ominous presence.<br><br>With every step forward, you draw closer to your ultimate destination, where the enigmatic Lady of the Mountain is said to dwell. The journey through the treacherous cave and the encounter with the ice troll now stand as trials surmounted, marking your resilience and determination.<br><br>As you stand on the precipice, your heart surges with a mix of anticipation and uncertainty. The Lady of the Mountain awaits, her mysteries and challenges hidden within the storm-shrouded heights. Your quest is soon over, and the summit holds the key to the answers you seek.`
    buttons = /*HTML*/`
        <button onclick="nearingSummit()">Continue</button>
    `
     updateScreen()
}
// CHAPTER II END /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// CHAPTER II END

// EPILOGUE /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// EPILOGUE
function nearingSummit() {
    header = "-THE SUMMIT-"
    img = "/img/near-summit.jpg"
    paragraph1 = `As your journey draws to its culmination, you stand upon the summit of Mount Mournstone, taking in the panoramic view of the world below. You reflection upon choices made, revealing the essence of your character.<br><br>You accepted the barkeep's heartfelt plea for help, a testament to your compassion. When duty called, you heeded it, offering your aid to a desperate father.<br><br>Approaching the glowing orb nestled within the tree trunk, you claimed it for yourself, revealing a curiosity and thirst for the unknown. This choice has marked you as an adventurer at heart, willing to seize opportunities that others might shun.<br><br>In the face of adversity, you never flinched. Even when a hungry wolf threatened your path, you confronted it head-on, displaying unwavering resolve and a fierce determination to survive.`
    buttons = /*HTML*/`
        <button onclick="nearingSummit2()">Continue</button>
    `
     updateScreen()
}
function nearingSummit2() {
    paragraph1 = `Trusting a stranger in the woods, you showcased a willingness to see the good in people, believing in the power of cooperation amidst the unknown.<br><br>You journeyed onward, unyielding even when the very walls surrounding you crumbled under the quake's violent assault. This resilience tells of a spirit that refuses to bow to adversity, no matter how insurmountable it may seem.<br><br>Finally, your unwavering refusal to shed the blood of those at your mercy, be they man or monster, shines a light on your humanity. You've demonstrated that beneath the mantle of a warrior lies a heart that values life and mercy above all else.<br><br>As you stand at the peak, the world stretches out below, and the Lady of the Mountain awaits.<br><br>Every choice you've made has forged you into one of courage, curiosity, and compassion. Now, as you embark on the final leg of your journey, your fate awaits.`
    buttons = /*HTML*/`
        <button onclick="theSummit()">Continue</button>
    `
     updateScreen()
}
function theSummit() {
    img = "/img/summit.jpg"
    paragraph1 = `As you finally reach the summit of Mount Mournstone, your breaths come out in quick bursts, and your heart races with anticipation. You stand at the culmination of your arduous journey, expecting to find the Lady of the Mountain awaiting your arrival.<br><br>Yet, there is nothing but silence. The wind whispers through your hair, and the world stretches out before you, revealing the vast expanse of mountains and the boundless ocean beyond. Birds soar freely overhead, their calls filling the air.<br><br>As you stand there, breathing in the crisp mountain air, you feel a deep connection with yourself and the choices you made throughout your journey. The obstacles you faced, the people you encountered, and the challenges you overcame have all contributed to your growth.<br><br>You realize that sometimes, the absence of what we seek reveals something more profound.<br><br>It's a moment of clarity, a recognition that the path you've traveled has led you to a deeper understanding of who you are and what truly matters.`
    buttons = /*HTML*/`
        <button onclick="theEnd()">TURN BACK</button>
    `
     updateScreen()
}
function theEnd() {
    header = "-THE END-"
    img = "/img/startscreen.jpg"
    paragraph1 = `THANKS FOR PLAYING!<br><br>-John-`
    buttons = ""
     updateScreen()
}
// EPILOGUE END /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// EPILOGUE END