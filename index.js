 let peopleEl = document.getElementById("people-el");
 let inputEl = document.getElementById("input-el");
 let input = document.getElementById("input");
 let bill = document.getElementById("bill");

 let click = document.getElementById("click1");
 let click1 = document.getElementById("click2");
 let click2 = document.getElementById("click3");
 let click3 = document.getElementById("click4");
 let click4 = document.getElementById("click5");
 let click5 = document.getElementById("click6");
 let resetEl = document.getElementById("reset");
 let customBtn = document.getElementById("custom-btn");
 
 

 
click.addEventListener("click", function(){
    let a = inputEl.value;
     let mutiply=  a * 5/100;
     document.getElementById("input").value =mutiply;
   let total= (inputEl.value - mutiply) * peopleEl.value;
document.getElementById("bill").value = total;

})
click1.addEventListener("click", function(){
    let a = inputEl.value;
     let mutiply=  a * 10/100;
     document.getElementById("input").value =mutiply;
   let total= (inputEl.value - mutiply) * peopleEl.value;
document.getElementById("bill").value = total;

})
click2.addEventListener("click", function(){
    let a = inputEl.value;
     let mutiply=  a * 15/100;
     document.getElementById("input").value =mutiply;
   let total= (inputEl.value - mutiply) * peopleEl.value;
document.getElementById("bill").value = total;

})
click3.addEventListener("click", function(){
    let a = inputEl.value;
     let mutiply=  a * 20/100;
     document.getElementById("input").value =mutiply;
   let total= (inputEl.value - mutiply) * peopleEl.value;
document.getElementById("bill").value = total;

})
click4.addEventListener("click", function(){
    let a = inputEl.value;
     let mutiply=  a * 25/100;
     document.getElementById("input").value =mutiply;
   let total= (inputEl.value - mutiply) * peopleEl.value;
document.getElementById("bill").value = total;

})

resetEl.addEventListener("click", function(){
  document.getElementById("bill").value ="";
  document.getElementById("input").value ="";
  inputEl.value=""
  peopleEl.value=""
  customBtn.value=""
  
})
customBtn.addEventListener("click", function(){
  let a = inputEl.value;
  let b = customBtn.value;
  let mutiply=  a * (b/100) ;
  document.getElementById("input").value =mutiply;
  let total= (a - mutiply) * peopleEl.value;
document.getElementById("bill").value = total;
})



 
 