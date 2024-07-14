document.addEventListener('DOMContentLoaded', function(){

    function loadDom(newie){
  
        const li2 = document.querySelector("ul.ranked-list li ul li");
        li2.innerText = newie;
        console.log(li2.innerText)
       
    }

    loadDom(35)
})