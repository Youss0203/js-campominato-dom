/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed 
emetto un messaggio in console con il numero della cella cliccata.
 */

/*Il computer deve generare 16 numeri casuali nello stesso range della 
difficoltà prescelta: le bombe.
Attenzione: 
nella stessa cella può essere posizionata al massimo una bomba, 
perciò nell’array delle 
bombe non potranno esserci due numeri uguali. */
















const newGridElement = document.querySelector("section.main-content")

const btnElement = document.querySelector("button")

btnElement.addEventListener("click", function () {

    newGridElement.innerHTML = ""

    const generatoreBombe = generaNumeriCasuali(16)
        let risultatoPlayer=0;

    for (let i = 1; i <= 100; i++) {

        const currentSquare = newSquareElement();
        const squareContent = i;

        currentSquare.innerHTML += `<span> ${squareContent} </span>`

        currentSquare.addEventListener('click', function () {
            currentSquare.classList.add('cliccked');
            console.log(squareContent)
        });

        newGridElement.appendChild(currentSquare)

        
        
        currentSquare.addEventListener("click", function(){
                if(risultatoPlayer === 100 - generatoreBombe){
                alert(`sei fortissimo hai vinto ${risultatoPlayer}`)
                }else if(generatoreBombe.includes(squareContent)){
                    currentSquare.classList.add("bg-red")
                    alert(`ritirati questo gioco non fa per te ${risultatoPlayer}`)
                }else{
                    currentSquare.classList.add("bg-blue")
                    risultatoPlayer += 1;
                }
        })
    }
})







function generaNumeriCasuali(numeroBombe) {
    const numeriCasuali = [];
    const min = 1;
    const max = 100;

    while (numeriCasuali.length < numeroBombe) {
        const randomNumber = numeroRandom

        if (!numeriCasuali.includes(randomNumber)) {
            numeriCasuali.push(randomNumber)
        }
        return numeriCasuali
    }
}









/* funzione */
function newSquareElement() {
    const articleElement = document.createElement("article");
    articleElement.classList.add("square");
    return articleElement;
}




function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*function getRandomNumber(){
    return Math.floor( Math.random()*99)+1;
}*/