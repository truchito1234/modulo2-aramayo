//Get the button
var mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    mybutton = document.getElementById("back-to-top");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    mybutton.style.backgroundColor = "#5fa8d3";
}