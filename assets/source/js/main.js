

// FOR NAVBAR FIXED WHEN SCROLL
$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 150){
        $(".navbar").addClass("navbar-fixed");
    }else{
        $(".navbar").removeClass("navbar-fixed");
    }
});


// FOR NAVBAR ACTIVE MENU
$(".nav-item").on("click", function(){
    $("li.nav-item").removeClass("active");
    $(this).addClass("active");
});


// FOR RESUME CATEGORY ACTIVE BUTTON
$(".cate-btn").on("click", function(){
    $(".cate-btn").removeClass("active");
    $(this).addClass("active");
});


// FOR RESUME CATEGORY ACTIVE CONTENT
function filter(active) {
    hide = document.getElementsByClassName('cate-active');
    for (i = 0; i < hide.length; i++) {
      hide[i].style.display = 'none';
    }
  
    let show = document.getElementsByClassName(active);
    for (i = 0; i < hide.length; i++) {
      show[i].style.display = 'block';
    }
}

// FOR FAQ SECTION ACCORDION
jQuery(document).ready(function($){
    var panels = $(".faq-ans").hide();
    panels.first().show();
    
     $(".faq-que").click(function(){
         var $this = $(this);
         panels.slideUp();
         $this.next().slideDown();
    });
});


// FOR PORTFOLIO CATEGORY ACTIVE MENU
$(".menu").on("click", function(){
    $(".menu").removeClass("active");
    $(this).addClass("active");
});
  

// FOR PORTFOLIO PAGINATION
$(".page-link").on("click", function(){
    $(".page-link").removeClass("active");
    $(this).addClass("active");
});
  



// // FOR PASSWORD HIDE & SHOW
// $(".eye").on('click', function(){
//     $(".eye").toggleClass("fa-eye-slash");
//     $(".eye").toggleClass("fa-eye");

//     var input = $("#pass");
//     if (input.attr("type") === "password") {
//         input.attr("type", "text");
//     }
//     else {
//         input.attr("type", "password");
//     }
// });


// // FOR NAVBAR WIDGET ICON TAB TOGGOLE
// $(".navbar-widget li").on("click", function(){
//     $(".navbar-widget li").removeClass("active");
//     $(this).addClass("active");
// });


// // FOR SIDEBAR SHOW & HIDE FROM RIGHT SIDE
// $(".navbar-user").on("click", function(){
//     $(".sidebar-part").addClass("active");
//     $(".cross-btn").on('click', function(){
//         $(".sidebar-part").removeClass("active");
//     });
// });

// // FOR USER EIDT OPTION HIDE & SHOW
// $(".edit-btn").on('click', function(){
//     $(".edit-option").addClass("active");
//     $(".cancel").on('click', function(){
//         $(".edit-option").removeClass("active");
//     })
// })


// // FOR ABOUT CATEGORY CONTENT
// let tabButton = document.querySelectorAll(".tab-btn");
// let tabPanel = document.querySelectorAll(".tab-panel");

// function showPanel(panelIndex) {
//     tabPanel.forEach(function(node){
//         node.style.display = "none";
//     });
//     tabPanel[panelIndex].style.display = "block";
// }
// showPanel(0);



// // for preloader none when complete load
// window.addEventListener("load", function(){
//     var preload = document.querySelector(".preloader");
//     preload.classList.add("finish__load");
// });









// //for portfolio menu hover active when click
// $(".menu").on("click", function(){
//     $(".menu").removeClass("active");
//     $(this).addClass("active");
// });


// //FOR DOCUMENTATION QUESTION BAR FIXED
// $(window).on("scroll", function(){
//     var scrolling = $(this).scrollTop();
//     if (scrolling > 450){
//         $(".doc-que").addClass("doc-active");
//     }else{
//         $(".doc-que").removeClass("doc-active");
//     }
// });


// // FOR POPUP LOGIN FORM
// $(".login-btn").on('click', function(){
//     $(".login-part").addClass("active");
//     $(".login-cross").on('click', function(){
//         $(".login-part").removeClass("active");
//     })
// })











