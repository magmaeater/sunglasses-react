import gsap from "gsap";

export const ScrollAnimation = (position, target, isMobile ,onUpdate) => {

    const tl = gsap.timeline();

    tl.to(position, {
        x: !isMobile ? -0.0487340632 : -0.3816079378,
        y: !isMobile ? 0.9870711613 : 3.4758860394,
        z: !isMobile ? 10.0163167061 : 16.0723094356 ,
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
        x: !isMobile ? -0.0437556857 : -0.0549624841,
        y: !isMobile ? -0.2135263777 : -0.5965267408,
        z: !isMobile ? 0.0886512821 : -0.3217279325,
        scrollTrigger: {
            trigger: ".sec2",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
            
        },         
    })
    .to(position, {
        x: !isMobile ? -2.8308075585: -7.7580645595,
        y: !isMobile ? 0.6858450038: 5.7245728654,
        z: !isMobile ? -5.181981393: -14.4700282245,
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
        x: !isMobile ? 0.5210938242: 0.2589888696,
        y: !isMobile ? -0.1252964741: -0.446989382,
        z: !isMobile ? -0.3196448389:  0.5235755229,
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