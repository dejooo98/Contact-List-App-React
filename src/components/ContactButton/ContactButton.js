import React from "react";
import { Button } from "react-bootstrap";

// ICONS
import CreateIcon from "@mui/icons-material/Create";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

//STYLE FILES
import "./ContactButton.scss";

const ContactButton = ({
    btnIcon,
    btnText,
    setIsEdit,
    btnType,
    setModalShow,
}) => {
    return (
        <>
            <Button
                title={btnType === "add" ? "Add Contact" : "Edit Contact"}
                variant="default"
                onClick={() => {
                    setModalShow(true);
                    btnType === "add" ? setIsEdit(false) : setIsEdit(true);
                }}
                className="custom-btn"
            >
                {btnIcon === "pencil" ? (
                    <CreateIcon className="custom-btn-icon align-middle" />
                ) : btnIcon === "plus" ? (
                    <GroupAddIcon className="custom-btn-icon align-middle" />
                ) : null}
                {btnText}
            </Button>
        </>
    );
};

export default ContactButton;
