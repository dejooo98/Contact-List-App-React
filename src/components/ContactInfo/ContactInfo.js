import ContactButton from "../ContactButton/ContactButton";
import { useEffect, useState } from "react";
import ContactAvatar from "../ContactAvatar/ContactAvatar";

// ICONS
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

//STYLE FILES
import "./ContactInfo.scss";

const ContactInfo = (props) => {
    const { id, firstName, lastName, profilePhoto, email, favorite, phone } =
        props.activeContact;

    const [contact, setContact] = useState({
        id: id,
        firstName: firstName,
        lastName: lastName,
        profilePhoto: profilePhoto,
        email: email,
        favorite: favorite,
        phone: phone,
    });

    useEffect(() => {
        setContact({
            id: id,
            firstName: firstName,
            lastName: lastName,
            profilePhoto: profilePhoto,
            email: email,
            favorite: favorite,
            phone: phone,
        });
    }, [id, firstName, lastName, profilePhoto, email, favorite, phone]);

    // console.log(contact);

    return (
        <div className="main-content-card">
            <div className="container p-0">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <ContactAvatar
                                        name={
                                            contact.firstName +
                                            " " +
                                            contact.lastName
                                        }
                                        className={"info-avatar"}
                                    />
                                    {/* <div className="info-avatar">
                                         {<img src={} alt="" />} 
                                    </div> */}
                                    <div className="mt-3 w-100">
                                        <h4 className="m-auto fullname">
                                            {contact.firstName +
                                                " " +
                                                contact.lastName}
                                        </h4>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-4">
                                        <h6 className=" mb-0 text-secondary">
                                            Full Name
                                        </h6>
                                    </div>
                                    <div className="col-8 truncate-string">
                                        {contact.firstName} {contact.lastName}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-4">
                                        <h6 className=" mb-0 text-secondary ">
                                            Email
                                        </h6>
                                    </div>
                                    <div className="col-8">{contact.email}</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-4">
                                        <h6 className=" mb-0 text-secondary">
                                            Phone
                                        </h6>
                                    </div>
                                    <div className="col-8 ">
                                        {contact.phone}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-4">
                                        <h6 className=" mb-0 text-secondary">
                                            Favorite
                                        </h6>
                                    </div>
                                    <div className="col-8  ">
                                        {favorite ? (
                                            <StarIcon className="starIcon" />
                                        ) : (
                                            <StarBorderIcon />
                                        )}
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <ContactButton
                                            btnIcon={"pencil"}
                                            btnText={"Edit Contact"}
                                            setModalShow={props.setModalShow}
                                            setIsEdit={props.setIsEdit}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
