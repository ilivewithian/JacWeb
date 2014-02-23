$(document).ready(function () { //Start up our Featured Project Carosuel
    var interval;
    $('#featured ul')
        .roundabout({
            reflect: false,
            easing: 'easeInOutCirc',
            duration: 1300,
            minOpacity: 0.0,
            maxOpacity: 1.0
        })
        .hover(
            function () {
                // pause
				clearInterval(interval);
			},
			function () {
                // go
			    interval = startAutoPlay();
			});

    // start auto rotate
    interval = startAutoPlay();
});

function startAutoPlay() {
    return setInterval(function () {
        $('#featured ul').roundabout_animateToNextChild();
    }, 5000);
}