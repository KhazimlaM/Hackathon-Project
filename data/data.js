
document.addEventListener('DOMContentLoaded', function(){

    var userTemplateElem = document.querySelector(".userTemplate").innerHTML;
    var compileTem = Handlebars.compile(userTemplateElem);
    let getData = JSON.parse(localStorage.getItem("clientData"));
    // get a reference to the template script tag
    var templateSource = document.querySelector(".userData");
console.log(typeof getData);
    // compile the template
    var userTemplateHtml = compileTem({userData : getData})   
    console.log(userTemplateHtml)
    templateSource.innerHTML = userTemplateHtml
});