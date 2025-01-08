function myNav() {
    var x = document.getElementById("navigation");
    var y = document.getElementById("daftar-akun");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
} 