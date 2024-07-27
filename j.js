var popbox=document.querySelector(".pop-box")
var popovr=document.querySelector(".pop-ovr")
var addpopbt= document.getElementById("bt-popup")
 
addpopbt.addEventListener("click",function(){
    popovr.style.display="block"
    popbox.style.display="block"
})

var cancelbt=document.getElementById("cancel-pop")
cancelbt.addEventListener("click", function(event){
    event.preventDefault()
    popovr.style.display="none"
    popbox.style.display="none"

})
var cont= document.querySelector(".cont")
var addbook=document.getElementById("add-bk")
var tilt= document.getElementById("tit-inp")
var aut= document.getElementById("aut-inp")
var des= document.getElementById("des-inp")


addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div= document.createElement("div")
    div.setAttribute("class","bk-cont")
    div.innerHTML= `<h2>${tilt.value}</h2>
            <h5>${aut.value}</h5>
            <p> ${des.value}</p>
            <button onclick="deletebk(event)"> Delete</button>
            `
    cont.append(div)
   popovr.style.display="none"
   popbox.style.display="none"
    

})
function deletebk(event){
    event.target.parentElement.remove()

}


