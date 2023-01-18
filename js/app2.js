$(".click").click(function(){
    $(".hiden").show();
    // $("#jalan").addClass('.lala')
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