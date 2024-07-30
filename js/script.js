$(document).ready(function () {

    console.log($(".main-banner .slider-banner .owl-carousel").attr('class'));

    $(function () {
        // Owl Carousel
        var owl1 = $(".main-banner .slider-banner .owl-carousel");
        owl1.owlCarousel({
            items: 1,
            // margin: 2,
            loop: true,
            nav: false,
            dots: false,
            autoplay: 500,

        });
    });

    $(function () {
        // Owl Carousel
        var owl2 = $(".header-ad-banner .slider-banner .owl-carousel");
        owl2.owlCarousel({
            items: 2,
            // margin: 2,
            loop: true,
            nav: false,
            dots: false,
            autoplay: 50,

        });
    });


    document.getElementById('categories').addEventListener('change', function() {
        var cat_select_box = document.getElementById('category-search-bar');
        var secondSelect = document.getElementById('subcategories');
        $("html, body").animate({ scrollTop:0 }, "9000");

        console.log("test");
        console.log(this.value);

        if (this.value === 'Doctors') {
            cat_select_box.classList.remove("col-span-2");
            cat_select_box.classList.add("col-span-1");
             secondSelect.style.display = 'block';
        } else {
        secondSelect.style.display = 'none';
            cat_select_box.classList.add("col-span-2");
            cat_select_box.classList.remove("col-span-1");
        }
        });
        document.getElementById('subcategories').addEventListener('change', function() {
            $("html, body").animate({ scrollTop:0 }, "9000");
            });

    window.openModal = function (modalId) {
        document.getElementById(modalId).style.display = 'flex'
        document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
    }

    window.closeModal = function (modalId) {
        document.getElementById(modalId).style.display = 'none'
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
    }
    // on click modal finish

    // 



    let input = document.querySelector(".input");
    let slider_box = document.querySelector(".slider_box");
    let slider = document.querySelector(".slider");
    let placeholder = document.querySelector(".placeholder");

    let list = ["Doctors", "Paramedics", "Pharmacy", "Pathology","Radiology"];
    let i = 0;
    let intervals = "";
    text_animation();
    setintervals();
    // This below javascript line is give height to slider_box class. It won't get its inner element height (slider class), because it set to position absolute.
    // slider_box.style.height = slider.clientHeight + "px";
    console.log(slider.clientHeight + "px");
    function setintervals() {
        intervals = setInterval(() => {
            text_animation();
            console.log("started");
        }, 2500);
    }

    function text_animation() {
        i++;
        slider.innerHTML = list[i - 1];
        slider.style.opacity = "1";
        slider.style.left = "0px";
        setTimeout(() => {
            slider.style.opacity = "0";
            slider.style.left = "-5px";
        }, 2000);
        if (list.length == i) {
            i = 0;
        }
    }

    // Functionality to hide custom placeholder when input field is focused or it has value inside it.
    input.onfocus = function () {
        placeholder.style.display = "none";
        clearInterval(intervals);
    }
    input.onblur = function () {
        if (input.value == "") {
            placeholder.style.display = "flex";
            i = 0;
            text_animation();
            setintervals();
            document.querryselector(".search_bar_subcat").style.display = "flex";
        }
    }
    // 

    

});