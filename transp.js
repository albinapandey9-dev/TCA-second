let step = 0;

function changeCircle() {
    step++;

    if (step == 1) {
        document.getElementById("circle").style.opacity = "0.75";
    }
    else if (step == 2) {
        document.getElementById("circle").style.opacity = "0.5";
    }
    else if (step == 3) {
        document.getElementById("circle").style.opacity = "0.25";
    }
    else if (step == 4) {
        document.getElementById("circle").style.opacity = "0";
    }
}