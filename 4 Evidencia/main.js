addEventListener("DOMContentLoaded", (e)=>{

    let variable = document.querySelector("#Convertir")

    variable.addEventListener("submit", (e) => {
        e.preventDefault();

        let dataInput = Object.fromEntries(new FormData(e.target));

        let Input = dataInput.temperatura;
        let operacion = (Input * 9/5) + 32
        let tem = 'La temperatura en Fahrenheit es:';

        resultado.innerHTML = tem + " " + operacion
    })

})