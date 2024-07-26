import { useState, useRef, useEffect } from "react";

export default function SpeakerCard({ heading, para, image }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowReadMore, setShouldShowReadMore] = useState(false);
  const paragraphRef = useRef(null);
  const linesToShow = 10;

  useEffect(() => {
    const checkContentHeight = () => {
      if (paragraphRef.current) {
        const computedStyle = window.getComputedStyle(paragraphRef.current);
        const lineHeight = parseInt(computedStyle.lineHeight, 10);
        const maxHeight = lineHeight * linesToShow;
        setShouldShowReadMore(paragraphRef.current.scrollHeight > maxHeight);
      }
    };

    checkContentHeight();
    window.addEventListener('resize', checkContentHeight); // Recheck on resize

    return () => {
      window.removeEventListener('resize', checkContentHeight);
    };
  }, [para]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-white bg-gradient-to-b from-[#0178b5] to-[#000000] rounded-lg p-2 max-w-sm overflow-hidden shadow-lg">
      <div className="h-[99%] w-[99%] rounded-lg group">
        <img
          src={image}
          alt={heading}
          className="w-full transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="py-4 tracking-wider mx-4">
          <div className="text-xl md:text-2xl py-4 tracking-wider font-staat mb-2 text-white">
            {heading}
          </div>
          <p
            ref={paragraphRef}
            className={`mt-2 text-white text-sm ${isExpanded ? '' : 'truncate-lines'}`}
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: isExpanded ? 'unset' : linesToShow,
              overflow: 'hidden',
            }}
          >
            {para}
          </p>
          {shouldShowReadMore && (
            <button
              onClick={handleToggle}
              className="mt-2 text-blue-500 hover:underline"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
