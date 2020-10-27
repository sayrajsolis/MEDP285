  //bio button

  (function() {
 'use strict';
 // find the desired selectors
  var bioBTN = document.getElementById('request-bio');
  var bio = document.getElementById('bio-description');
  var country = document.getElementById('country');
  // set up a request
  var request = new XMLHttpRequest();
  // keep track of the request
  request.onreadystatechange = function() {
    // check if the response data send back to us 
    if(request.readyState === 4) {
      // add a border
      //bio.style.border = '1px solid #e8e8e8';
      // uncomment the line below to see the request
      // console.log(request);
      // check if the request is successful
      if(request.status === 200) {
        // update the HTML of the element
        country.innerHTML = "<img src= 'https://www.nationalflags.shop/WebRoot/vilkasfi01/Shops/2014080403/53E6/2F4E/F123/7D8D/CCB0/0A28/100B/04B4/Flag_of_Brazil_ml.png' width = '5%'>";
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

    else if (choice === 'blastpack') {
      abilityDESC.innerHTML = 
        "<br><b>Q - BLAST PACK </b><br><br> INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough.";
      abilityDEMO.innerHTML = "<iframe src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf3581aedf43e1ce8/5ecad83cc846021917ecbb8d/Raze_Q_v001_web.mp4'></iframe>";
    }
    else if (choice === 'paintshells') {
      abilityDESC.innerHTML = "<br><b>E - PAINT SHELLS</b> <br><br> EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range."
      abilityDEMO.innerHTML = "<iframe src= 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfe61b821c26125b7/5ecad83be2a559592eb0c1ba/Raze_E_v001_web.mp4'></iframe>"
    }
    else if(choice === 'boombot'){
      abilityDESC.innerHTML = 
        "<br><b>C - BOOM BOT</b><br><br>EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them."
      abilityDEMO.innerHTML = "<iframe src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f7d7ee195ecedca/5ecad83c52c5395e0f2dd0e4/Raze_C_v001_web.mp4'></iframe>"
    }
    else if(choice === 'showstopper'){
      abilityDESC.innerHTML = 
        "<br><b>X - SHOWSTOPPER</b><br><br>EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything."
      abilityDEMO.innerHTML = "<iframe src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15aa9cb086aed1a/5ecad83c4a28e119db5622a2/Raze_X_v001_web.mp4'></iframe>"
    }
  }