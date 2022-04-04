import { useContext } from "react";
import Context from "../context/Context";

const useMyContext = () => {
    const { auth, dark, setAuth, setDark } = useContext(Context);

    return { auth, setAuth, dark, setDark };
};

export default useMyContext;
