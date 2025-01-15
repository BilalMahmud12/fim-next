import { useEffect } from 'react';

const useSmoothScroll = () => {
    useEffect(() => {
        let scrollY = window.scrollY; // Initial scroll position
        let targetScrollY = scrollY;  // Target scroll position
        let isScrolling = false;      // Flag to check if scroll is happening

        // Function to smooth the scroll effect
        const smoothScroll = () => {
            scrollY += (targetScrollY - scrollY) * 0.1; // Increment scroll position
            window.scrollTo(0, scrollY);

            // Continue to scroll while the difference between scroll positions exists
            if (Math.abs(targetScrollY - scrollY) > 0.1) {
                requestAnimationFrame(smoothScroll);
            } else {
                isScrolling = false;
            }
        };

        // Event listener for wheel scroll
        const onWheel = (event: WheelEvent) => {
            event.preventDefault(); // Prevent default scroll behavior
            targetScrollY += event.deltaY; // Update target scroll position

            if (!isScrolling) {
                isScrolling = true;
                requestAnimationFrame(smoothScroll);
            }
        };

        // Add wheel event listener
        window.addEventListener('wheel', onWheel, { passive: false });

        // Cleanup function to remove the event listener when component unmounts
        return () => {
            window.removeEventListener('wheel', onWheel);
        };
    }, []);
};

export default useSmoothScroll;
