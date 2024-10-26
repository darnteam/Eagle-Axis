import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const NumberFlipper = ({ n, title }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? n : 0, // Start animation when inView is true
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div  ref={ref}>
      <div
        
        className="inline-block font-black  rounded-2xl p-3 mt-6 w-50 text-primaryYellow text-6xl hover:shadow-md transition duration-300 text-center"
        >
        <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
      </div>
    </div>
  );
};

export default NumberFlipper;
