// const btn = document.getElementById('submitBtn');

// function AddLoading(){
//     btn.innerHTML = '<img src="img/loading.png" class="loading" alt=""></img>';
// }

// function RemoveLoading(){
//     btn.innerHTML = 'Enviar';
// }

var btn = document.getElementById("notifyButton");
var form = document.getElementById("form");



const HideForm = () =>{
    setTimeout(function(){
        form.style.marginLeft = "3000px";
        form.style.transition = "0.4s";
    },5)
    btn.style.display = "block";
    form.style.display = "none";
    
    form.reset();
    
}    

const handleSubmit = (event) => {
    event.preventDefault();
    // AddLoading();

    const name = document.querySelector('input[name=name]').value;
    const surname = document.querySelector('input[name=surname]').value;
    const email = document.querySelector('input[name=email]').value;
    const phone = document.querySelector('input[name=phone]').value;

    fetch('https://api.sheetmonkey.io/form/psBfy6G6kj9zjP1hPKLc3Q', {
        method: 'post',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            name, surname, email, phone
        })
    })

    setTimeout(function () {
        HideForm();
    }, 10)

    
    
}

document.querySelector('form').addEventListener('submit', handleSubmit);