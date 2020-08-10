(function () {
    var initAnimationStopper = function initAnimationStopper() {
        var resizeTimer;
        var style = document.createElement('style');
        var css = '.resize-animation-stopper *, .resize-animation-stopper *:after, .resize-animation-stopper *:before { animation-duration: 0s !important; transition-duration: 0s !important;}';
        style.innerHTML = css;
        document.head.appendChild(style);

        window.addEventListener("resize", function () {
            document.body.classList.add("resize-animation-stopper");
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                document.body.classList.remove("resize-animation-stopper");
            }, 600);
        });
    }

    window.initAnimationStopper = initAnimationStopper;
})();