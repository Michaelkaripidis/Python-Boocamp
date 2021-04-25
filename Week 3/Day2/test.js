let values = {
    fname: '',
    lname: ''
}

let inputs = document.getElementsByTagName("input");

for (input of inputs) {
    input.addEventListener("change", function(e) {
        values = {
            ...values,
            [e.target.name]: e.target.value
        }
        console.log(values);
    })

    }

let form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', function(e){
    e.preventDefault();

    alert(`Welcome ${values.fname} ${values.lname}`)
})
