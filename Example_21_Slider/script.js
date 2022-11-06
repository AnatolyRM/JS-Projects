const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activSlid = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

downBtn.addEventListener('click', () => {
  changeSlide('down')
})

upBtn.addEventListener('click', () => {
  changeSlide('up')
})

window.addEventListener('wheel', (e) => {
  (e.deltaY > 0) ? changeSlide('down') : changeSlide('up');
})

function changeSlide(direction) {
  if (direction === 'up') {
    activSlid++
    if (activSlid === slidesCount) {
      activSlid = 0
    }
  } else if (direction === 'down') {
    activSlid--
    if (activSlid < 0) {
      activSlid = slidesCount - 1
    }
  }
  let height = container.clientHeight

  mainSlide.style.transform = `translateY(-${activSlid * height}px)`

  sidebar.style.transform = `translateY(${activSlid * height}px)`
}