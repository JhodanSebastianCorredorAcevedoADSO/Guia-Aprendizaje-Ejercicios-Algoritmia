addEventListener("DOMContentLoaded", (e) => {

    let tab = document.querySelector("#ta")

    tab.addEventListener("submit", (e) => {
        e.preventDefault();

        let myTabla = document.querySelector("#tabla");
        myTabla.insertAdjacentHTML("beforeend", `
            <tr>
                <td>Horario</td>
                <td>Actividad</td> 
            </tr>
            <tr>
                <td>4: 00 am</td>
                <td>Realizar el almuerzo y desayuno</td>
            </tr>
            <tr>
                <td>5:00 am</td>    
                <td>Desayunar</td>
            </tr>
            <tr>
                <td>5:30 am</td>
                <td>Bañarme y alistarme</td>
            </tr>
            <tr>
                <td>6:00 am</td>
                <td>tomar el transporte</td>
            </tr>
            <tr>
                <td>6:30 am</td>
                <td>llegar a mi trabajo</td>
            </tr>
            <tr>
                <td>12:30 pm</td>
                <td>almorzar</td>
            </tr>                        
        `);
    })
})