import gsap from "gsap";

export const ScrollAnimation = (position, target, onUpdate) => {

    const tl = gsap.timeline();

    tl.to(position, {
        x: -0.0487340632,
        y: 0.9870711613,
        z: 10.0163167061 ,
        scrollTrigger: {
            trigger: ".sec2",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
            
        },
        onUpdate
            
    })
    .to(target, {
        x: -0.0437556857,
        y: -0.2135263777,
        z: 0.0886512821 ,
        scrollTrigger: {
            trigger: ".sec2",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
            
        },         
    })
    .to(position, {
        x: -2.8308075585,
        y: 0.6858450038,
        z: -5.181981393 ,
        scrollTrigger: {
            trigger: ".section3",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
            
        },
        onUpdate
            
    })
    .to(target, {
        x: 0.5210938242,
        y: -0.1252964741,
        z: -0.3196448389 ,
        scrollTrigger: {
            trigger: ".section3",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
            
        },         
    })
    .to(position, {
        x: -3.019965699,
        y: -0.9230120409,
        z: -5.9265878581 ,
        scrollTrigger: {
            trigger: ".section4",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
            
        },
        onUpdate
            
    })
    .to(target, {
        x: 0.1571965374,
        y: -1.9897959851,
        z: -0.4681513743 ,
        scrollTrigger: {
            trigger: ".section4",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
            
        },         
    })
    

}