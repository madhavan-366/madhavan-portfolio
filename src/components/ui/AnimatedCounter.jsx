import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = '', className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });
  const [display, setDisplay] = useState('0');

  const numericMatch = String(value).match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const trailingChars = String(value).replace(/^[\d.]+/, '');
  const isDecimal = String(numericValue).includes('.');

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplay(isDecimal ? latest.toFixed(2) : Math.round(latest).toString());
    });
    return unsubscribe;
  }, [spring, isDecimal]);

  return (
    <span ref={ref} className={className}>
      {display}{trailingChars}{suffix}
    </span>
  );
}
