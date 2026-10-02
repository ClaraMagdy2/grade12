const titles={home:"Home",systems:"Computing Systems",hardware:"Hardware & Logic",network:"Network Center",security:"Security",algorithms:"Python Algorithms",data:"Data Structures",dashboard:"Project Summary"};
function go(page){
 document.querySelectorAll(".page").forEach(x=>x.classList.remove("active"));
 document.getElementById("page-"+page).classList.add("active");
 document.querySelectorAll(".nav-item").forEach(x=>x.classList.toggle("active",x.dataset.page===page));
 document.getElementById("page-title").textContent=titles[page];
 window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll(".nav-item").forEach(x=>x.onclick=()=>go(x.dataset.page));
document.querySelectorAll("[data-page-link]").forEach(x=>x.onclick=()=>go(x.dataset.pageLink));
