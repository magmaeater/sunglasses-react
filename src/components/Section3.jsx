import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Section3 = () => {
  const h1Ref = useRef(null);

  useEffect(() => {
    const h1 = h1Ref.current;

    // Initialize GSAP animation timeline
    const tl = gsap.timeline({ paused: true });

    // Set initial state
    gsap.set(h1, { x: "-100%", opacity: 0 });

    // Define animation
    tl.to(h1, {
      x: "0%",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    const handleScroll = () => {
      const h1Rect = h1.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (
        h1Rect.top + h1Rect.height / 2 < windowHeight &&
        h1Rect.bottom > windowHeight / 2
      ) {
        tl.play(); // Play animation when the h1 is in the viewport
      } else {
        tl.reverse(); // Reverse animation when the h1 is out of the viewport
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="section3">
      <div className="w-full h-screen bg-[#FFF8EC]">
        <div className="flex justify-end mr-10">
          <img src={"/four_dot.png"} alt="" />
        </div>
        <div>
          <div className="font-lora italic text-3xl lg:text-6xl ml-5 lg:ml-16 mt-14 font-bold text-[#502E23] flex justify-end mr-[100px]">
            Behind the Shades: Crafting Excellence
          </div>
        </div>
        <div className="relative flex flex-col justify-end items-center lg:items-start lg:justify-start mt-96 lg:mt-32">
          <div
            ref={h1Ref}
            className="w-[310px] lg:w-[448px] h-[270px] lg:h-[470px] px-6 lg:px-0 lg:ml-28 flex items-center"
          >
            <h1 className="font-qsans font-bold lg:font-normal text-xl lg:text-[32px] leading-[30px] lg:leading-[47px] text-center lg:text-left">
              <span className="text-[#FAB000]">
                At Shades 360, we start with premium, sustainable materials for
                durability.
              </span>{" "}
              <span className="text-[#502E23]">
                Our lenses undergo rigorous UV protection testing. Skilled
                artisans meticulously craft each frame to perfection. From
                concept to creation, our sunglasses embody quality craftsmanship
                and timeless style.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
