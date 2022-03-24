import { useContext } from "react";
import SideContext from "../components/SideContext";

const useSideContext = () => {
    const { setActiveIndex, activeIndex } = useContext(SideContext);
    return { setActiveIndex, activeIndex };
};

export default useSideContext;
