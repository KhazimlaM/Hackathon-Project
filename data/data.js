
document.addEventListener('DOMContentLoaded', function(){
    let getData = JSON.parse(localStorage.getItem("dataSet"));
    // get a reference to the template script tag
    var userTemplateElem = document.querySelector(".userTemplate");
     var compileTem = Handlebars.compile(userTemplateElem)
    var templateSource = document.querySelector(".userData");
console.log(getData);
    // compile the template
    // var userTemplateHtml = compileTem()   
    // templateSource.innerHTML = userTemplateHtml
});