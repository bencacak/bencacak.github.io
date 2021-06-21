let result;
   	
	let resultsArray =  [
			['black coffee', 'img/blackcoffee.jpg', 'You are traditional and active in the way you approach life.'],// 0
			['cold brew', 'img/coldbrew.jpg', 'You are re-imagining of a classic.'],//1
			['iced coffee', 'img/iced.gif', 'You are a twist on a classic and like to channel your inner-Nancy Botwin.'],//2
			['espresso', 'img/esp.jpg', 'You are a classic.'],//3
			['Starbucks macchiato', 'img/stmacc.jpg', 'We\'re not quite sure what you are, but you like to experiement in life.'], //4	
			['macchiato', 'img/macc.jpg', 'You are classic and experiemental.'],//5
			['non-fat latte', 'img/nflatte.jpg', 'You carefully plan out your life'],//6
			['mocha', 'img/mch.jpg', 'You aren\'t afraid to show your true colors and you inner youth.'],//7
			['flat white', 'img/fw.jpg', 'You\'re not afraid to show your true colors but you are also aware of the consequences of added sugar.'],//8
			['black tea lemonade', 'img/bktealem.jpg', 'You are a spin on a coffee alternative.'], //9
			['black tea', 'img/bktea.jpg', 'You are not quite coffee but something quite similar.'],//10
			['chai latte', 'img/chai.jpg', 'You\'re not even coffee, but something similar to a popular coffee-based beverage.'],//11
			['frapuccino', 'img/frap.jpg', 'You like to dabble in something different.'],//12
			['rare unicorn frapuccino', 'img/unifrap.jpg', 'You are something different and you like to explore uncharted territory.'],//13
			['green tea', 'img/greentea.jpg', 'You are moreunique from the average coffee drinker, but like to take more control in your life.'],//14
			['any coffee drink with whipped cream', 'img/whip.jpg', 'You are a bit more analytical, but have your playful side.'],//15
			['versatile person', 'img/quest.png', 'To be honest, you would be happy with anything on the menu.'],//16 
			['something', 'img/error.png', 'Yikes! Perhaps you shoud try again']//17
		  ];
  			  
  

    function computeForm(form) {
        
	  let qNum = 1;
	  let active = 0;
	  let analytical = 0;
	  let expressive = 0;
	  let inquisitive = 0;
	  let outwardValue= 0;
	  let inwardValue = 0;
      

	  for (qNum = 1; qNum <= 4; qNum++) {
		  let radio_inputs = document.forms['quiz'].elements['question'+ qNum];
			   for (let i = 0; i < radio_inputs.length; i++) {
				   if (radio_inputs[i].checked) {
					  choice = radio_inputs[i].value;
					  }  // closes condition on checked
			   } // closes for loop on radios
					  
				if (choice == "1") {
                   active++;
				}
				if (choice == "2") {
				   analytical++;
				}
				if (choice == "3") {
				   expressive++;
				}
				if (choice == "4") {
				   inquisitive++;
				}
		      
	    }  // closes for loop on questions
	    

	    
	     outwardValue= active - analytical;   
	     /* a positive value: outward, active, 
	       a negative value : outward, analytical */
	       
		 inwardValue = expressive - inquisitive;
		 /* a positive value :  inward, expressive 
		   a negative value : inward, inquisitive */
			  
        
    
      if (outwardValue > 0 && inwardValue > 0 && active > expressive) {
         // mainly active, also expressive 
         result = 0;
      }
      else if (outwardValue > 0 && inwardValue > 0 && expressive > active) {
         // mainly expressive, also active
         result =  1;
      }
      else if (outwardValue > 0 && inwardValue > 0 && expressive == active) {
         // expressive and active equally
         result = 2;
      }
      else if (outwardValue > 0 && inwardValue < 0 && active > inquisitive) {
         // mainly active, also inquisitive
         result = 3;
      }
      else if (outwardValue > 0 && inwardValue < 0 && inquisitive > active) {
         // mainly inquisitive, also active
         result =  4;
      }
      else if (outwardValue > 0 && inwardValue < 0 && inquisitive == active) {
         // inquisitive and active equally
         result = 5;
      }
      else if (outwardValue< 0 && inwardValue > 0 && analytical > expressive) {
         // mainly analytical, also expressive
         result = 6;
      }
      else if (outwardValue< 0 && inwardValue > 0 && expressive > analytical) {
         // mainly expressive, also analytical
         result = 7;
      }
      else if (outwardValue< 0 && inwardValue > 0 && expressive == analytical) {
         // expressive and analytical equally
         result = 8;
      }
      else if (outwardValue< 0 && inwardValue < 0 && analytical > inquisitive) {
         // mainly analytical, also inquisitive
         result = 9;
      }
      else if (outwardValue< 0 && inwardValue < 0 && inquisitive > analytical) {
         // mainly inquisitive, also analytical
         result = 10;
      }
      else if (outwardValue< 0 && inwardValue < 0 && inquisitive == analytical) {
         // inquisitive and analytical equally
         result = 11;
      }
      else if (outwardValue == 0 && inwardValue > 0) {
         // neutral active/analytical, expressive
         result = 12;
      }
      else if (outwardValue == 0 && inwardValue < 0) {
         // neutral active/analytical, inquisitive
         result = 13;
      }
      else if (outwardValue > 0 && inwardValue == 0) {
         // neutral expressive/inquisitive, active
         result = 14;
      }
      else if (outwardValue< 0 && inwardValue == 0) {
         // neutral expressive/inquisitive, analytical
         result = 15;
      }
      else if (outwardValue == 0 && inwardValue == 0) {
         // neutral
         result = 16;
      }
      else {
         // no result found
         result = 17;
      }
        

      
     // pop-up an answer
      document.getElementById("answer").style.display = "block";
      document.getElementById("answer").innerHTML = '<img src=' + resultsArray[result][1] + '> <br> You are a ' + resultsArray[result][0] + '. ' + resultsArray[result][2];
    
    
    
    
    }  // this closes computeForm
    


   