const themeBtn=document.getElementById("theme-toggle");
const themeLink=document.getElementById("theme-link");
const saved=localStorage.getItem("theme");
if(saved){themeLink.href="assets/css/style."+saved+".css";}
themeBtn.onclick=()=>{
  let current=themeLink.href.includes("creative")?"creative":themeLink.href.includes("minimal")?"minimal":"business";
  let next=current==="creative"?"minimal":current==="minimal"?"business":"creative";
  themeLink.href="assets/css/style."+next+".css";
  localStorage.setItem("theme",next);
};

// Filter projects
document.querySelectorAll(".filter button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    let f=btn.dataset.filter;
    document.querySelectorAll(".projects .card").forEach(card=>{
      card.style.display=(f==="all"||card.dataset.cat===f)?"block":"none";
    });
  });
});

// Form submit with Formspree
const form=document.getElementById("contact-form");
form.addEventListener("submit",async e=>{
  e.preventDefault();
  const status=document.getElementById("form-status");
  let data=new FormData(form);
  const resp=await fetch("https://formspree.io/f/yourendpoint",{method:"POST",body:data,headers:{'Accept':'application/json'}});
  if(resp.ok){status.textContent="Đã gửi thành công!";form.reset();}
  else{status.textContent="Gửi thất bại!";}
});
