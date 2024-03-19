var swiper = new Swiper(".mySwiper",{
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
  var windowheight = $(window).height();
  // var navbarheight = $(".header").innerHeight();

  
  // for button slider
   
  // $(".swiper-button-next").click(function(){
  //   $(".words-up").removeClass("animate__bounceInDown");
  //   $(".words-up").addClass("animate__bounceInDown");
  // });
  // $(".swiper-button-prev").click(function(){
  //   $(".words-up").removeClass("animate__bounceInDown");
  //   $(".words-up").addClass("animate__bounceInDown");
  // });

// document.querySelector(".swiper-button-next").onclick=
//  function(){
//    if(document.querySelector(".words-up"){

//    })
//  }
// Get the navbar
var navbar = document.getElementById("navbar");

var best = document.getElementById("best-services");


// Get the offset position of the navbar
var navy = best.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove the sticky class when you leave the scroll position.
function myFunction() {
  if (window.pageYOffset  >= navy) {
navbar.css("postion","fixed")
}}