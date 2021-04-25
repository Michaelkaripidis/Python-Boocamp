// let form = document.forms[0]

// console.log(forms)

// let forms = document.forms[0];
// console.log(forms.email);
// let newInput =  document.getElementById('input')
// newInput.oninput = function() {
//   result.innerHTML = input.value;
// };
function getvalue() {
    let inputOne = document.getElementsByTagName('input')[0];
    let inputTwo = document.getElementsByTagName('input')[1];
    console.log(inputOne.value);
    console.log(inputTwo.value);
}
let form = document.forms.my;
form.addEventListener("submit", test)
function test(e){
    alert('submit ! ')
    e.preventDefault()
    console.log(e);
}
let input = document.getElementsByTagName('input')[0];
input.addEventListener('change', change)
function change(e) {
    console.log(e.target.value);
}