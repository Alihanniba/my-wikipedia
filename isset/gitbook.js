window.onload = function () {
    var canvas =
        '<canvas id="canv"></canvas>' +
        '<div class="sky">' +
            '<div class="clouds">'+
                '<div class="c1 one"></div>'+
                '<div class="c1 two"></div>'+
                '<div class="c1 three"></div>'+
                '<div class="c1 four"></div>'+
                '<div class="c2 one"></div>'+
                '<div class="c2 two"></div>'+
                '<div class="c2 three"></div>'+
                '<div class="c2 four"></div>'+
            '</div>'+
        '</div>'+
        '<style>'+
            'body {width: 100%;min-height: 100%;margin: 0;overflow: hidden;}'+
            'canvas {z-index: 99;position: absolute;top: 0;left: 0;bottom: 0;right: 0;background: linear-gradient(#B7B0E3, #FFD3D6); }'+
            '@keyframes anim {'+
              'from {transform: translateX(200%); }'+
              'to {transform: translateX(-200%); }' +
            '}'+
            '@keyframes anime {'+
              'from {transform: translateX(0); }'+
              'to { transform: translateX(-200%); }'+
            '}'+
            '.c1, .c2 {width: 800px;height: 700px;position: absolute;background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/131045/clouds.png") 0 0 no-repeat;background-size: 100%;z-index: 999; }'+
            '.c1.one, .c2.one {top: -260px;left: 0px; }'+
            '.c1.two, .c2.two {top: -200px;left: 100px; }'+
            '.c1.three, .c2.three {top: -240px;right: 100px; }'+
            '.c1.four, .c22.four { top: -180px;right: 0px; }'+
            '.c2 .one {top: -209px; }'+
            '@media (max-width: 1023px) {'+
              '.c2.one {left: -80px; }'+
              '.c2.two {left: -120px; }'+
              '.c2.three {right: 220px; }'+
              '.c2.four {right: 220px; } '+
            '}'+
            '.c1 {animation: anime 1000s linear infinite forwards; }'+
            '.c2 {transform: translateX(200%);animation: anim 1000s linear infinite forwards; }'+
        '</style>'+
        '<script src="./index.js"></script>';
    var div = document.getElementsByTagName('body');
    div.appendChild(canvas);
}
