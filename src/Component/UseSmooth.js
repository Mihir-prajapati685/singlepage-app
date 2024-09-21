
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UseSmooth() {
    const location = useLocation();

    useEffect(() => {
        const hase = Location.hase;
        if (hase)
        {
            const element = document.querySelector(hase);
            
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }

    }, [location]);

}





