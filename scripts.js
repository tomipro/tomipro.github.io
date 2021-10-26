window.addEventListener("scroll",function(){
    var navbar = this.document.querySelector("nav");
    navbar.classList.toggle("sticky",window.scrollY>50);
})

const toggleButton = document.getElementsByClassName('activar-boton')[0]
const navbarLinks = document.getElementsByClassName('links-nav')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})