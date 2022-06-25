(function initTheme() {
    var theme = localStorage.getItem('theme')
    if (theme) {
      document.querySelector('html').classList.add(`Background-${theme}`)
    }
})()
window.onload = ()=>{
  document.querySelector('html').classList.remove("*")
}