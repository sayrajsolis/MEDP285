var photo_items = [
	{
		title: 'Computer Week 1',
		imageFile: 'desk.jpg',
		description: 'My computer looks different every day',
		broadSpecific: 1 //if broad 1, else -1
	},
	{
		title:'Computer Week 2',
		imageFile: 'desk1.jpg',
		description: 'My computer as of recently',
		broadSpecific:1
	},
	{
		title: 'Arduino Birds-Eye',
		imageFile: 'arduino.jpg',
		description: 'My small computer',
		broadSpecific: -1
	},
	{
		title: 'Arduino Bugs-Eye',
		imageFile: 'arduino1.jpg',
		description: 'My big computer',
		broadSpecific: -1
	},
	{
		title: 'My Wall',
		imageFile: 'wall.jpg',
		description:'I dont have my own room, but I have my own wall',
		broadSpecific: 1
	},
	{
		title:'Nightstand',
		imageFile: 'nightstand.jpg',
		description: 'A cheap shrine for my collectables',
		broadSpecific: -1
	},
	{
		title: 'Phantom of The Opera Mask',
		imageFile: 'mask.jpg',
		description: 'My favorite movie and Broadway Musical of all time.',
		broadSpecific: -1
	},
	{
		title: 'My President',
		imageFile: 'bernie.jpg',
		description: 'Feeling the bern since 2016.',
		broadSpecific: -1
	},
	{
		title: 'Aggretsuko',
		imageFile: 'aggretsuko.jpg',
		description: 'Surprisingly not a kids show.',
		broadSpecific: -1
	},
	{
		title: 'Hawaii Plus',
		imageFile: 'hawaii.jpg',
		description: 'A kawaii souvenir from Hawaii',
		broadSpecific: -1
	},
	{
		title: 'Sticky Sketches',
		imageFile: 'sketches.jpg',
		description: 'Really bad skecthes during quarantine',
		broadSpecific: 1
	},
];


//Select a single container to shove ALL of it in one. (no need for querySelectorAll)
var grid = document.querySelector('.grid');

//Main function that generates content when page loads, when click button or filter
function generate(items) {
	grid.innerHTML = ''; 	//clear existing items first
	
	items.forEach(item => {	//we use += inside a loop to ADD every item one after another
		grid.innerHTML += `
		<div class="photo_items">
			<img src="img/${item.imageFile}" class="item"/>
			<h5 item_title>${item.title}</h5>
			<p class="description">${item.description}</p>
		</div>
		`;
	});
}

generate(photo_items); //run function on page load, loading the full array

function filterContent(){
	var value = +event.target.value; //get value from HTML select dropdown and convert to number with "+"
	var filteredItems = photo_items.filter(item => {
		return item.broadSpecific == value;
	});
	generate(filteredItems);// run function to generate content with new filteredItems array
}

	function randomize() {
  // array shuffle code credit: https://css-tricks.com/snippets/javascript/shuffle-array/
  // don't worry about why this works, it's complicated. We are creating a new array based on the original organizedArchiveItems
  // but the { objects } are in a different order...like shuffling a deck of cards
  var randomItems = photo_items.sort(() => 0.5 - Math.random());
  generate(randomItems); // run function to generate content with new randomItems array 
}


