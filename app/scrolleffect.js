"use client"; // This marks the component to be rendered on the client side

import { useEffect  } from "react";
import Link from "next/link"

const ScrollAnimation = () => {
    useEffect(() => {
        const div = document.getElementById("myDiv");
        const triggerPosition = 10

        // Function to check scroll position and animate div to top
        const animateDivOnScroll = () => {
            const scrollPosition = window.scrollY || window.pageYOffset;

            if (scrollPosition > triggerPosition) {
                div.style.opacity = 1;
            } 
        };

        // Add event listener for scroll
        window.addEventListener("scroll", animateDivOnScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", animateDivOnScroll);
        };
    }, []);

    return (
        <div id="myDiv" className="myDiv">
            <div className="topbar">
                <navbar className="navbar">
                <Link href="/photog" className="navbar-sub font-bold">Photography</Link>
                <Link href="./" className="navbar-sub font-bold">Home</Link>
                <Link href="/portfolio" className="navbar-sub font-bold">Portfolio</Link>
                </navbar>
                
                <div className = "Topinfo">
                    
                    <a className="navbarsvg" href="https://github.com/pika3113" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2.2em" height="2.2em" viewBox="0 0 98 96" className="svglogo"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/></svg>
                    </a>
                    <a className="navbarsvg" href="https://www.instagram.com/keith.n.co/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg"width="2.2em" height="2.2em"  viewBox="0 0 50 50"  className="svglogo"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" fill="#fff"/></svg>
                    </a>
                    <a className="navbarsvg" href="mailto:boomthering@gmail.com" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" height="2.2em" width="2.2em" viewBox="0 0 80 80" className="svglogo"><path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9   c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089   H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065   c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016   c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102   c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069   c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z" fill="#fff"/></svg>
                    </a>
                </div>

                <div className="myname font-bold">
                    <p>Keith Ng</p>
                </div>

            </div>
            
        </div>
    );
};

export default ScrollAnimation;
