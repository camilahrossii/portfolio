var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  document.getElementById(tabname).classList.add('active-tab')
}


var sideMenu = document.getElementById("sidemenu");

function openMenu() {
  sideMenu.style.right = "0"
}

function closeMenu() {
  sideMenu.style.right = "-280px"
}


// contact-form

const scriptURL = 'https://script.google.com/macros/s/AKfycbzKfEAAN7-bJ7xlAqxmurRFL2eGbcQh-gdZw_9zulFrJBPAYktSxHd19CRn81zbbxQA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Mensagem enviada! "
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})