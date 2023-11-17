import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const TypewriterText = ({ text }) => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    reset: true,
    onRest: () => setIsVisible(false),
  });

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setIndex(index + 1);
        setIsVisible(true);
      }, 100); // Adjust the typing speed here

      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return <animated.p style={props}>{text.substring(0, index)}</animated.p>;
};

export default TypewriterText;
