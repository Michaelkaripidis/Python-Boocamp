let list_planet = getElementByClassName('listPlanets')[0];

// Create an arry which value is the planets of the solar system.
let planets = ['Mercury', 'Venus', 'Pluton', 'Earth']
// For each planet in the array, create a <div> using createElement. This div should have

for(planet of planets) {
    console.log(planet);
    let div = document.createElement('div');
    div.setAttribute('class', `planet ${planet}`)
    div.style.margin="10px"

    // Finally append each div to the section in the HTML (presented below).
    list_planet.appendChild(div);
}

// Each planet should have a different background color. (Hint add )
let mercury = document.getElementsByClassName('Mercury')[0];
let venus = document.getElementsByClassName('Venus')[0];
let pluton = document.getElementsByClassName('Pluton')[0];
let earth = document.getElementsByClassName('Earth')[0];
mercury.getElementsByClassName.backgroundColor="red";
venus.getElementsByClassName.backgroundColor=