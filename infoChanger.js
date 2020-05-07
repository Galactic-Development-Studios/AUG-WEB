var gameTitle = document.getElementById("gameHere");
var gameGenre = document.getElementById("genreHere");
var gameDev = document.getElementById("developerHere");
var gamePub = document.getElementById("publisherHere");
var bodyHeader = document.getElementById("gamePreviewItemBodyHeader");
var text1 = document.getElementById("gamePreviewItemBodyParagraph1");
var image1 = document.getElementById("gamePreviewItemBodyImage1");
var text2 = document.getElementById("gamePreviewItemBodyParagraph2");
var image2 = document.getElementById("gamePreviewItemBodyImage2");
var text3 = document.getElementById("gamePreviewItemBodyParagraph3");
var video = document.getElementById("gamePreviewItemBodyVideo");
var videoSource = document.getElementById("gamePreviewItemBodyVideoSource");

function openGamePreviewFL(){
	gameTitle.innerHTML = "Flashing Lights";
	gameGenre.innerHTML = "Simulation";
	gameDev.innerHTML = "Nils Jakrins";
	gamePub.innerHTML = "Excalibur Games";
	text1.innerHTML = "Flashing Lights is a game which allows you to become a first responder. You can explain a large map, with friends or by your self. You can choose from a wide variety of vehicles and characters. Responding to a variety of calls.";
	image1.src = "assets/images/previews/FL/1.jpg";
	text2.innerHTML = "Enrol with the police, emergency medical services or fire department and take on missions unique to each service in an open world. Engage in desperate car chases, diagnose life-threatening injuries, and put out lethal fires! Each department has its own vehicles and equipment for you to operate while on duty. Play in single player, or work together with friends in online multiplayer to tackle incidents across a shared world.";
	image2.src = "assets/images/previews/FL/3.jpg";
	text3.innerHTML = "This game was at the roots of Aussie Games (formerly AFLRP), this game has great support and modding, and is officially endorsed by Aussie Games.";
	video.src = "assets/videos/previews/FL.mp4";
}
function openGamePreviewGMOD(){
	gameTitle.innerHTML = "Garry's Mod";
	gameGenre.innerHTML = "Sandbox";
	gameDev.innerHTML = "Facepunch Studios";
	gamePub.innerHTML = "Valve";
	text1.innerHTML = "Garry's Mod is a physics sandbox. There aren't any predefined aims or goals. We give you the tools and leave you to play.";
	image1.src = "assets/images/previews/GMOD/1.jpg";
	text2.innerHTML = "You spawn objects and weld them together to create your own contraptions - whether that's a car, a rocket, a catapult or something that doesn't have a name yet - that's up to you. You can do it offline, or join the thousands of players who play online each day.";
	image2.src = "assets/images/previews/GMOD/2.jpg";
	text3.innerHTML = "If you're not too great at construction - don't worry! You can place a variety of characters in silly positions. But if you want to do more, we have the means.";
	video.src = "assets/videos/previews/GMOD.mp4";
}
function openGamePreviewIF(){
	gameTitle.innerHTML = "Infinite Flight";
	gameGenre.innerHTML = "Simulation";
	gameDev.innerHTML = "Flight Development Studios";
	gamePub.innerHTML = "Infinite Flight LLC";
	text1.innerHTML = "Flight Simulation in the palm of your hand. Infinite Flight offers the most comprehensive experience on mobile devices, whether you are a curious novice or a decorated pilot.";
	image1.src = "assets/images/previews/IF/1.jpg"
	text2.innerHTML = "Infinite Flight offers the most comprehensive flight simulation experience on mobile devices, whether you are a curious novice or a decorated pilot. Explore high definition scenery in regions from around the world with our diverse inventory of detailed aircraft, tailoring each flight by choosing your time of day, weather conditions, and aircraft weight configuration.";
	image2.src = "assets/images/previews/IF/2.jpg";
	text3.innerHTML = "";
	video.src = "assets/videos/previews/IF.mp4";
}
function openGamePreviewKSP(){
	gameTitle.innerHTML = "Kerbal Space Program";
	gameGenre.innerHTML = "Space";
	gameDev.innerHTML = "Squad";
	gamePub.innerHTML = "Private Division";
	text1.innerHTML = "In Kerbal Space Program, take charge of the space program for the alien race known as the Kerbals. You have access to an array of parts to assemble fully-functional spacecraft that fly (or don’t) based on realistic aerodynamic and orbital physics. Launch your Kerbal crew into orbit and beyond (while keeping them alive) to explore moons and planets in the Kerbol solar system, constructing bases and space stations to expand the reach of your expedition.";
	image1.src = "assets/images/previews/KSP/1.jpg";
	text2.innerHTML = "Kerbal Space Program features three gameplay modes. In Science Mode, perform space experiments to unlock new technology and advance the knowledge of Kerbalkind. In Career Mode, oversee every aspect of the space program, including construction, strategy, funding, upgrades, and more. In Sandbox, you are free to build any spacecraft you can think of, with all parts and technology in the game.";
	image2.src = "assets/images/previews/KSP/2.jpg";
	text3.innerHTML = "KSP has been widely renowned for its truely groundbreaking game, that invites people to learn complicated topics in a funny, and friendly way.";
	video.src = "assets/videos/previews/KSP.mp4";
}
function openGamePreviewMC(){
	gameTitle.innerHTML = "Minecraft";
	gameGenre.innerHTML = "Sandbox";
	gameDev.innerHTML = "Mojang";
	gamePub.innerHTML = "Xbox Game Studios";
	text1.innerHTML = "Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape.";
	image1.src = "assets/images/previews/MC/1.png";
	text2.innerHTML = "In Minecraft, players explore a blocky, procedurally-generated 3D world, and may discover and extract raw materials, craft tools, build structures or earthworks, and depending on game mode, can fight computer-controlled mobs', as well as either cooperate with or compete against other players in the same world. These modes include a survival mode, in which players must acquire resources to build the world and maintain health, and a creative mode, where players have unlimited resources. Players can modify the game to create new gameplay mechanics, items, and assets.";
	image2.src = "assets/images/previews/MC/2.png";
	text3.innerHTML = "Minecraft is a sandbox video game developed by Mojang. Minecraft was created by Markus 'Notch' Persson in the Java programming language and was released as a public alpha for personal computers in 2009 before officially releasing in November 2011, with Jens Bergensten taking over development around then. It has since been ported to various platforms and is the best-selling video game of all time, with over 180 million copies sold across all platforms and over 112 million monthly active players by 2019.";
	video.src = "assets/videos/previews/MC.mp4";
}

