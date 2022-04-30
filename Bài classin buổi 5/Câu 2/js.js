
function Run() {
    function Lyric() {
        let screen = document.querySelector(".screen")
        setTimeout(()=>{
            screen.innerHTML = "As the hour pass"
        },1500)
        setTimeout(()=>{
            screen.innerHTML += "<br>"
            screen.innerHTML += "I will let you know"
        },3000)
        setTimeout(()=>{
            screen.innerHTML += "<br>"
            screen.innerHTML += "That I need to ask"
        },4500)
        setTimeout(()=>{
            screen.innerHTML += "<br>"
            screen.innerHTML += "Me if I'm alone"
        },6000)
        setTimeout(()=>{
            screen.innerHTML += "<br>"
            screen.innerHTML += "How it feels to rest"
        },7500)
        setTimeout(()=>{
            screen.innerHTML += "<br>"
            screen.innerHTML += "On your patient lips"
        },9000)
        setTimeout(()=>{
            screen.innerHTML += "<br>"
            screen.innerHTML += "To eternal bliss"
        },10500)
        setTimeout(()=>{
            screen.innerHTML += "<br>"
            screen.innerHTML += "I'm so glad to know"
        },12000)
    }
    Lyric()
    setInterval(Lyric,13500)
}

Run()