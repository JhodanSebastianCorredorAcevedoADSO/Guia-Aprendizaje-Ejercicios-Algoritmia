addEventListener("DOMContentLoaded", (e) => {

    let col = document.querySelector("#comida")

    let arr = 400;
    let pol = 350;
    let habi = 30;
    let tom = 62;
    let cebo = 35;

    col.addEventListener("submit", (e) => {
        e.preventDefault();

        let DataInput = Object.fromEntries(new FormData(e.target))
        let comi = Number(DataInput.comi)

        let arroz = arr * comi
        let pollo = pol * comi
        let habichuela = habi * comi
        let tomate = tom * comi
        let cebolla = cebo * comi

        let myTabla = document.querySelector("#tabla");
        myTabla.insertAdjacentHTML("beforeend", `
            <tr>
                <th>Ingredientes para ${comi} perosnas</th>
                <th>Gramos en total</th>
                <th>Preparacion para ${comi} personas</th> 
            </tr>
            <tr>
                <th>Arroz</th>
                <th>${arroz} Gramos</th>
                <th>Lavamos y ponemos a hervir</th> 
            </tr>
            <tr>
                <th>Pollo</th>
                <th>${pollo} Gramos</th>
                <th>Lo sudamos y desmechamos y condimentamos</th>
            </tr>
            <tr>
                <th>Habichulea</th>    
                <th>${habichuela} Gramos</th>
                <th>Lavamos y hervimos</th>
            </tr>
            <tr>
                <th>Tomate</th>
                <th>${tomate} Gramos</th>
                <th>Lavamos y hervimos</th>
            </tr>
            <tr>
                <th>Cebolla</th>
                <th>${cebolla} Gramos</th>
                <th>Lavamos y picamos</th>
            </tr>
        `);
    })
})