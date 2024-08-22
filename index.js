function tooltipfunc() {
    var popup = document.getElementById("tooltip");
    popup.classList.toggle("show");
    var btn = document.getElementById("btn");
    btn.classList.toggle("btn-active")
    var mobilepop = document.getElementById("person-info");
    mobilepop.classList.toggle("mobile-active");
}