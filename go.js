function changeload() {
    var load = document.getElementById("load");
    alert(element.value);
}
function ok() {
    var ok = document.getElementById("ok");
    ok.addEventListener('click', changeload);
    alert(ok.value);
}   
document.addEventListener('DOMContentLoaded',ok);

