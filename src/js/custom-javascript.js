// ===================================
// Project: Voyages-Corsaire
// File: custom-javascript.js
// Author: Jb
// Date: 2019-03-05
// Description: Main JS file
// ===================================

// Social Media Popup
function popup(url){
    var popUpWindow = window.open(
        url,
        '',
        'height=450,width=550,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes'
    );
}

// Page Loader
var vid = document.getElementById("VideoWorker-0");
vid.onloadeddata = function() {
    var loader = $('.loader-wrapper');
    setTimeout(function () {
        loader.css('opacity', 0);
        setTimeout(function () {
            loader.remove();
        }, 1300);
    }, 500);
};

$(document).ready(function () {
    //AOS
    AOS.init();

    // Video Parallax
    var jrlx = $('.jarallax');
    jrlx.jarallax({
        speed: 0.1
    });

    jarallax(jrlx, {
        disableVideo: function () {
            return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
        }
    });

    // Countdown timer
    var countDownDate = new Date("Apr 29, 2019 17:00:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);

    // Form - SlideDown
    var cta = $(".cta-wrapper");
    var formWrapper = $(".form-wrapper");
    cta.click(function () {
        var h = formWrapper.height();
        formWrapper.css("height", "0");
        cta.css("border-radius", "0");
        cta.css("max-width", "100%");
        formWrapper.removeClass("hidden");
        // form.css("margin-top", "10rem");
        formWrapper.animate({
            height: h
        }, 500, "linear");
        setTimeout(function () {
            $("#email").focus();
        }, 800);
    });

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    // Form - Submit
    form = $('#email-form');
    form.submit(function (event) {
        event.preventDefault();
        var email = $('#email').val();
        if (email === ''){
            // Email empty
            console.log('email empty');
        } else {
            // Email not empty
            console.log('email not empty');
            if (!isEmail(email)) {
                // Email not valid
                console.log('email not valid');
            } else {
                // Email valid
                console.log('email valid');
                $('#form-btn').hide();
                $('.input-wrapper').animate({
                    opacity: 0,
                    height: 0
                }, 200);
                $('#thank-you').animate({opacity: 100},200)
            }
        }
    });


    //Social Media
    // TODO: Social media window size
    // - FB
    $(".facebook>a").click(function(){
        window.open("https://www.facebook.com/sharer/sharer.php?u="+window.location.href+"&t="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=300');
    });
    // - TWITTER
    // var getWindowOptions = function() {
    //     var width = 500;
    //     var height = 350;
    //     var left = (window.innerWidth / 2) - (width / 2);
    //     var top = (window.innerHeight / 2) - (height / 2);
    //
    //     return [
    //         'resizable,scrollbars,status',
    //         'height=' + height,
    //         'width=' + width,
    //         'left=' + left,
    //         'top=' + top,
    //     ].join();
    // };
    // var twitterBtn = document.querySelector('.twitter');
    // var text = encodeURIComponent('Go and check out this contest to win a free tour of Saint Malo ! #guidest');
    // var shareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent("https://guidest.000webhostapp.com/") + '&text=' + text;
    // twitterBtn.href = shareUrl; // 1
    //
    // twitterBtn.addEventListener('click', function(e) {
    //     console.log('click');
    //     e.preventDefault();
    //     var win = window.open(shareUrl, 'ShareOnTwitter', getWindowOptions());
    //     win.opener = null; // 2
    // });
});
