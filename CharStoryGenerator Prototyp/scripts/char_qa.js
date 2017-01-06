//DATA BASE

var placeholders_categories = [
    "object",
    "weapon",
    "mood",
    "place"
];

var init_texts = [
	"Your story begins quite troublesome. There were numerous complications during your birth. It almost cost your mother’s life. She was only able to survive due to the midwives’ experience.",
	
	"<br><br>Around your ninth birthday a friend and you were playing in the forest. Neither of you paid attention on where you were going, thus you ended up lost. \ Having only a few necessities and your #show_object# with you, you had to find a way back home!",
	
	"<br><br>After your 15th birthday a coming of age ceremony was held. Its main purpose was obviously to feast, but it also functioned as a contest with same-aged teens. \ First you contemplated over your most precious belongings including your #show_object#. Afterwards you displayed the skills you acquired during childhood, culminating in your #show_weapon#s handling.",
	
	"<br><br>At the pinnacle of your life you once again looked back. Feeling #show_mood# considering your achievements, still with your iconic #show_weapon# and #show_object#.\ Seeking out new adventures you decide to travel.",
	
	""
];

var options_1 = [
    "Celebrating the successful birth your father arranged a hunt, during which a white deer was killed. Its #get_hide_object# was passed to you.",
	
    "Looking for a way back you found an #get_axe_weapon#. Lumberjacks probably lost it on their way to camp. It didn’t take long for you to find their trail.",
	
	"Among the other children, a girl impressed you with her extraordinary deftness. Challenging her revealed that you were equally strong. \ After taking a few blows off your #show_weapon# she immediately returned them with hers. You were both #get_thrilled_mood# to have found an equal rival.",
	
	"Rumors of great treasure in the #get_desert_place# encourage your wish.",
	
	""
];

var options_2 = [
	"Enduring the harsh circumstances of your birth was beheld as a sign of your volition. Thus, the elders gave your family a #get_talisman_object#.",
	
    "Even though the forest is densely grown you were able to spot a mountain in the distance. \ Remembering the location of a mining city at its root you were able to orient yourself. On the way back home you found an #get_old spear_weapon#.",
	
	"During the following matches an older boy demanded your #show_object# as a bet for your duel. Nevertheless, you accepted as he didn’t seem to be experienced in fights.\ You can still remember how #get_happy_mood# you were when you won.",
	
    "Actually, you reconsider and rather stay near your #get_hometown_place#.",
	
	""
];

var options_3 = [
    "It was already late at night when you were born. According to your peoples’ tradition you were given a #get_bangle_object# and need to wear it on your left arm.",
	
    "While thinking of a way back you got surprised by a storm. Taking shelter under a nearby giant’s grave you found a fascinating #get_silver dagger_weapon# adorned with gemstones.",
	
    "It is common that some participants end up injured while fighting, but you still feel #get_devestated_mood# form the horror of the tragedy that occurred that day.",
	
	"After your coming of age you already traveled far and wide. Never quenching the thirst for wanderlust, you head out to the #get_mountain_place#s hoping to meet destiny’s calling.",
	
	""
];

var options_4 = [
    "A crow was sacrificed to pray for your health. Your sister knotted its feathers into a #get_necklace_object#.",
	
    "Not sure which way to go you simply start to romp around with your friend, causing the local hunters to find you. \ Because of the noise you made all bigger wildlife is gone for the day. All that’s left to hunt was smaller prey with which you and your friend helped. Returning home, you got to keep a #get_small bow_weapon#.",
	
    "Resulting in a lot of attention from other families, because your level of skill was hardly seen. Feeling #get_triumphal_mood# you even dared to challenge full grown warriors, \	who were merciful enough to evaluate your strength without putting you in your place.",
	
	"With a new start in mind you move to the closest harbor and head out to #get_sea_place#.",
	
	""
];

var output_o_1 = [
    "In time the #show_object# became your personal symbol.",
	
    "Arriving at the lumberjacks’ camp one of them recognized you by your #show_object# and offered to bring you back home at the day’s end.\ Until then you helped as much as you could and got to keep the #show_weapon# for that.",
	
    "Years later you can still recall that #show_mood# feeling simply by thinking of her gaze. Sharing the same passion for #show_weapon#s in fights you both realized you're more than rivals.",
	
    "What’s yet to come in the #show_place# remains a mystery.",
	
	""
];

var output_o_2 = [
	"During your whole life, the #show_object# turned out to be a good-luck charm.",
	
    "Thrashing around with the #show_weapon# got you through the thicket quite easily, albeit exhausted.",
	
    "Many duels followed since that day and you’re still just as #show_mood# every time.",
	
	"What’s yet to come at your #show_place# remains a mystery.",
	
	""
];


var output_o_3 = [
    "Even to this day this #show_object# represents your origin.",
	
    "Fearing your parents would simply sell it you kept it hidden. To this day, you still treasure the #show_weapon# and your #show_object#.",
	
    "You lost your best friend that cursed day. Someone stole your family’s #show_object# and chasing the thief he got hit by an arrow on the display grounds.",
	
	"What’s yet to come beyond the #show_place#s remains a mystery.",
	
	""
];

var output_o_4 = [
    "All your life the #show_object# was a reminder of your fortune.",
	
    "Since that day, you trained your skill with the #show_weapon#.",
	
    "It wasn’t the last day you were meant to be #show_mood#. In war as well as in life, being fated for glory.",
	
	"What’s yet to come remains a mystery.",
	
	""
];

