$(document).ready(function() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var cw = c.width = 400;
    var ch = c.height = 250;
    var cx = cw / 2, cy = ch / 2;
    var rad = Math.PI / 180;
    var w = 400;
    var h = 200;
    var phi = 0;
    var frames = 0;
    var stopped = true;

    var ampSlider = document.getElementById("amp-slider");
    var ampOutput = document.getElementById("amp-value");
    ampOutput.innerHTML = ampSlider.value;

    var freqSlider = document.getElementById("freq-slider");
    var freqOutput = document.getElementById("freq-value");
    freqOutput.innerHTML = freqSlider.value/100;

    var invert = document.getElementById("invert");
    var invertOutput = document.getElementById("invert-value");
    invertOutput.innerHTML = invert.checked;

    ampSlider.oninput = function() {
        ampOutput.innerHTML = this.value;
    }

    freqSlider.oninput = function() {
        freqOutput.innerHTML = this.value/100;
    }

    invert.onchange = function() {
        invertOutput.innerHTML = invert.checked;
    }

    function Draw() {
        frames++
        phi = frames / 30;
        ctx.clearRect(0, 0, cw, ch);
        ctx.beginPath();
        for (var x = 0; x < w; x++) {
            if(invert.checked) {
                ctx.strokeStyle = "#fff";
                y = Math.cos(x * freqSlider.value/100 + phi) * ampSlider.value / 2 + ampSlider.value / 2;
            } else {
                ctx.strokeStyle = "#000";
                y = Math.sin(x * freqSlider.value/100 + phi) * ampSlider.value / 2 + ampSlider.value / 2;
            }            
            ctx.lineTo(x, y + 40);
        }
        ctx.stroke();
        callback();
    }

    function callback() {
        requestId = window.requestAnimationFrame(Draw);
    }

    requestId = window.requestAnimationFrame(Draw);
});
