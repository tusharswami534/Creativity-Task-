import { useState, useEffect } from "react";

const BackToTop = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = Math.min((scrollTop / docHeight) * 100, 100);
            setCount(Math.round(scrollProgress));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <div className="min-h-screen"></div>
            <div className="min-h-screen"></div>
            <div className="min-h-screen"></div>
            <div className="min-h-screen"></div>
            <button
                onClick={scrollToTop}
                className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-md"
            >
                {count}% ↑
            </button>
        </>
    );
}

export default BackToTop
