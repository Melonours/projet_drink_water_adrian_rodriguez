import { myBody, empty_part, filled_part, verres } from "./variables.js";

function hello(){
    console.log(myBody);
    console.log("hello");
}

function verreFilled(e){
    let check = e.target.classList.contains("empty")
    if(check == true){
        e.target.classList.remove("empty")
        e.target.classList.add("filled")
    }else if(check == false){
        e.target.classList.remove("filled")
        e.target.classList.add("empty")
    }
}
for (let i = 0; i < verres.length; i++) {
    verres[i].addEventListener("click", (e) => verreFilled(e))
}


// récupère l'index du verre
// function verreIndex(e){
//     let tempArray = Array.from(verres)
//     // console.log(tempArray.indexOf(e.target));
//     let indexE = tempArray.indexOf(e.target)
//     console.log(indexE);

// }
// for (let i = 0; i < verres.length; i++) {
//     verres[i].addEventListener("click", (e) => verreIndex(e))
// }



// va remplir selon l'index
function fill(e){
    let tempArray = Array.from(verres)
    // console.log(tempArray.indexOf(e.target));
    let indexE = tempArray.indexOf(e.target)
    console.log(indexE);
    switch (indexE) {
        case indexE == 0:
            // réduire la taille de la div et changer le d-none de l'autre
            
            break;
    
        default:
            break;
    }
}
for (let i = 0; i < verres.length; i++) {
    verres[i].addEventListener("click", (e) => fill(e))
}


function verreFill(e){
    
}
for (let i = 0; i < verres.length; i++) {
    verres[i].addEventListener("click", (e) =>verreFill(e))
}


export { hello }