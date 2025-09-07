import React, { useEffect, useState, useCallback } from 'react';
import './ElevateAnimation.css';

interface ElevateAnimationProps {
  autoplay?: boolean;
  onAnimationComplete?: () => void;
}

const ElevateAnimation: React.FC<ElevateAnimationProps> = ({ 
  autoplay = true, 
  onAnimationComplete 
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    setIsAnimating(true);
    
    // Reset animation after it completes (star+curve: 3s + text: 1s + fadeout: 1s + buffer: 0.5s = 5.5s)
    setTimeout(() => {
      setIsAnimating(false);
      onAnimationComplete?.();
    }, 5500);
  }, [onAnimationComplete]);

  useEffect(() => {
    if (autoplay) {
      // Small delay to ensure smooth start
      setTimeout(() => startAnimation(), 100);
    }
  }, [autoplay, startAnimation]);

  return (
    <div className="elevate-container">
      <div className={`elevate-animation ${isAnimating ? 'animate' : ''}`}>
        {/* Logo SVG - Exact match to frame-017.jpg design */}
        <div className="logo-container">
          <svg
            width="200"
            height="180"
            viewBox="190 170 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="elevate-logo"
          >
            {/* Top 4-pointed star with curved concave sides - exact match */}
            <path
              className="star-main"
              d=" M280.032410,174.012192   C280.032410,174.012192 280.432007,174.064407 280.675354,174.486877   C281.643005,178.604156 282.367340,182.298950 283.055237,186.365112   C288.684418,202.099609 298.776764,212.780716 315.322540,217.216064   C319.432861,217.959656 323.222351,218.462845 327.011810,218.966034   C327.092133,219.141373 327.172455,219.316727 326.704559,219.751801   C321.437073,221.001511 316.717804,221.991501 311.625427,222.963379   C297.110382,228.507935 287.513855,238.324646 282.925262,253.354584   C282.179810,257.802277 281.625916,261.903046 281.072021,266.003784   C280.938721,266.279877 280.773102,266.535034 280.257874,266.452545   C278.604584,260.425507 277.268677,254.715164 275.912537,248.647400   C272.076050,242.907578 268.893280,236.875366 264.246368,232.344910   C260.411011,228.605576 254.843414,226.642990 249.874924,223.540619   C244.468048,222.183075 239.229675,221.177979 233.991287,220.172882   C233.822021,219.802307 233.652740,219.431732 234.148315,219.004974   C239.211426,217.996094 243.609680,217.043396 248.384384,216.156784   C262.636932,210.798935 272.559540,201.539795 277.349640,186.767227   C278.427032,182.336853 279.229706,178.174515 280.032410,174.012192  z"
              fill="white"
            />
            
            {/* Glow effect behind the star */}
            <path
              className="star-glow"
              d=" M280.032410,174.012192   C280.032410,174.012192 280.432007,174.064407 280.675354,174.486877   C281.643005,178.604156 282.367340,182.298950 283.055237,186.365112   C288.684418,202.099609 298.776764,212.780716 315.322540,217.216064   C319.432861,217.959656 323.222351,218.462845 327.011810,218.966034   C327.092133,219.141373 327.172455,219.316727 326.704559,219.751801   C321.437073,221.001511 316.717804,221.991501 311.625427,222.963379   C297.110382,228.507935 287.513855,238.324646 282.925262,253.354584   C282.179810,257.802277 281.625916,261.903046 281.072021,266.003784   C280.938721,266.279877 280.773102,266.535034 280.257874,266.452545   C278.604584,260.425507 277.268677,254.715164 275.912537,248.647400   C272.076050,242.907578 268.893280,236.875366 264.246368,232.344910   C260.411011,228.605576 254.843414,226.642990 249.874924,223.540619   C244.468048,222.183075 239.229675,221.177979 233.991287,220.172882   C233.822021,219.802307 233.652740,219.431732 234.148315,219.004974   C239.211426,217.996094 243.609680,217.043396 248.384384,216.156784   C262.636932,210.798935 272.559540,201.539795 277.349640,186.767227   C278.427032,182.336853 279.229706,178.174515 280.032410,174.012192  z"
              fill="none"
              stroke="white"
              strokeWidth="2"
              opacity="0"
            />
            
            {/* Bottom wide curved arc - exact match with proper thickness */}
            <path
               d=" M269.042389,324.124329   C252.043457,294.853027 226.619705,279.897400 193.473358,277.263031   C251.497726,277.263031 309.522095,277.263031 367.546478,277.263031   C316.482910,282.843384 287.266083,310.978760 279.694672,362.001953   C278.961182,348.673065 275.419647,336.178955 269.042389,324.124329  z"
               fill="none"
               stroke="white"
               strokeWidth="2"
               className="bottom-shape"
            />
            
            {/* Bottom shape fill - animates from left */}
            <path
               d=" M269.042389,324.124329   C252.043457,294.853027 226.619705,279.897400 193.473358,277.263031   C251.497726,277.263031 309.522095,277.263031 367.546478,277.263031   C316.482910,282.843384 287.266083,310.978760 279.694672,362.001953   C278.961182,348.673065 275.419647,336.178955 269.042389,324.124329  z"
               fill="white"
               className="bottom-shape-fill"
            />
          </svg>
        </div>
        
        {/* Text Element */}
        <div className="elevate-text">
          <span>E</span>
          <span>L</span>
          <span>E</span>
          <span>V</span>
          <span>A</span>
          <span>T</span>
          <span>E</span>
        </div>
      </div>
      
      {/* Replay Button */}
      <button 
        className="replay-btn"
        onClick={startAnimation}
        disabled={isAnimating}
      >
        {isAnimating ? 'Playing...' : 'Replay Animation'}
      </button>
    </div>
  );
};

export default ElevateAnimation;