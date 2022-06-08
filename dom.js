let name1 = document.querySelector(".enteredName")
const service = document.querySelector(".serv")
const date = document.querySelector(".dateForm")
const button = document.querySelector(".btns")
let data = document.querySelector('.first');



button.addEventListener("click", function(){
    let DataSet = []
    // alert('hello');
    let firstName = name1.value
    alert(firstName)
    var select = document.getElementById('services');
    var value = select.options[select.selectedIndex].value;
    let currentDate = new Date().toDateString();
    // data.value  = name1.value +  value + currentDate.toDateString()
    // document.getElementById('value').value = option.value;
    DataSet.push({
        firstName, value, currentDate
    })

  localStorage.setItem("dataSet",  JSON.stringify(DataSet))

    // alert(name1.value + " " +  value + " " + currentDate.toDateString())
})

function getDat() {

    
}