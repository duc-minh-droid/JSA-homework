

function currentClock() {
    setInterval(()=>{
      const time = new Date()
      const hour = time.getHours()<10?"0"+time.getHours():time.getHours()
      const min = time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes()
      const sec = time.getSeconds()<10?"0"+time.getSeconds():time.getSeconds()
      const currentTime = hour + ':' + min + ':' + sec
      const clock = document.querySelector(".clock")
      clock.textContent = currentTime  
    },100)
  }
  
  currentClock()
  