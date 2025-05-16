function addNav(id,path){
    const el=document.getElementById(id);
    if(el){
        el.addEventListener("click",function(){
            console.log("clicked "+id);
            window.location.href=path; 
            
        })
    }
}
addNav("fy","firstyear.html");
addNav("sy","secondyear.html");
addNav("fs","fysem1.html");
addNav("ss","fysem2.html");

document.addEventListener("DOMContentLoaded", function() {
    addNav("thirdsem","sysem1.html");
  });
document.addEventListener("DOMContentLoaded", function() {
    addNav("foursem","sysem2.html");
  });