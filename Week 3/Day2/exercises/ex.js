let rem = document.getElementById("removed");
rem.remove()
// function blue() {
//     let col = document.getElementById("red");
//     document.body.style.backgroundColor = "blue";
// }
// col.addEventListener("click", blue);
document.getElementById("red").style.backgroundColor = "red";
let hh = document.querySelector("red");

function red() {
    document.body.style.backgroundColor = "red";
    console.log(document.body.style.backgroundColor);
}
function blue(){
	document.body.style.backgroundColor = "blue";
  console.log(document.body.style.backgroundColor); // blue
};


hh.addEventListener("click", red);
hh.addEventListener("click", blue);