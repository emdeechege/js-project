//alert("Hello World")
$(document).ready(function() {
    $("form#favorite").submit(function (event) {
        event.preventDefault()
        var userInput=$("input#favColor").val()
       console.log(userInput);
       $("p.display").text(userInput)
       
    })
})