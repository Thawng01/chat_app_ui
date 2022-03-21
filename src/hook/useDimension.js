import { useState, useCallback, useEffect } from "react";

const useDimension = () => {
    const [widthDimension, setWidthDimension] = useState(window.innerWidth);

    const handleResize = useCallback(() => {
        setWidthDimension(window.innerWidth);
    }, [setWidthDimension]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    return widthDimension;
};

export default useDimension;
