const rec = new webkitSpeechRecognition()

rec.lang = 'uz-Uz'

rec.onend = function () {
  
  console.log('Aloqa tugadi.')
}

rec.onresult = function (event) {
  
  const command = event.results[0][0].transcript.toLowerCase()
  
  if (command === 'tun') {
    
    document.querySelector('.telegram-demo').classList.remove('light-theme')
    document.querySelector('.telegram-demo').classList.add('dark-theme')
  }
  else {
    console.log('Tushunmadim')
  }
}

rec.onerror = function () {
  console.log('Xatolik yuz berdi')
}

window.onkeyup = function (event) {
  if (event.keyCode === 32) {
    rec.start()
  }
}

function nightMode () {
  document.querySelector('.telegram-demo').classList.remove('light-theme')
  document.querySelector('.telegram-demo').classList.add('dark-theme')
}

nigthMode.onclick = nightMode