function openGamePreviewP2(){
	gameTitle.innerHTML = "Payday 2";
	gameGenre.innerHTML = "First Person Shooter";
	gameDev.innerHTML = "Overkill Software";
	gamePub.innerHTML = "505 Games";
	text1.innerHTML = "Payday 2 is a cooperative first-person shooter video game developed by Overkill Software and published by 505 Games. The game is a sequel to 2011's Payday: The Heist. It was released in August 2013 for Windows, PlayStation 3 and Xbox 360. An improved version of the game, subtitled Crimewave Edition, was released for PlayStation 4 and Xbox One in June 2015. A version for the Nintendo Switch was released in February 2018.";
	image1.src = "assets/images/previews/P2/1.jpg";
	text2.innerHTML = "Two years after the events of the previous game, the Payday gang comes to the Washington metropolitan area to perform another heisting spree. The player takes control of one of the gang's twenty one members and can perform heists alone, or with up to three teammates. The player can participate in a variety of heists, including but not limited to robberies of banks, shops and armored cars, and producing and distributing narcotics. The game differs on the previous by allowing much more customization of the player (aesthetically and gameplay-wise), somewhat improved graphical interface and experience, more variety and playability in levels, and has reworked stealth mechanics.";
	image2.src = "assets/images/previews/P2/2.jpg";
	text3.innerHTML = "";
	video.src = "assets/videos/previews/P2.mp4";
}
function openGamePreviewRB(){
	gameTitle.innerHTML = "Roblox";
	gameGenre.innerHTML = "Multiplayer";
	gameDev.innerHTML = "Roblox Corporation";
	gamePub.innerHTML = "Roblox Corporation";
	text1.innerHTML = "Roblox is an online game platform and game creation system that allows users to design their own games and play a wide variety of different games created by other users. The platform hosts user-created games and virtual worlds covering a wide variety of genres, from traditional racing and role-playing games to simulations and obstacle courses. As of August 2019, Roblox has over 100 million monthly active users.";
	image1.src = "assets/images/previews/RB/1.jpg";
	text2.innerHTML = "Roblox is a game creation platform which allows players to create their own games using its proprietary engine, Roblox Studio. Games are coded under an Object Oriented Programming system utilizing the programming language Lua to manipulate the environment of the game. Users are able to create game passes, which are purchasable content through one-time purchases, as well as microtransactions through developer products. Developers on the site exchange Robux earned from various products on their games into real world currency through the Developer Exchange system. A percentage of the revenue from purchases is split between the developer and Roblox Corporation.";
	image2.src = "assets/images/previews/RB/2.jpg";
	text3.innerHTML = "Roblox is a global platform where millions of people gather together every day to imagine, create, and share experiences with each other in immersive, user-generated 3D worlds. The types of gameplay on Roblox are just as limitless as the imagination of the creators themselves.";
	video.src = "assets/videos/previews/RB.mp4";
}
function openGamePreviewSM(){
	gameTitle.innerHTML = "Surviving Mars";
	gameGenre.innerHTML = "Simulation";
	gameDev.innerHTML = "Haemimont Games";
	gamePub.innerHTML = "Paradox Interactive";
	text1.innerHTML = "Welcome Home! The time has come to stake your claim on the Red Planet and build the first functioning human colonies on Mars! All you need are supplies, oxygen, decades of training, experience with sandstorms, and a can-do attitude to discover the purpose of those weird black cubes that appeared out of nowhere. With a bit of sprucing up, this place is going to be awesome!";
	image1.src = "assets/images/previews/SM/1.jpg";
	text2.innerHTML = "Surviving Mars is a sci-fi city builder all about colonizing Mars and surviving the process. Choose a space agency for resources and financial support before determining a location for your colony. Build domes and infrastructure, research new possibilities and utilize drones to unlock more elaborate ways to shape and expand your settlement. Cultivate your own food, mine minerals or just relax by the bar after a hard day’s work. Most important of all, though, is keeping your colonists alive. Not an easy task on a strange new planet.";
	image2.src = "assets/images/previews/SM/2.jpg";
	text3.innerHTML = "Surving Mars has been renowned for it's wonderful music and storyline. Allowing players to build, manage and overcome issues.";
	video.src = "assets/videos/previews/SM.mp4";
}
function openGamePreviewTF(){
	gameTitle.innerHTML = "Team Fortress";
	gameGenre.innerHTML = "Multiplayer";
	gameDev.innerHTML = "Valve";
	gamePub.innerHTML = "Valve";
	text1.innerHTML = "One of the most popular online action games of all time, Team Fortress 2 delivers constant free updates—new game modes, maps, equipment and, most importantly, hats. Nine distinct classes provide a broad range of tactical abilities and personalities, and lend themselves to a variety of player skills.";
	image1.src = "assets/images/previews/TF/1.jpg";
	text2.innerHTML = "No matter what your style and experience, we’ve got a character for you. Detailed training and offline practice modes will help you hone your skills before jumping into one of TF2’s many game modes, including Capture the Flag, Control Point, Payload, Arena, King of the Hill and more.";
	image2.src = "assets/images/previews/TF/2.jpg";
	text3.innerHTML = "There are hundreds of weapons, hats and more to collect, craft, buy and trade. Tweak your favorite class to suit your gameplay style and personal taste. You don’t need to pay to win—virtually all of the items in the Mann Co. Store can also be found in-game.";
	video.src = "assets/videos/previews/TF.mp4";
}