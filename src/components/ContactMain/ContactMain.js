import { React, useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ContactButton from "../ContactButton/ContactButton";
import ContactInfo from "../ContactInfo/ContactInfo";
import ContactTable from "../ContactTable/ContactTable";
import DeleteModel from "../DeleteModel/DeleteModel";
import ContactModel from "../ContactModel/ContactModel";
import Favorites from "../ContactFavorites/Favorites";

// ICONS
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import { Button } from "react-bootstrap";

//STYLE FILES
import "./ContactMain.scss";

//Logo
import Logo from "../../assets/contact-list.png";
import LogoFav from "../../assets/favorite.png";

const ContactMain = () => {
    const [contacts, setContacts] = useState(
        localStorage.getItem("contacts")
            ? JSON.parse(localStorage.getItem("contacts"))
            : [
                  {
                      id: "_" + Math.random().toString(36).substr(2, 9),
                      firstName: "Dejan",
                      lastName: "Markovic",
                      profilePhoto: "profile.png",
                      email: "dejan@gmail.com",
                      favorite: true,
                      phone: "0662454123",
                  },
                  {
                      id: "_" + Math.random().toString(36).substr(2, 9),
                      firstName: "Petar",
                      lastName: "Petrovic",
                      profilePhoto: "profile.png",
                      email: "petar@gmail.com",
                      favorite: false,
                      phone: "0653443558",
                  },
              ]
    );

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    const [filterText, setFilterText] = useState("");

    const [activeContact, setActiveContact] = useState(null);

    const [isActive, setIsActive] = useState(false);

    const [modalShow, setModalShow] = useState(false);

    const [isEdit, setIsEdit] = useState(false);

    const [checkedContactIdList, setCheckedContactIDList] = useState([]);

    const [isMultiDelete, setIsMultiDelete] = useState(false);

    const [deleteContactId, setDeleteContactId] = useState(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleDelete = () => {
        if (isMultiDelete) {
            deleteCheckedContacts(checkedContactIdList);
        } else {
            deleteContact(deleteContactId);
        }
        handleClose();
    };

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const deleteContact = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
        if (activeContact && activeContact.id === id) {
            setActiveContact(null);
            setIsActive(false);
        }
        if (checkedContactIdList.includes(id)) {
            setCheckedContactIDList(
                checkedContactIdList.filter((contactId) => contactId !== id)
            );
        }
    };

    const editContact = (contact) => {
        const newContacts = contacts.map((c) =>
            c.id === contact.id ? contact : c
        );
        setContacts(newContacts);
        setActiveContact(contact);
    };

    const showActiveUser = (id) => {
        const newActiveContact = contacts.find((contact) => contact.id === id);
        setActiveContact(newActiveContact);
        setIsActive(true);
    };

    const deleteCheckedContacts = (checkedContactIdList) => {
        const newContacts = contacts.filter((contact) =>
            checkedContactIdList.includes(contact.id) ? false : true
        );
        setContacts(newContacts);
        setCheckedContactIDList([]);
        checkedContactIdList.forEach((id) => {
            if (activeContact && activeContact.id === id) {
                setActiveContact(null);
                setIsActive(false);
            }
        });
    };

    return (
        <div className="main-content container-fluid">
            <div className="row">
                <div className="main-content-top col-xl-12"></div>
            </div>
            <div className="row">
                <div className="main-content-bottom container-fluid p-lg-5 p-3">
                    <div className="row">
                        <div className="col-xl-12 d-flex">
                            <img src={Logo} alt="logo" className="logo" />
                            <div className="main-content-header">
                                <h3>Contacts</h3>
                                <p>Welcome to Contact page</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4 p-lg-5 pb-lg-0 pt-lg-0">
                        <div className="col-xl-3 col-md-6">
                            <SearchBar
                                filterText={filterText}
                                setFilterText={setFilterText}
                            />
                        </div>
                        <div className="col-xl-2 col-md-3 d-flex">
                            <ContactButton
                                btnIcon={"plus"}
                                btnText={"Add Contact"}
                                btnType={"add"}
                                setModalShow={setModalShow}
                                setIsEdit={setIsEdit}
                            />
                        </div>
                        <div className="col-xl-7 col-md-3 d-flex">
                            {checkedContactIdList.length > 0 ? (
                                <Button
                                    title={`Delete ${checkedContactIdList.length} contact(s)`}
                                    className="custom-btn"
                                    onClick={() => {
                                        handleShow();
                                        setIsMultiDelete(true);
                                    }}
                                >
                                    <DeleteForeverSharpIcon className="custom-btn-icon" />
                                    Delete
                                </Button>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="row p-lg-5 pb-lg-0 pt-lg-0">
                        <div className="col-lg-8 ">
                            <ContactTable
                                contacts={contacts}
                                filterText={filterText}
                                showActiveUser={showActiveUser}
                                checkedContactIdList={checkedContactIdList}
                                setCheckedContactIDList={
                                    setCheckedContactIDList
                                }
                                handleShow={handleShow}
                                setIsMultiDelete={setIsMultiDelete}
                                setDeleteContactId={setDeleteContactId}
                            />
                        </div>
                        <div className="col-lg-4">
                            {isActive && (
                                <ContactInfo
                                    activeContact={activeContact}
                                    setIsEdit={setIsEdit}
                                    setModalShow={setModalShow}
                                />
                            )}
                        </div>
                        {modalShow && (
                            <ContactModel
                                activeContact={activeContact}
                                isEdit={isEdit}
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                title={isEdit ? "Edit Contact" : "Add Contact"}
                                addContact={addContact}
                                editContact={editContact}
                            />
                        )}
                        {show && (
                            <DeleteModel
                                show={show}
                                handleClose={handleClose}
                                handleDelete={handleDelete}
                            />
                        )}
                    </div>
                    <div className="row lay">
                        <div className="col-xl-12 d-flex ">
                            <img src={LogoFav} alt="logo" className="logo" />
                            <div className="main-content-header">
                                <h3>Favorite Contacts</h3>
                                <p>See all favorite contacts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <Favorites
                                contacts={contacts}
                                filterText={filterText}
                                showActiveUser={showActiveUser}
                                checkedContactIdList={checkedContactIdList}
                                setCheckedContactIDList={
                                    setCheckedContactIDList
                                }
                                handleShow={handleShow}
                                setIsMultiDelete={setIsMultiDelete}
                                setDeleteContactId={setDeleteContactId}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMain;
