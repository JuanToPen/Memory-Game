let score = 0
let lockBoard = false
let hasFlippedCard = false
let firstCard;
let secondCard;
const cards = document.getElementsByClassName("cards")
const victoryScreen = document.getElementById("victoryModal")
const playAgain = document.getElementById("playAgain")
const exitGame = document.getElementById("exitGame")
const mikeContainer = document.getElementById("mikeOHearn")

function flipCards(){
    if(lockBoard){
        return
    }
    this.classList.add("flip")
    if(!hasFlippedCard){
        firstCard = this
        hasFlippedCard = true
    }else{
        secondCard = this
        if(firstCard.dataset.name !== secondCard.dataset.name){
            checkForMatches()
            hasFlippedCard = false
        }else{
            score += 0
        }
    }
}

function checkForMatches(){
    if(secondCard.id === firstCard.id){
        score += 1
        switch (firstCard.id) {
            case 'LBJ':
                document.getElementById("LBJAudio").play()
                break;
            case 'Curry':
                document.getElementById("CurryAudio").play()
                break;
            case 'MJ':
                document.getElementById("MJAudio").play()
                break;
            case 'Shaq':
                document.getElementById("ShaqAudio").play()
                break;
            case 'DMC3':
                document.getElementById("DMC3Audio").play()
                break;
            case 'Harden':
                document.getElementById("SpeedAudio").play()
                break;
            case 'KD':
                document.getElementById("KDAudio").play()
                break;
            default:
                document.getElementById("HowardAudio").play()
        }
        if(score === 8){
            setTimeout(()=>{
                victoryScreen.style.display = "flex"
        },200)
        }
    }else{
        lockBoard = true
        setTimeout(()=>{
            firstCard.classList.remove("flip")
            secondCard.classList.remove("flip")
        },1000)
        setTimeout(()=>{lockBoard = false}, 1500)
    }
}

function shuffleCards(){
    for(let i = 0; i < cards.length; i++){
        let pos = Math.ceil(Math.random() * 16)
        cards[i].style.order = pos
    }
}

for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click",flipCards)
}

exitGame.addEventListener("click",()=>{
    document.getElementById("game").style.display = "none"
    mikeContainer.style.display = "flex"
    document.getElementById("mikeThemeSong").play()
})

playAgain.addEventListener("click",()=>{
    score = 0
    victoryScreen.style.display = "none"
    for(let i = 0; i < cards.length; i++){
        cards[i].classList.remove("flip")
    }
    setTimeout(shuffleCards,500)
})

shuffleCards()
