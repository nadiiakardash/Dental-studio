import $ from "jquery";
require('./slick/slick');
import '../bootstrap/js/bootstrap.min.js';

window.openNav = function () { openNav() };
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.position = "fixed";
 
}
window.closeNav = function () { closeNav() };
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.position = "none";
  
}

window.btnOver = function () { btnOver() };
function btnOver() {
    document.getElementById("minus").style.display = "none";
    document.getElementById("plus").style.display = "block";
    $('.price-do').hide( "slow");
}
window.btnOver2 = function () { btnOver2() };
function btnOver2() {
    document.getElementById("minus").style.display = "block";
    document.getElementById("plus").style.display = "none";
    $('.price-do').show( "slow");
}


window.allTeeth = function () { allTeeth() };
function allTeeth() {
    document.getElementById("minus2").style.display = "block";
    document.getElementById("plus2").style.display = "none";
    $('.price-do2').show( "slow");
}
window.allTeeth2 = function () { allTeeth2() };
function allTeeth2() {
    document.getElementById("minus2").style.display = "none";
    document.getElementById("plus2").style.display = "block";
    $('.price-do2').hide( "slow");
}        
  
 
window.allVeneers = function () { allVeneers() };
function allVeneers() {
    document.getElementById("minus3").style.display = "block";
    document.getElementById("plus3").style.display = "none";
    $('.price-do3').show( "slow");
}
window.allVeneers2 = function () { allVeneers2() };
function allVeneers2() {
    document.getElementById("minus3").style.display = "none";
    document.getElementById("plus3").style.display = "block";
    $('.price-do3').hide( "slow");
}   


    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        prevArrow: $('.prev-ar'),
        nextArrow: $('.next-ar'),
      });
