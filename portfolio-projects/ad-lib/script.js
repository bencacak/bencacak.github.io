let story = document.getElementById('story');
    //let story = document.querySelector('#story');
	
    function makeStory() {	

    	let character = [],
		    object = [],
		    place = [],
		    verb = [];
	
	    character[0] = prompt('Name a man.', 'Will Luers').toLowerCase(),
		object[0] = prompt('Name an object.', 'magic stone').toLowerCase(),
	    place[0] = prompt('Name a generic place.','old road').toLowerCase(),
	    verb [0] = prompt('Name an action',  'walk').toLowerCase(),
		character[1] = prompt('Name a character\'s name.', 'Meredith Palmer').toLowerCase(),
		object[1] = prompt('Another object?', 'regular stone' ).toLowerCase(),
		place[1] = prompt('Name a place.','Chicago').toLowerCase();

		story.innerHTML = `Once upon a time, a woman named <span style="text-transform:capitalize;">${character[1]}</span> made their way to <span style="text-transform:capitalize;">${character[0]}</span> in a crowd of people inside a building on the ${place[0]}. <br><br> \"Hello, my name is <span style="text-transform:capitalize;">${character[1]}</span>,\" said <span style="text-transform:capitalize;">${character[1]}</span>, introducing herself to <span style="text-transform:capitalize;">${character[0]}</span>. \"If you ${verb[0]} down to the basement oof this building, you will find a ${object[0]}. When you pick it up, you will disappear, but be able to find out all of the secrets of the universe. One you have learned them, you will reappear on the the side of a highway in <span style="text-transform:capitalize;">${place[1]}</span>.\" <br><br> Well, <span style="text-transform:capitalize;">${character[0]}</span> ${verb[0]}ed down to the the basement of the building her was in and found the ${object[0]}. However, upon holding the ${object[0]}, he did not become enlightened. There, he learned that ${object[0]} was no ${object[0]} at all, and that <span style="text-transform:capitalize;">${character[1]}</span> had just tricked <span style="text-transform:capitalize;">${character[0]}</span> into thinking that the ${object[1]} was a ${object[0]}.` ;
	}
