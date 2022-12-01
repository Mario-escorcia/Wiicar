const modal = document.querySelector(".modal--container");
const cargarBtn = document.getElementById("btn--select");

cargarBtn.addEventListener("click" , (e)=>{
    if (e.target.value === "carga-masiva") {
        modal.style.display ="inline-block"
        modal.style.display ="flex"
        setTimeout(()=>{
            modal.style.display ="none"
        },1800)
    }
})
