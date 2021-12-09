import './sass/style.scss'


window.addEventListener("DOMContentLoaded", init);
const formOne = document.querySelector("#form-c");


function init(){
  post();
/*   validateForm(); */
 
  }
  
  function post(data){
    const postData = JSON.stringify(data);
    fetch('https://gspscontact-a453.restdb.io/rest/contact-form', {
      method: "post",
      headers:  { 'cache-control': 'no-cache',
      'x-apikey': '61b0b1da72a03f5dae8221e9',
      'content-type': 'application/json;  charset=utf-8' },
      body: postData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }


  //validate form//
  function validateForm(){
    console.log(validateForm)
    
    if(!formOne.elements.name.checkValidity()){
      document.querySelector("#error-2").classList.add("hidden");
      document.querySelector("#error-1").classList.remove("hidden");
     }
     else if(!formOne.elements.email.checkValidity()){
      document.querySelector("#error-1").classList.add("hidden");
      document.querySelector("#error-2").classList.remove("hidden");
     }
     else{
      document.querySelector("#error-1").classList.add("hidden");
      document.querySelector("#error-2").classList.add("hidden");
    }
  }

  

    document.getElementById("submit").addEventListener("click", (e) => {
e.preventDefault();

validateForm();
post({
  name: formOne.elements.name.value,
  email: formOne.elements.email.value,
 number: formOne.elements.number.value,
 desc:formOne.elements.desc.value
});

    })

    

//mobile nav//
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");


mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active-menu-btn");
  mobileMenu.classList.toggle("slide-out");
  mobileMenu.classList.toggle("slide-in");
  if (mobileMenu.classList.contains("slide-out")) {
    setTimeout(() => {
      mobileMenu.classList.add("display-none");
    }, 1000);
  } else {
    mobileMenu.classList.remove("display-none");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 750) {
    mobileMenu.classList.add("slide-out");
    mobileMenu.classList.remove("slide-in");
    setTimeout(() => {
      mobileMenu.classList.add("display-none");
    }, 1000);
  }
});

  

 
 

  formOne.setAttribute("novalidate", true);

