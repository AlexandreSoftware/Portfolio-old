(function initTheme() {
    var theme = localStorage.getItem('theme')
    console.log(theme)
    if (theme == "Base") {
      console.log("passed")
        document.querySelector('html').style.background="#171A21"
    }
    else if (theme == "HighTechPurple"){
      document.querySelector('html').style.background="linear-gradient(180deg, #3C1361 14.17%, #F05E23 94.57%)"
    }
    else if (theme == "HighTechRed"){
      document.querySelector('html').style.background="#0A0D0A"
    }
    else if (theme == "KissLand"){
      document.querySelector('html').style.background="#0A0D0A"
    }
})()
window.onload = ()=>{
  document.querySelector('html').classList.remove("*")
}