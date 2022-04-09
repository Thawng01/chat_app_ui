import { useContext } from "react";
import Context from "../context/Context";

const useMyContext = () => {
    const { dark, setDark } = useContext(Context);

    return { dark, setDark };
};

export default useMyContext;
