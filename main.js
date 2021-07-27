// ============= jquery ===========

// == Scrolling Effect ==

//  $(function(){
//     $(window).on("scroll", function() {
//           if($(window).scrollTop() > 10) {
//                 $('header').addClass('red');
//           }

//           else {
//                 $('header').removeClass('white');
//           }
//     })
//   });

// === ===reveal nav on scroll === ===

// $(function () {
//     const body = document.body
//     let lastScroll = 0;

//     window.addEventListener('scroll', () => {
//         const currentScroll = window.pageYOffset;

//         if (currentScroll <= 0) {
//             body.classList.remove("scroll-up");
//             return;
//         }

//         if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
//             body.classList.remove("scroll-up");
//             body.classList.add("scroll-down");
//         }

//         else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
//             body.classList.remove("scroll-down");
//             body.classList.add("scroll-up");
//         }


//         lastScroll = currentScroll;
//     })
// });

// by online tutorial
var zero = 0;
$(document).ready(function () {
    $(window).on('scroll', function () {
        $('header').toggleClass('scroll-down', $(window).scrollTop() > zero);
        zero = $(window).scrollTop();
    });
})
// == active nav ==

$(function () {
    $('.menu li').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
})

//== page load animation ==

// $(window).on('load',function(){
//           $('#loader-container').fadeOut();
//       });

// == on load page from start ==

$(window).on('beforeunload', function () {
    $('body').hide();
    $(window).scrollTop(0);
});

// == social media side-menu ==

$(document).ready(function () {
    $('.toggle-btn').click(function () {
        $('main').toggleClass('active');
        $(this).toggleClass('fa-chevron-right');
    })
})

// ==== ui info show up ===

$(document).ready(function () {
    $('.ui-msg').append('<span class="ui-x">X</span>');

    $('.ui-msg').hide();
    $(function () {
        $('.ui-x').click(function () {
            $(this).parent('.ui-msg').slideUp(200);
        })
    })

    $(function () {
        $('.ui-fade').click(function () {
            $(this).next('.ui-msg').slideDown(200);
        })
    });
});

// == background color switch button ==

$(function () {
    $('.chk-btn').click(function () {
        $('#learn').toggleClass('bg-c');
    })
})

//== button hover ==

$(document).ready(function () {
    $('.ui-fade').mouseenter(function () {
        $(this).css({ 'transform': 'scale(1.2)', 'transition': 'transform 1s steps(5, end)' })
    })
    $('.ui-fade').mouseleave(function () {
        $(this).css({ 'transform': 'scale(1)', 'transition': 'transform 1s steps(5, end)' })
    })
});

// cursor hover

$(document).ready(function () {
    $('a').mouseenter(function () {
        $('.cursor').css('transform', 'scale(0.8)');
    })
    $('a').mouseleave(function () {
        $('.cursor').css('transform', 'scale(0.6)');
    })
})
// ==== go-to top button=====

$(document).ready(function () {

    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('#back-top').fadeIn(500);
            } else {
                $('#back-top').fadeOut(500);
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});

// custom scroll bar horizontal
$(function () {
    $('#progressbar-hoz').hide();
});
$(window).scroll(function () {
    $('#progressbar-hoz').show();
    var scroll = $(window).show().scrollTop(),
        dh = $(document).height(),
        wh = $(window).height();
    scrollPercent = (scroll / (dh - wh)) * 100;
    $('#progressbar-hoz').css('width', scrollPercent + '%');
})
//   ==================== java-script =============

// == loader animation ==

// // with css
// var loader = document.getElementById("loader-container");

// window.addEventListener("load", function () {
//   loader.style.display = "none";
// })

// with gif

// var loader = document.querySelector('#loader');

// window.addEventListener("load", vanish);

// function vanish(){
//   loader.classList.add('disappear')
// }

// loader animation
var loader = document.getElementById("loader");

window.addEventListener("load", function () {
    loader.style.display = "none";
});

// ==== cursor animation ====

// easy tutorials
var cursor = document.querySelector(".cursor");

document.onmousemove = function (e) {
    cursor.style.left = (e.pageX - 25) + "px";
    cursor.style.top = (e.pageY - 25) + "px";
    cursor.style.display = 'block'
}

// === cursor click hover effects===
// design course
document.addEventListener('click', () => {
    cursor.classList.add("cursor-expand");
    setTimeout(() => {
        cursor.classList.remove('cursor-expand');
    }, 500)
})