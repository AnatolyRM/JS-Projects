const slids = document.querySelectorAll('.slide')

for (const slid of slids) {
  slid.addEventListener('click', () => {
    for (const slid of slids) {
      slid.classList.remove('active')
    }
    slid.classList.toggle('active')
  })
}