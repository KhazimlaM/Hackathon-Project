let name1 = document.querySelector(".enteredName")
const service = document.querySelector(".serv")
const date = document.querySelector(".dateForm")
const button = document.querySelector(".btns")
let data = document.querySelector('.first');

var select = document.getElementById('services');
let dataSet = localStorage.getItem('clientData') ? JSON.parse(localStorage.getItem('clientData')) : [];


button.addEventListener("click", function () {

  // alert('hello');
  let firstName = name1.value
  // alert(firstName)
  var services = select.options[select.selectedIndex].value;
  let currentDate = new Date().toDateString();
  // data.value  = name1.value +  value + currentDate.toDateString()
  // document.getElementById('value').value = option.value;


  if (firstName, services, currentDate) {

    dataSet.push({
      firstName, services, currentDate
    })
  }
  localStorage.setItem("clientData", JSON.stringify(dataSet))

})

