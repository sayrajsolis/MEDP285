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
  const abilityDEMO = document.getElementById("ability-demo");


select.addEventListener('change', setAbility);
  function setAbility(){
    const choice = select.value;

    if (choice === '') {
      abilityDESC.innerHTML = '';
      abilityDEMO.innerHTML = '';
    }

    else if (choice === 'alarmbot') {
      abilityDESC.innerHTML = 
        "<br><b>Q - ALARMBOT </b><br><br> EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.";
      abilityDEMO.innerHTML = "<iframe src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9a8fa11ac887550e/5f2203522f812a7c016f5651/AlarmBot_LowQuality.mp4'></iframe>";
    }
    else if (choice === 'turret') {
      abilityDESC.innerHTML = "<br><b>E - TURRET</b> <br><br> EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret."
      abilityDEMO.innerHTML = "<iframe src= 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0fe3462ae9a025a4/5f220396074360086ccdd908/Turret_LowQuality.mp4'></iframe>"
    }
    else if(choice === 'nanoswarm'){
      abilityDESC.innerHTML = 
        "<br><b>C - NANOSWARM</b><br><br>EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots."
      abilityDEMO.innerHTML = "<iframe src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4aed833e1b0df155/5f2204694be7297d7e6c8449/Grenade_LowQuality.mp4'></iframe>"
    }
    else if(choice === 'lockdown'){
      abilityDESC.innerHTML = 
        "<br><b>X - LOCKDOWN</b><br><br>EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies."
      abilityDEMO.innerHTML = "<iframe src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf74d72b162a14692/5f2204ab8ff50d070ad2d192/Ultimate_LowQualityV02.mp4'></iframe>"
    }
  }