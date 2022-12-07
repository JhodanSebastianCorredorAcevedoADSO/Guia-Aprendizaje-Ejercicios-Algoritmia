addEventListener("DOMContentLoaded", (e)=>{

    let aaa = document.querySelector("#transformar")

        aaa.addEventListener("submit", (e) => {
            e.preventDefault();
            let dataInput = Object.fromEntries(new FormData(e.target));
            let Input = dataInput.dolar;
            let dolar = 4800;
            let operacion = dolar * Input
            let tt = "Es mucha plata perro"
            resultado.innerHTML = operacion + "<br>" + tt
        })

})