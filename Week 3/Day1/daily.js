// Create an array which value is the planets of the solar system.
let arrPlanets = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
let arrColors= ["#FF329F", "#FFFF9F", "#0000FF", "#00CB60", "#FFB52A","#C941EC","#00FFEC", "#1C8027"]
for (let i=0;i<arrPlanets.length;i++){
    let newDiv = document.createElement("DIV");
    newDiv.innerHTML = arrPlanets[i];
    newDiv.className = "planet";
    newDiv.style.backgroundColor = arrColors[i];
    document.querySelector("section").appendChild(newDiv);
}
// Each planet should have a different background color. (Hint: add a new class to each planet).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
let arrMoons = [0,0,1,2,53,53,27,14];
for (let x=0; x<arrPlanets.length;x++){
    let margin = 150;
    for (let y=0;y<arrMoons[x];y++){
        let moonDiv = document.createElement("DIV");
        moonDiv.className = "moon";
        margin+=50;
        moonDiv.style.marginLeft=`${margin}px`;
        document.getElementsByClassName("planet")[x].appendChild(moonDiv);
    }  
}
