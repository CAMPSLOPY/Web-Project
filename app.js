let controller;
let slideScene;

function AnimationController (){
    controller = new ScrollMagic.Controller();
    const sliders = document.querySelectorAll('.slide');
    const nav = document.querySelector('.nav-header');

    // we LOOP over the slides
    sliders.forEach(slide =>{
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
}).addIndicators()
.addTo(controller)
    });

}

AnimationController();