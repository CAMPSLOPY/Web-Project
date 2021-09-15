let controller;
let slideScene;
let pageScene;

function AnimationController (){
    controller = new ScrollMagic.Controller();
    const sliders = document.querySelectorAll('.slide');
    const nav = document.querySelector('.nav-header');

    // we LOOP over the slides
    sliders.forEach((slide,index,slides) => {
        // selecting more elements from our workflow
     const revealImg = slide.querySelector('.reveal-img');
     const revealTxt = slide.querySelector('.reveal-text');
     const img = slide.querySelector('img');
    //  lets chain our elements with gsap Timeline
    const slideTl = gsap.timeline({defaults: {duration:1, ease:"power2.inOut"}});
    slideTl.fromTo(revealImg, {x:"0%"}, {x:"100%"});
    slideTl.fromTo(img, {scale: 2}, {scale: 1}, '-=1');
    slideTl.fromTo(revealTxt, {x:"0%"}, {x:"100%"}, '-=0.80');
    slideTl.fromTo(nav,{y:"-100%"}, {y:"0%"}, '-=0.5')

    // lets create the Scene
slideScene = new ScrollMagic.Scene({
    triggerElement: slide,
    triggerHook: 0.25,
    reverse: false,
}).setTween(slideTl)
.addIndicators({
    colorStart: "white",
    name: "CAMP",
    colorTrigger: "red",
})
.addTo(controller)


// NEW ANIMATION FOR PAGE SCROLL
const pageSliders = gsap.timeline();
const nextSlide = slide.length - 1 === index ? 'end' : slides[index + 1 ]
pageSliders.fromTo(slide, {opacity: 1, scale:1}, {opacity: 0, scale: 0});

pageScene = new ScrollMagic.Scene({
    triggerElement: slide,
    duration: "100%",
    triggerHook: 0,
})
.addIndicators({
    colorStart: "yellow",
    name: "PAGE-CAMP",
    colorTrigger: 'purple',
    indent: 200,
}).setTween(pageSliders)
.setPin(slide, {pushFollowers: false})
.addTo(controller)
});
}

AnimationController();