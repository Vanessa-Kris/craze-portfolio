window.onload = document.getElementById("contact").style.display = "none";

function myFunction() {
    var x = document.getElementById("contact");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}