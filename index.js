let peopleEl = document.getElementById("people-el");
 let inputEl = document.getElementById("input-el");
 let input = document.getElementById("input");
 let bill = document.getElementById("bill");
 let warning = document.getElementById("warning");
 

 let click = document.getElementById("click1");
 let click1 = document.getElementById("click2");
 let click2 = document.getElementById("click3");
 let click3 = document.getElementById("click4");
 let click4 = document.getElementById("click5");
 let click5 = document.getElementById("click6");
 let resetEl = document.getElementById("reset");
 let customBtn = document.getElementById("custom-btn");
 
 

 
click.addEventListener("click", function(){
    let a = bill.value;
    let b = peopleEl.value;
    if (peopleEl.value == 0){
       warning.innerText = "cannot be zero";
       peopleEl.style.border = "2px solid red";
        }else{
    let divide = a/b;
     let mutiply=  divide * 5/100;
     input.innerHTML ="$" + mutiply.toFixed(2)
   let total= divide + mutiply
inputEl.innerHTML = "$" + total.toFixed(2)
    }

})
click1.addEventListener("click", function(){
  let a = bill.value;
  let b = peopleEl.value;
  if (peopleEl.value == 0){
     warning.innerText = "cannot be zero"
    peopleEl.style.border = "2px solid red";
    }else{
  let divide = a/b;
   let mutiply=  divide * 10/100;
   input.innerHTML ="$" + mutiply.toFixed(2)
 let total= divide + mutiply
inputEl.innerHTML = "$" + total.toFixed(2)
    }
})
click2.addEventListener("click", function(){
  let a = bill.value;
  let b = peopleEl.value;
  if (peopleEl.value == 0){
     warning.innerText = "cannot be zero"
    peopleEl.style.border = "2px solid red";
    }else{
  let divide = a/b;
   let mutiply=  divide * 15/100;
   input.innerHTML ="$" + mutiply.toFixed(2)
 let total= divide + mutiply
inputEl.innerHTML = "$" + total.toFixed(2)
    }
})
click3.addEventListener("click", function(){
  let a = bill.value;
  let b = peopleEl.value;
  if (peopleEl.value == 0){
    warning.innerText = "cannot be zero"
    peopleEl.style.border = "2px solid red";
    }else{
  let divide = a/b;
   let mutiply=  divide * 20/100;
   input.innerHTML ="$" + mutiply.toFixed(2)
 let total= divide + mutiply
inputEl.innerHTML = "$" + total.toFixed(2)
    }
})
click4.addEventListener("click", function(){
  let a = bill.value;
  let b = peopleEl.value;
  if (peopleEl.value == 0){
     warning.innerText = "cannot be zero"
    peopleEl.style.border = "2px solid red";
    }else{
  let divide = a/b;
   let mutiply=  divide * 25/100;
   input.innerHTML ="$" + mutiply
 let total= divide + mutiply
inputEl.innerHTML = "$" + total.toFixed(2)
    }
})

resetEl.addEventListener("click", function(){
  bill.value ="";
  input.innerHTML ="$0.00";
  inputEl.innerHTML="$0.00"
  peopleEl.value=""
  customBtn.value=""
  
})
customBtn.addEventListener("click", function(){
  let a = bill.value;
  let b = peopleEl.value;
  if (peopleEl.value == 0){
    warning.innerText = "cannot be zero"
    peopleEl.style.border = "2px solid red";
    }else{
  let c = customBtn.value;
  let divide = a/b;
   let mutiply=  divide * c/100;
   input.innerHTML ="$" + mutiply.toFixed(2)
 let total= divide + mutiply
inputEl.innerHTML = "$" + total.toFixed(2)
    }
 
})



 
 