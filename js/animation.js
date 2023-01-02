gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({Defaults: { Easing: Expo.EaseOut}});
     tl.from('.bg',{ opacity:0, duration:2, ease: Expo.easeOut,delay: 0.2 })
       .to('.text-reveal',{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, stagger: .3, duration: 1}, "-=2.5")
       .to('.image-reveal', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',y:0, stagger: 1, opacity: 1, duration: 1} )
      
     const boxes = gsap.utils.toArray('.box');
      boxes.forEach(box => {
     gsap.to(box, {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',y: 0, stagger: .3, opacity: 1, duration: 2,
    scrollTrigger: {
      trigger: box,
      start: "top center",
    }
  })
});
      const reveals= gsap.utils.toArray('.reveal');
      reveals.forEach(reveal => {
     gsap.to(reveal, {x: 0, stagger: .3, opacity: 1, duration: 1,
    scrollTrigger: {
      trigger:reveal,
     start: "top center"
    }
  })
});
 const images= gsap.utils.toArray('.images');
      images.forEach(images => {
     gsap.to(images, {x: 0, stagger: .3, opacity: 1, duration: 1,
    scrollTrigger: {
      trigger:images,
      start: "top center"
    }
  })
});
 
