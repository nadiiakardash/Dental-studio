import $ from "jquery";
require('./slick/slick');
import '../bootstrap/js/bootstrap.min.js';
window.openNav = function () { openNav() };
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.position = "fixed";
    document.getElementById("for-mobile").style.opacity = "0";
    
}
window.closeNav = function () { closeNav() };
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.position = "none";
    document.getElementById("for-mobile").style.opacity = "1";
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

 
window.langShow = function () { langShow() };
function langShow() { 
    $('.arrow-lang').css("transform","rotate(180deg)");
    $('.ukr-lang').css("display","block");
    $('.rus-lang').css(" padding-bottom","33px");
}  
window.langHide = function () { langHide() };
function langHide() {
    $('.arrow-lang').css("transform","rotate(0deg)");
    $('.ukr-lang').css("display","none");
    $('.rus-lang').css(" padding-bottom","0px");
}  

window.changeCity = function () { changeCity() };
function changeCity() {
    $('.head_address').css("display","none");
    $('#odessa').css("display","block");
    
}
window.changeCityKyiv = function () { changeCityKyiv() };
function changeCityKyiv() {
    $('.head_address').css("display","block");
    $('#odessa').css("display","none");
    
}
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        prevArrow: $('.prev-ar'),
        nextArrow: $('.next-ar'),
      });
      $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 0;
        $('body,html').animate({ scrollTop: top }, 1600);
      
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
        $('.arrow-top').fadeIn();
        $('.arrow-top').css('position','fixed');
 
       
        } else {
        $('.arrow-top').fadeOut();
       
        }
    })
        $('.arrow-top').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        $('.t825__icon').click(function () {
            $('.t825__animated-circle').css('background','white');
            $('.t825__icon').css('dispay','none');
            $('.t825__icon-close').css('display','block');
            $('.network-content').fadeIn();
        });
        
        $('.t825__icon-close').click(function () {
            $('.t825__animated-circle').css('background','#0fa6da');
            $('.t825__icon').css('dispay','block');
            $('.t825__icon-close').css('display','none');
            $('.network-content').fadeOut();
        });