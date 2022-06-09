let name1 = document.querySelector(".enteredName")
const service = document.querySelector(".serv")
const date = document.querySelector(".dateForm")
const buttonElem = document.querySelector(".btns")
let data = document.querySelector('.first');
// alert(buttonElem)
var select = document.getElementById('services');
let dataSet = localStorage.getItem('clientData') ? JSON.parse(localStorage.getItem('clientData')) : [];
let depMap = localStorage.getItem('departments') ? JSON.parse(localStorage.getItem('departments')) : {};

buttonElem.addEventListener("click", function () {

  let firstName = name1.value
    // alert(date.value)
  var services = select.options[select.selectedIndex].value;
  let currentDate = new Date().toDateString();
  let appoinmentDate = date.value;

 if(depMap[services] == undefined){
  depMap[services] = 0;
 }
 depMap[services]++


  if (firstName, services, appoinmentDate) {

    dataSet.push({
      firstName, services, currentDate, appoinmentDate
    })
  }
  localStorage.setItem("clientData", JSON.stringify(dataSet))
  // alert(depMap.services)
  localStorage.setItem("departments", JSON.stringify(depMap))

})





