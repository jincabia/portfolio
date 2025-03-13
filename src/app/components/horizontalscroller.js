import React, { useEffect, useRef } from 'react';

const HorizontalScroller = ({ svgsPaths }) => {
  const scrollerRef = useRef(null);

  // This will make sure the scroll is infinite
  useEffect(() => {
    const scroller = scrollerRef.current;
    const speed = 1; // Scroll speed

    const animateScroll = () => {
      if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
        scroller.scrollLeft = 0;
      } else {
        scroller.scrollLeft += speed;
      }
      requestAnimationFrame(animateScroll);
    };

    animateScroll();
  }, []);

  return (
    <div
      ref={scrollerRef}
      style={{
        display: 'flex',
        overflowX: 'hidden',
        whiteSpace: 'nowrap',
        // margin: '20px 0',
        // paddingBottom: '10px',
        scrollBehavior: 'smooth',
        overflowY: 'hidden',
      }}
    >
      {svgsPaths.map(({ path, name }, index) => (
        <div
          key={index}
          style={{
            display: 'inline-block',
            marginRight: '10px',
            // padding: '10px',
            textAlign: 'center',
            flexShrink: 0,
          }}
        >
          <img
            src={path}
            alt={name}
            style={{ width: '50px', height: '50px', objectFit: 'contain' }}
          />
          {/* <div>{name}</div> */}
        </div>
      ))}
      {/* Duplicate the same items to ensure smooth looping */}
      {svgsPaths.map(({ path, name }, index) => (
        <div
          key={`duplicate-${index}`}
          style={{
            display: 'inline-block',
            marginRight: '10px',
            // padding: '10px',
            textAlign: 'center',
            flexShrink: 0,
          }}
        >
          <img
            src={path}
            alt={name}
            style={{ width: '50px', height: '50px', objectFit: 'contain' }}
          />
          {/* <div>{name}</div> */}
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroller;
