function ready() {
    var animation = document.getElementById("animation");
    var pause = document.getElementById("pause");
    var pauseOutput = document.getElementById("pause-value");
    pauseOutput.innerHTML = pause.checked;

    pause.onchange = function() {
        pauseOutput.innerHTML = pause.checked;

        if(pause.checked == false) {
            animation.style.webkitAnimationPlayState = 'running';
        } else {
            animation.style.webkitAnimationPlayState = 'paused';
        }
    }
}