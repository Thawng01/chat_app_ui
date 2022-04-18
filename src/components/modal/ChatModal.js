import { MdAccountCircle, MdBlock, MdReport } from "react-icons/md";
import useNavigation from "../../hook/useNavigation";

import ModalContainer from "./ModalContainer";
import ModalItem from "./ModalItem";
import { toggleBlock } from "../../api/user";
import useUser from "../../hook/useUser";
import useToken from "../../hook/useToken";

const ChatModal = ({ isOpen, userId, onCloseModal }) => {
    const navigate = useNavigation();

    const me = useToken();
    const { user } = useUser(me);
    const handleToggleBlock = async () => await toggleBlock(userId);

    const handleNavigation = () => navigate(`/profile/${userId}`);

    return (
        <ModalContainer
            isOpen={isOpen}
            onCloseModal={onCloseModal}
            width="60%"
            customtop={0}
        >
            <ModalItem
                icon={MdAccountCircle}
                title="View profile"
                onClick={handleNavigation}
            />
            <ModalItem
                icon={MdBlock}
                title={user?.blocks?.includes(userId) ? "Unblock" : "Block"}
                onClick={handleToggleBlock}
            />
            <ModalItem icon={MdReport} title="Report" />
        </ModalContainer>
    );
};

export default ChatModal;
