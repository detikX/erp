$(".click").click(function() {
    $(".hiden").show();
    // $("#jalan").addClass('.lala')
})

$(document).ready(function() {
    new WOW().init();
})

// var triangle = document.getElementById("triangle");
// var length = triangle.getTotalLength();

// triangle.style.strokeDasharray = length;

// // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
// triangle.style.strokeDashoffset = length;

// // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
// window.addEventListener("scroll", myFunction);

// function myFunction() {
// var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

//   var draw = length * scrollpercent;

//   // Reverse the drawing (when scrolling upwards)
//   triangle.style.strokeDashoffset = length - draw;
// }

//kayak faq
$('.kategori-item').click(function(event) {
    var id = $(this).attr('id');
    var toShow = '#show-' + id;

    $('.dashboard-content').not(toShow).hide();
    $(toShow).fadeIn();
});

$(".to-peta").click(function() {
    $('html,body').animate({
            scrollTop: $(".mapsx").offset().top
        },
        600);
})

//scroll trigger
gsap.registerPlugin(ScrollTrigger);

var targetsEndTrigger = document.querySelectorAll(".endtrigger");

var targetsHeight = document.querySelectorAll(".height");

var targetsBreak = document.querySelectorAll(".break");

targetsEndTrigger.forEach((target, index) => {
    const pinSpacing = index === targetsEndTrigger.length - 1 ? "true" : false;
    const endTrigger = `#card${index + 1}`
    const opacityFirst = index === 0 ? 1 : 0;
    const opacitySecond = index === targetsEndTrigger.length - 1 ? 1 : 0;
    const tl = gsap
        .timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: target,
                pin: true,
                scrub: true,
                start: "center center",
                // end,
                endTrigger,
                markers: false,
                toggleActions: "restart none reverse reset",
                pinSpacing,
            },
        })
        .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
        .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
});

targetsHeight.forEach((target, index) => {
    const pinSpacing = index === targetsHeight.length - 1 ? "true" : false;
    const end =
        index === targetsHeight.length - 1 ?
        `+=${target.offsetHeight}px` :
        `+=${targetsHeight[index + 1].offsetHeight}px`;
    const opacityFirst = index === 0 ? 1 : 0;
    const opacitySecond = index === targetsHeight.length - 1 ? 1 : 0;
    const tl = gsap
        .timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: target,
                pin: true,
                scrub: true,
                start: "center center",
                end,
                markers: false,
                toggleActions: "restart none reverse reset",
                pinSpacing,
            },
        })
        .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
        .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
});

targetsBreak.forEach((target, index) => {
    const pinSpacing = index === targetsBreak.length - 1 ? "true" : false;
    const end =
        index === targetsBreak.length - 1 ?
        `+=${target.offsetHeight}px` :
        `+=${targetsBreak[index + 1].offsetHeight}px`;
    const opacityFirst = index === 0 ? 1 : 0;
    const opacitySecond = index === targetsBreak.length - 1 ? 1 : 0;
    const tl = gsap
        .timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: target,
                pin: true,
                scrub: true,
                start: "center center",
                end,
                markers: false,
                toggleActions: "restart none reverse reset",
                pinSpacing,
            },
        })
        .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
        .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
});

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        alert('windows phone');
    }

    if (/android/i.test(userAgent)) {
        alert('android');
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        alert('iphone');
    }

    return "unknown";
}