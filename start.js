const soundOn = document.getElementById("soundOn")
const soundOff = document.getElementById("soundOff")
const spaceJam = document.getElementById("spaceJam")

soundOn.addEventListener("click",()=>{
    soundOn.style.display = "none"
    soundOff.style.display = "flex"
    spaceJam.pause()
})

soundOff.addEventListener("click",()=>{
    soundOff.style.display = "none"
    soundOn.style.display = "flex"
    spaceJam.play()
})
