//Step 1 memorizzare la difficoltà selezionata
document.getElementById("play").addEventListener("click", function() {
    play();
})

function play() {
    const livelli = document.getElementById("livelli");
    const wrapper = document.getElementById("wrapper")
    if(livelli.value === "1"){
        document.getElementById("titolo").setAttribute("class", "d-none")
        creaTessere(100)
    }else if(livelli.value === "2"){
        wrapper.innerHTML = ""
        creaTessere(81)
    }else if(livelli.value === "3"){
        wrapper.innerHTML = ""
        creaTessere(49)
    }
    
}
function creaTessere(num){
    for (let i = 1; i <= num; i++){
        let tessera = document.createElement("div");
        tessera.setAttribute("class", "tessera");
        console.log(tessera)
        tessera.innerHTML = i
        const wrapper = document.getElementById("wrapper");
        wrapper.append(tessera);
    }
    let cambiaColore = document.querySelectorAll(".tessera");
        for(i=0; i < cambiaColore.length; i++){
            let c = i;
            cambiaColore[i].addEventListener("click", colors);
            function colors(){
                cambiaColore[c].classList.add("active");
            }
        }
}

