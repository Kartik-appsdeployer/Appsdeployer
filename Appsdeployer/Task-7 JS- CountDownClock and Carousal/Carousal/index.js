$(".feedbackSliderArea").owlCarousel({
    autoplay:true,
    slideSpeed: 3000,
    items: 3,
    nav: true,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    margin: 30,
    dots: false,
    responsive:{
        320:{
            items:1
        },
        767:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items: 3
        }
    }
})