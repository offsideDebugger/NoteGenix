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


//pages
document.addEventListener("DOMContentLoaded", function() {
    addNav("thirdsem","sysem1.html");
  });
document.addEventListener("DOMContentLoaded", function() {
    addNav("foursem","sysem2.html");
  });

  //sem 3 sy subjects
  document.addEventListener("DOMContentLoaded", function() {
    addNav("dsa","../HTML/NotesComponents/dsaSYsem1.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("emw","../HTML/NotesComponents/emanagementSY.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("fac","../HTML/NotesComponents/faccountingSY.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("cwh","../HTML/NotesComponents/cwhSY.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("aec","../HTML/NotesComponents/aec.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("itSY","../HTML/NotesComponents/itSY.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("os","../HTML/NotesComponents/osSYsem1.html");
  });


  //sem 4 sy
  document.addEventListener("DOMContentLoaded", function() {
    addNav("fcn","../HTML/NotesComponentsSem4/dcn.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("edvc","../HTML/NotesComponentsSem4/edvc.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("php","../HTML/NotesComponentsSem4/php.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("java","../HTML/NotesComponentsSem4/java.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("cSkills","../HTML/NotesComponentsSem4/cSkills.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("network","../HTML/NotesComponentsSem4/network.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("swe","../HTML/NotesComponentsSem4/software.html");
  });

  //sem 1 fy

  document.addEventListener("DOMContentLoaded", function() {
    addNav("fcpt","../HTML/NotesComponentSem1/fcpt.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("es","../HTML/NotesComponentSem1/es.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("tc","../HTML/NotesComponentSem1/tc.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("coi","../HTML/NotesComponentSem1/coi.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("python","../HTML/NotesComponentSem1/python.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("de","../HTML/NotesComponentSem1/de.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("maths","../HTML/NotesComponentSem1/maths.html");
  });


  //sem 2 fy
  document.addEventListener("DOMContentLoaded", function() {
    addNav("eda","../HTML/NotesComponentSem2/eda.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("cl","../HTML/NotesComponentSem2/cl.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("aec","../HTML/NotesComponentSem2/aec.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("cpp","../HTML/NotesComponentSem2/cpp.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("dmaths","../HTML/NotesComponentSem2/dmaths.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("dbms","../HTML/NotesComponentSem2/dbms.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("coa","../HTML/NotesComponentSem2/coa.html");
  });
  document.addEventListener("DOMContentLoaded", function() {
    addNav("dm","../HTML/NotesComponentSem2/dm.html");
  });