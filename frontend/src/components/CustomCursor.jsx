
import { useEffect, useRef } from "react";

function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;

        if (!dot || !ring) return;

        const finePointer = window.matchMedia("(pointer: fine)").matches;

        if (!finePointer) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let ringX = mouseX;
        let ringY = mouseY;

        let animationFrame;

        const handleMouseMove = (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;

            // Green dot follows almost instantly
            dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        };

        const animate = () => {
            // Faster and smoother ring movement
            ringX += (mouseX - ringX) * 0.22;
            ringY += (mouseY - ringY) * 0.22;

            ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

            animationFrame = requestAnimationFrame(animate);
        };

        const handlePointerOver = (event) => {
            const interactive = event.target.closest(
                "a, button, input, textarea, select"
            );

            if (interactive) {
                ring.classList.add("cursor-active");
                dot.classList.add("cursor-active-dot");
            }
        };

        const handlePointerOut = (event) => {
            const interactive = event.target.closest(
                "a, button, input, textarea, select"
            );

            if (interactive) {
                ring.classList.remove("cursor-active");
                dot.classList.remove("cursor-active-dot");
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handlePointerOver);
        document.addEventListener("mouseout", handlePointerOut);

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handlePointerOver);
            document.removeEventListener("mouseout", handlePointerOut);

            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="custom-cursor-dot" />
            <div ref={ringRef} className="custom-cursor-ring" />
        </>
    );
}

export default CustomCursor;