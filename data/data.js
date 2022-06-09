
document.addEventListener('DOMContentLoaded', function(){

    var userTemplateElem = document.querySelector(".userTemplate").innerHTML;
    var compileTem = Handlebars.compile(userTemplateElem);
  // get a reference to the template script tag
    var templateSource = document.querySelector(".userData");
    // compile the template
    let getData = localStorage.getItem('clientData') ? JSON.parse(localStorage.getItem('clientData')) : [];
    let depMap = localStorage.getItem('departments') ? JSON.parse(localStorage.getItem('departments')) : {};
const objectKeys = Object.keys(depMap)
const objectValues = Object.values(depMap)
// alert(objectValues)
    var userTemplateHtml = compileTem({userData : getData})   
    templateSource.innerHTML = userTemplateHtml


    const chartElem = document.getElementById('myChart')




const myChartElem = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(myChartElem, {
    type: 'bar',
    data: {
            labels: objectKeys,
        datasets: [{
            label: 'Home Affairs Statistics',
            data: objectValues,
            backgroundColor: [
                'rgba(255, 99, 132,)',
                'rgba(226, 69, 35)',
                'rgba(143, 175, 34 )',
                'rgba(175, 83, 34 )',
                'rgba(11, 48, 122)',
            
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

});