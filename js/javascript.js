$(function(){
    // preloader

    window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded_hiding');
        }, 500);
      }

    // nav-menu

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 75) $('#nav').addClass('fix');
        else $('#nav').removeClass('fix');
    });

    // Animation while scrolling

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }

    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements1 = document.querySelectorAll('.element-animation1');
    let elements2 = document.querySelectorAll('.element-animation2');
    let elements3 = document.querySelectorAll('.element-animation3');

    for (let elm of elements1) {
        observer.observe(elm);
    }

    for (let elm of elements2) {
        observer.observe(elm);
    }

    for (let elm of elements3) {
        observer.observe(elm);
    }
});