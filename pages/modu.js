function buttonAdd() {
  const addButton = document.createElement('input')
  addButton.classList.add('addition')
  addButton.type = 'button'
  addButton.value = 'serviceXから入力'
  addButton.id = 'serviceX'
  document.querySelector('#vi > p').appendChild(addButton)

  const modalArea = document.createElement('section')
  modalArea.style.width = '100%'
  modalArea.style.height = '100%'
  modalArea.style.top = '0'
  modalArea.style.left = '0'
  modalArea.style.position = 'fixed'
  modalArea.style.background = 'rgba(0,0,0,50%)'
  modalArea.id = 'modalA'
  modalArea.style.display = 'none'

  const ifra = document.createElement('iframe')
  ifra.src = 'https://konjikun.github.io/administraition-form/'
  ifra.id = 'iframe-body'
  ifra.style.width = '600px'
  ifra.style.height = '800px'
  ifra.style.backgroundAttachment = 'fixed'
  ifra.style.top = '50%'
  ifra.style.left = '50%'
  ifra.style.backgroundColor = 'white'
  ifra.style.border = 'none'
  ifra.style.position = 'absolute'
  ifra.style.transform = 'translate(-50%,-50%)'
  ifra.style.display = 'none'

  document.querySelector('#contents').appendChild(modalArea)
  document.querySelector('#contents').appendChild(ifra)
  iframe()
  return addButton
}
buttonAdd()
console.log('#serviceX')

function iframe() {
  '#serviceX'.on('click', function () {
    '#iframe-body'.fadeIn()('#modalA').fadeIn()
    let s = 'iframe'.offset().top(window).scrollTop(s)
  })
}

let demandData = [
  'nameKatakana',
  'nameKanji',
  'addres',
  'email',
  'phoneAdvance',
  'phoneCenter',
  'phoneBack',
]

function readyIframe(demandData) {
  demandData = JSON.parse(JSON.stringify(demandData))
  let prottype = ['0', '1']
  console.log(demandData)('#iframe-body')[0].contentWindow.postMessage(demandData, '*')
}
readyIframe(demandData)

window.addEventListener('message', readyIframe, { once: true })
window.addEventListener('message', (serve) => {
  if (typeof serve.data !== 'string') {
    '#iframe-body'.fadeOut()('#modalA').fadeOut()
    console.log(typeof serve.data)
    let serveData = serve.data
    console.log(serveData)
    document.getElementById('moushikomiShimeiKn').value = serveData[0]
    document.getElementById('moushikomiShimeiKj').value = serveData[1]
    document.getElementById('moushikomiMail').value = serveData[2]
    document.getElementById('confirmMoushikomiMail').value = serveData[3]
    document.getElementById('moushikomiPhoneNo1').value = serveData[4]
    document.getElementById('moushikomiPhoneNo2').value = serveData[5]
    document.getElementById('moushikomiPhoneNo3').value = serveData[6]
  }
})

'https://konjikun.github.io/administraition-form/'.onload = () => {
  window.addEventListener(
    'message',
    (event) => {
      if (event.origin !== 'https://github.com/konjikun/administraition-form.git') return
    },
    false
  )
}

export { buttonAdd, iframe }
