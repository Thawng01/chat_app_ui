import { MdAccountCircle, MdBlock, MdReport } from "react-icons/md";
import useNavigation from "../../hook/useNavigation";

import ModalContainer from "./ModalContainer";
import ModalItem from "./ModalItem";

const ChatModal = ({ isOpen, onCloseModal }) => {
    const navigate = useNavigation();

    return (
        <ModalContainer
            isOpen={isOpen}
            onCloseModal={onCloseModal}
            width="60%"
            customtop={0}
        >
            <ModalItem
                Icon={MdAccountCircle}
                title="View profile"
                onClick={() => navigate("/profile")}
            />
            <ModalItem Icon={MdBlock} title="Block" />
            <ModalItem Icon={MdReport} title="Report" />
        </ModalContainer>
    );
};

export default ChatModal;
