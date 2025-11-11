
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('nav ul');
if(menuIcon){
  menuIcon.addEventListener('click', ()=> navList.classList.toggle('show'));
}

const current = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(a=>{
  if(a.getAttribute("href")===current) a.classList.add("active");
});

const galleryImgs = document.querySelectorAll(".gallery img");
if(galleryImgs.length){
  const lightbox=document.createElement("div");
  lightbox.id="lightbox";
  document.body.appendChild(lightbox);
  galleryImgs.forEach(img=>{
    img.addEventListener("click",()=>{
      lightbox.style.display="flex";
      lightbox.innerHTML=`<img src="${img.src}" alt="">`;
    });
  });
  lightbox.addEventListener("click",()=>lightbox.style.display="none");
}

const form=document.querySelector("form");
if(form){
  form.addEventListener("submit",e=>{
    const name=form.querySelector('input[type="text"]');
    const email=form.querySelector('input[type="email"]');
    const msg=form.querySelector("textarea");
    if(!name.value||!email.value||!msg.value){
      e.preventDefault();
      alert("Please fill in all fields before sending.");
    }else{
      alert("Thank you! Your message has been sent.");
    }
  });
}
