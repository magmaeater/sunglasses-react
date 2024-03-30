import gsap from "gsap";

export const ScrollAnimation = (position, target, onUpdate) => {

    const tl = gsap.timeline();

    tl.to(position, {
        x: 11.5727606402,
        y: -0.4608802994,
        z: -2.3958832798 ,
        scrollTrigger: {
            trigger: ".sec2",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
            markers: true
        },
        onUpdate
            
    })
    .to(target, {
        x: -0.2562630469,
        y: -0.1720104815,
        z: -2.3386531185 ,
        scrollTrigger: {
            trigger: ".sec2",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
            markers: true
        },
        
            
    })
    

}