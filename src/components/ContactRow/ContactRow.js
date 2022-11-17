import React from "react";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import ContactAvatar from "../ContactAvatar/ContactAvatar";

// ICONS
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

//STYLE FILES
import "./ContactRow.scss";

const ContactRow = ({
    contact,
    showActiveUser,
    checkedContactIdList,
    setCheckedContactIDList,
    handleShow,
    setIsMultiDelete,
    setDeleteContactId,
}) => {
    return (
        <tr key={contact.id}>
            <td className="align-middle text-center">
                <input
                    title="Select Contact"
                    type="checkbox"
                    checked={checkedContactIdList.includes(contact.id)}
                    onChange={() => {
                        if (checkedContactIdList.includes(contact.id)) {
                            setCheckedContactIDList(
                                checkedContactIdList.filter(
                                    (item) => item !== contact.id
                                )
                            );
                        } else {
                            setCheckedContactIDList([
                                ...checkedContactIdList,
                                contact.id,
                            ]);
                        }
                    }}
                />
                <div className="align-middle">
                    {contact.favorite ? (
                        <StarIcon className="starIcon" />
                    ) : (
                        <StarBorderIcon />
                    )}
                </div>
            </td>
            <td onClick={() => showActiveUser(contact.id)}>
                <div className="contact d-flex">
                    <div className="contact-avatar m-2">
                        <ContactAvatar
                            name={contact.firstName + " " + contact.lastName}
                            className="list-avatar"
                        />
                        {/* <div className="list-avatar">{contact.profileImg}</div> */}
                    </div>
                    <div className="contact-info d-flex flex-column justify-content-center m-2">
                        <div className="contact-info-name truncate-string">
                            <p className="m-0 truncate-string">
                                {contact.firstName} {contact.lastName}
                            </p>
                        </div>
                        <div className="contact-info-email">
                            <p className="m-0">
                                <span className="text-secondary truncate-string">
                                    {contact.email}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </td>

            <td
                className="align-middle"
                onClick={() => showActiveUser(contact.id)}
            >
                <div className="company-name d-flex align-items-center m-auto">
                    <p className="m-0 truncate-string">{contact.phone}</p>
                </div>
            </td>
            <td className="align-middle text-center" title="Delete Contact">
                <DeleteForeverSharpIcon
                    className="trash-icon"
                    onClick={() => {
                        handleShow();
                        setIsMultiDelete(false);
                        setDeleteContactId(contact.id);
                    }}
                />
            </td>
        </tr>
    );
};
export default ContactRow;
