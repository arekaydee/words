//Feel free to change these words:
var nouns = ["Johnson","Claudius","Dmitri","Louis","Vito","Edwin","Gus","Tabitha","Delila",
"Harold","Helga","Archibald","Nancy","Nevin","Sigfried","Donna","Paul","Jeanie","Kimmy"];
var plural = ["Engines","Bolognas","Lasagnas", "Silence", "Umbrellas","Lab Coats",
"Pilots", "Artichokes","Stop Signs","Powerballs","Macaroni","Jackets",
"Gadgets","Alligators","Wishbones","Dishes","Spoons","Bees"];
var adjectives = ["Smelly", "Beligerant", "Cackling", "Nefarious", "Undefined",
"Squeaky","Muggy","Faithful","Organized","Deranged"];

var color = random(255);

function setup() {
	createCanvas(windowWidth, windowHeight);

	randNou = floor(random(0,nouns.length));
	randAdj = floor(random(0,adjectives.length));
	randPlu = floor(random(0,plural.length));


}

function draw(){
	background("black");
	noStroke();
	fill("white");
	rect(102,335,75,75);


	textSize(100);
	fill("white");
	text(nouns[randNou],100,300);
	text(adjectives[randAdj],200,410);

	textSize(200)
	text(plural[randPlu],90,595);

	fill("black");
	textSize(30);
	textStyle(BOLD);
	text("and\nthe",113,365);
}
