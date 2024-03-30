import "./section-2.css";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
const Section2 = () => {
  const subtextRef = useRef(null);

  useEffect(() => {
    const subtext = subtextRef.current;

    // Initialize GSAP animation timeline
    const tl = gsap.timeline({ paused: true });

    // Set initial state
    gsap.set(subtext, { x: "-100%", opacity: 0 });

    // Define animation
    tl.to(subtext, {
      x: "0%",
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    const handleScroll = () => {
      const subtextRect = subtext.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (
        subtextRect.top + subtextRect.height / 2 < windowHeight &&
        subtextRect.bottom > windowHeight / 2
      ) {
        tl.play(); // Play animation when the subtext is in the viewport
      } else {
        tl.reverse(); // Reverse animation when the subtext is out of the viewport
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sec2">
      <div className="discover">
        <div>Discover the Shades 360 story</div>
        <div className="dots">
          <img src={"/four_dot.png"} alt="" />
        </div>
      </div>

      <div ref={subtextRef} className="subtext">
        Born in LA, Shades 360 is the fusion of fashion and function. Our
        mission was to craft sunglasses that elevate your style and protect your
        eyes.
        <br />
        <span>From city streets to sandy shores, we've got you covered.</span>
      </div>
    </div>
  );
};

export default Section2;
