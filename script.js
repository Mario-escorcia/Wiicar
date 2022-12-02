const modal = document.querySelector(".modal--container");
const cargarBtn = document.getElementById("btn--select");
const infoContainer = document.querySelector(".info--container")
const spanInfoContainer = document.getElementById("span--info-container")
const selectNumResultados = document.getElementById("num-resultados")


let idElemento = 0;

// let numeroElementos = selectNumResultados.value;
let headerDataHtml = `<div class="table--header">

<div class="input--check-cont">
    <input type="checkbox" name="" id="checkbox">
</div>

<div class="id--header-cont">
    <p>ID</p>
    <i class="fa-solid fa-sort"></i>
</div>

<div class="placa--header-cont">
    <p>Placa</p>
    <i class="fa-solid fa-sort"></i>
    </div>

<div class="marca--header-cont">
    <p>Marca</p>
    <i class="fa-solid fa-sort"></i>                 
    </div>

<div class="modelo--header-cont">
    <p>Modelo</p>
    <i class="fa-solid fa-sort"></i>
    </div>

<div class="kilometraje--header-cont">
    <p>Kilometraje</p>
    <i class="fa-solid fa-sort"></i>
</div>

<div class="transmision--header-cont">
    <p>Transmisión</p>
    <i class="fa-solid fa-sort"></i>
</div>

<div class="tipo--header-cont">
    <p>Tipo</p>
    <i class="fa-solid fa-sort"></i>
</div>

<div class="precio--header-cont">
    <p>Precio de compra</p>
    <i class="fa-solid fa-sort"></i>
</div>

<div class="proviniencia--header-cont">
    <p>Proviniencia</p>
    <i class="fa-solid fa-sort"></i>
</div>
</div>`

function cargarDatos() {
    for (let i = 0; i < selectNumResultados.value; i++) {
                
        let dataHtml = document.createElement("div")
        dataHtml.classList.add("datos--container")
        dataHtml.innerHTML = `<div class="input--check-datos">
        <input type="checkbox" name="" id="checkbox">
        </div>

        <div class="id--datos">
        <p>${idElemento + 1}</p>
        </div>

        <div class="placa--datost">
        <p>IWF567</p>
        </div>

        <div class="marca--datos">
        <p>Tesla</p>
        </div>

        <div class="modelo--datos">
        <p>S</p>
        </div>

        <div class="kilometraje--datos">
        <p>14.500km</p>
        </div>

        <div class="transmision--datos">
        <p>Automatica</p>
        </div>

        <div class="tipo--datos">
        <p>Automovil</p>
        </div>

        <div class="precio--datos">
        <p>$78.899.000</p>
        </div>

        <div class="proviniencia--datos">
        <button>Nuevo <i class="fa-solid fa-eye"></i></button>
        </div>

        <div class="acciones--datos">
        <select name="" id="">
            <option value="">Editar</option>
            <option value="">Almacenar</option>
        </select>
`
        infoContainer.appendChild(dataHtml)
        idElemento += 1;
        if (idElemento  % 2 == 0) {
            dataHtml.style.backgroundColor = "#0000001A"
        }
        
    }
}

cargarBtn.addEventListener("change" , (e)=>{
    if (e.target.value === "carga-masiva") {
        e.target.value = ""
       
        modal.style.display ="inline-block"
        modal.style.display ="flex"

        setTimeout(()=>{
            modal.style.display ="none"
            spanInfoContainer.style.display = "none"
            
            infoContainer.innerHTML = headerDataHtml
            cargarDatos();
            selectNumResultados.addEventListener("change", ()=>{
                cargarDatos()
            })

        },1800)

    }

})
