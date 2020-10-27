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
        country.innerHTML = "<img src= 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg' width = '5%'>";
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
  const videoTheme = document.querySelector("iframe");

select.addEventListener('change', setAbility);
  function setAbility(){
    const choice = select.value;

    if (choice === '') {
      abilityDESC.innerHTML = '';
      abilityDEMO.innerHTML = '';
    }

    else if (choice === 'devour') {
      abilityDESC.innerHTML = 
        "<br><b>Q - DEVOUR </b><br><br> Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.";
      abilityDEMO.innerHTML = "<iframe src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb216220f42c804e2/5ecad85d4a28e119db5622a8/Reyna_Q_v001_web.mp4'></iframe>";
    }
    else if (choice === 'dismiss') {
      abilityDESC.innerHTML = "<br><b>E - DISMISS</b> <br><br> INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.";
      abilityDEMO.innerHTML = "<iframe src= 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt77e99ec99ef3a839/5ecad85e2f5c725928765503/Reyna_E_v002_web.mp4'></iframe>";
    }
    else if(choice === 'leer'){
      abilityDESC.innerHTML = 
        "<br><b>C - LEER</b><br><br>EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.";
      abilityDEMO.innerHTML = "<iframe src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf6109b8be97e8d96/5ecad85db42d3333c95dd1b2/Reyna_C_v002_web.mp4'></iframe>";
    }
    else if(choice === 'empress'){
      abilityDESC.innerHTML = 
        "<br><b>X - EMPRESS</b><br><br>INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.";
      abilityDEMO.innerHTML = "<iframe src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltadf53a38e449cb4d/5ecad85cbab1845d392dfd0f/Reyna_X_v001_web.mp4'></iframe>";
    }
  }
