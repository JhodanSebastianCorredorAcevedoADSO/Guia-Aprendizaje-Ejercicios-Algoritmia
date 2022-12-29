addEventListener("DOMContentLoaded", (e) => {

    let forma = document.querySelector("#forma");
    let edad = document.querySelector("#edad");
    let año = document.querySelector("#año");
    let naci = document.querySelector("#naci");

    forma.addEventListener("submit", (e) => {
        e.preventDefault();

        let dataInput = Object.fromEntries(new FormData(e.target))
        let año = Number(dataInput.año)

        let DataInput = Object.fromEntries(new FormData(e.target))
        let naci = Number(DataInput.naci)

        let a = año - naci
        let b = `Usted tiene`
        let c = `años de edad`
        
        edad.innerHTML = b + " " + a + " " + c
    })
})