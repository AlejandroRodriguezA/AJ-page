const projectName = 'portfolio';



const navMenu =document.querySelector(".nav-link-container");
const navLinkIconMenu = document.querySelector ("#nav-link-iconMenu");
// const navRight = document.querySelector(".navbar-right")

function despliegueMenu (hizoClick) {
    

    console.log(hizoClick);
    if (hizoClick) {
        console.log("Click ICON");
        if (navMenu.classList.contains("active")){
            console.log("hola");
            // Remuevo la clase activa al .menu
            navMenu.classList.remove("active");
            // navLinkIconMenu.textContent = "\u2630"; //<i class="fas fa-bars">
            navLinkIconMenu.innerHTML = "<i class='fas fa-bars'></i>";

        } else {
            console.log("ENtro")
            navMenu.classList.add("active");
            // Remuevo la clase activa a .nav-link-iconMenu
            // navLinkIconMenu.querySelector("a").textContent = "☓";
            navLinkIconMenu.innerHTML = "<i class='fas fa-times'></i>";
        }
    }
}
// console.group( "Contenedores" );
//     console.log("navLinkIconMenu:",navLinkIconMenu);
//     console.log("navMenu:",navMenu);
// console.groupEnd

// navLinkIconMenu.addEventListener("click",despliegueMenu,false);

function eventoClick(e) {
    
    let isclickMenu = navLinkIconMenu.contains(e.target);
    
    
    
    // console.group( "Checking Containership" );
    //     console.log( "Container:", navLinkIconMenu );
    //     console.log( "Target:", e.target );
    //     console.log( "Is Local:", isclickMenu );
    // console.groupEnd();

    // console.group("Evento y tipo")
    //     console.log(e);
    //     console.log("Evento tipo:",typeof evento);
    //     console.log("Evento string",typeof String( evento));
    //     console.log("Nodo Padre de evento",evento.parentNode);
    // console.groupEnd;


    if ((isclickMenu && (navMenu.classList.contains("active"))) || (!isclickMenu && (navMenu.classList.contains("active"))) ){
        // console.log("Recoger documento");
        navMenu.classList.remove("active");
        navLinkIconMenu.innerHTML = "<i class='fas fa-bars'></i>";

        
    } else if (isclickMenu && !(navMenu.classList.contains("active")) ) {
        // console.log("Desplegar documento");
        navMenu.classList.add("active");
        navLinkIconMenu.innerHTML = "<i class='fas fa-times'></i>";
           
    }

}




/* ESCUCHA DE EVENTOS */

document.addEventListener("click", eventoClick, true);