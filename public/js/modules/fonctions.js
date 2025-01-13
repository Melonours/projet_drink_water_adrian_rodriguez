import { myBody, empty_part, filled_part, verres } from "./variables.js";

function hello(){
    console.log(myBody);
    console.log("hello");
}

function verreFilled(e){
    let tempArray = Array.from(verres)
    // console.log(tempArray.indexOf(e.target));
    let indexE = tempArray.indexOf(e.target)
    // console.log(indexE);
    
    let bus = tempArray.slice(0, indexE)
    console.log(bus);

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
    // console.log(indexE);

    
    let attributesEmpty = window.getComputedStyle(empty_part)
    // console.log(attributesEmpty);
    
    let heightEmpty = attributesEmpty.getPropertyValue("height")
    // console.log(heightEmpty);
    let span = document.getElementById("empty").firstChild
    // console.log(span);
    
    
    if(indexE == 0 && (e.target.classList.contains("filled"))){
        document.getElementById("empty").style.height = "87.5%"
        document.getElementById("filled").style.height = "12.5%"
        filled_part.classList.remove("d-none")
        filled_part.innerHTML = "12.5%"
        span.innerHTML = "1.75L"
    }else if(indexE == 1 && (e.target.classList.contains("filled"))){
        document.getElementById("empty").style.height = "75%"
        document.getElementById("filled").style.height = "25%"
        filled_part.classList.remove("d-none")
        filled_part.innerHTML = "25%"
        span.innerHTML = "1.5L"
        
    }else if(indexE == 2 && (e.target.classList.contains("filled"))){
        document.getElementById("empty").style.height = "62.5%"
        document.getElementById("filled").style.height = "37.5%"
        filled_part.classList.remove("d-none")
        filled_part.innerHTML = "37.5%"
        span.innerHTML = "1.25L"
    }else if(indexE == 3 && (e.target.classList.contains("filled"))){
        document.getElementById("empty").style.height = "50%"
        document.getElementById("filled").style.height = "50%"
        filled_part.classList.remove("d-none")
        filled_part.innerHTML = "50%"
        span.innerHTML = "1L"
    }else if(indexE == 4 && (e.target.classList.contains("filled"))){
        document.getElementById("empty").style.height = "37.5%"
        document.getElementById("filled").style.height = "62.5%"
        filled_part.classList.remove("d-none")
        filled_part.innerHTML = "62.5%"
        span.innerHTML = "0.75L"
    }else if(indexE == 5 && (e.target.classList.contains("filled"))){
        document.getElementById("empty").style.height = "25%"
        document.getElementById("filled").style.height = "75%"
        filled_part.classList.remove("d-none")
        filled_part.innerHTML = "75%"
        span.innerHTML = "0.5L"
    }else if(indexE == 6 && (e.target.classList.contains("filled"))){
        document.getElementById("empty").style.height = "12.5%"
        document.getElementById("filled").style.height = "87.5%"
        filled_part.classList.remove("d-none")
        filled_part.innerHTML = "87.5%"
        span.innerHTML = "0.25L"
    }else if(indexE == 7 && (e.target.classList.contains("filled"))){
        document.getElementById("empty").style.height = "0%"
        document.getElementById("filled").style.height = "100%"
        empty_part.classList.add("d-none")
        filled_part.classList.remove("d-none")
        filled_part.innerHTML = "100%"
    }else{
        document.getElementById("empty").style.height = "100%"
        empty_part.classList.remove("d-none")
        filled_part.classList.add("d-none")
        filled_part.innerHTML = "0%"
        span.innerHTML = "2L"
    }
}
for (let i = 0; i < verres.length; i++) {
    verres[i].addEventListener("click", (e) => fill(e))
}


export { hello }