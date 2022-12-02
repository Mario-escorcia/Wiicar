// obtención de elemtos html con los que voy a trabajar
const modal = document.querySelector(".modal--container");
const cargarBtn = document.getElementById("btn--select");
const infoContainer = document.querySelector(".info--container")
const spanInfoContainer = document.getElementById("span--info-container")
const selectNumResultados = document.getElementById("num-resultados")


// id de ccada elento , que irá aumentando dinamicamente en 1 en cada iteración o cada que se muestre los datos
let idElemento = 0;

// codigo html que va a retornar el header de la tabla cuando carguen los datos
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

// funci´´on para cargar datos
function cargarDatos() {

    // este bucle se encarga de devolver los div html con los datos el numero de veces que tenga el valor del elemento de seleccion de valor en la parte de filtros. (por defecto empieza en 10 la carga de datos o antes de cargarlos se cambia el valor en el filtro junto al iinput de busqueda)

    for (let i = 0; i < selectNumResultados.value; i++) {
        
        // creación de los elemntos html cada que se haga la iteración
        let dataHtml = document.createElement("div")
        dataHtml.classList.add("datos--container")
        // datos internos de los div
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
        // inserción de los datos
        infoContainer.appendChild(dataHtml)
        
        // aca es donde aumento de manera dinamica el id de cada elemento
        idElemento += 1;
        if (idElemento  % 2 == 0) {
            dataHtml.style.backgroundColor = "#0000001A"
        }
        
    }
}


// escuchador de evento para el cargue masivo de datos
cargarBtn.addEventListener("change" , (e)=>{
    // si el select tiene como valor "carga masiva" en el evento change ejecuta el siguiente codigo
    if (e.target.value === "carga-masiva") {
        e.target.value = ""
       
        // muestro la ventana modal simulando la espera al servidor tirmpo 1.8 segundos 
        modal.style.display ="inline-block"
        modal.style.display ="flex"

        setTimeout(()=>{
            modal.style.display ="none"
            spanInfoContainer.style.display = "none"
            
            // cargo el header de los datos
            infoContainer.innerHTML = headerDataHtml
            // ejecuto la función que carga los div con los datos
            cargarDatos();

            // actualiza los datos cada que cambio el valor del filtro de cantidad de datos
            selectNumResultados.addEventListener("change", ()=>{
                cargarDatos()
            })

        },1800)

    }

})

// 2/12/2022