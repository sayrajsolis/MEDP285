  //bio button

  (function() {
 'use strict';
 // find the desired selectors
  var bioBTN = document.getElementById('request-bio');
  var bio = document.getElementById('bio-description');
  // set up a request
  var request = new XMLHttpRequest();
  // keep track of the request
  request.onreadystatechange = function() {
    // check if the response data send back to us 
    if(request.readyState === 4) {
      // add a border
      bio.style.border = '1px solid #e8e8e8';
      // uncomment the line below to see the request
      // console.log(request);
      // check if the request is successful
      if(request.status === 200) {
        // update the HTML of the element
        bio.innerHTML = request.responseText;        
      } else {
        // otherwise display an error message
        bio.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
      }
    }
  }
 // specify the type of request
 // register an event


  bioBTN.addEventListener('click', function() {
    // hide the button
    //this.style.display = 'none';
    // send the request
      request.open('Get', 'bio.txt');

    request.send();
  });
  })();

  //Abilities
  const select = document.querySelector('select');
  const abilityDESC = document.getElementById("ability-description");


select.addEventListener('change', setAbility);
  function setAbility(){
    const choice = select.value;

    if (choice === '') {
      abilityDESC.innerHTML = '';
    }

    else if (choice === 'alarmbot') {
      abilityDESC.innerHTML = 
        "Q - ALARMBOT <br> EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.";
    }
    else if (choice === 'turret') {
      abilityDESC.innerHTML = "E - TURRET EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret."
    }
  }