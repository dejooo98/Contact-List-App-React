import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
// import { InputGroup } from "react-bootstrap";
import { Form, Row, Col, Button } from "react-bootstrap";

//STYLE FILES
import "./ContactModel.scss";

function ContactModel({
    activeContact,
    isEdit,
    show,
    onHide,
    title,
    addContact,
    editContact,
}) {
    const initialContact = {
        id: "_" + Math.random().toString(36).substr(2, 9),
        firstName: "",
        lastName: "",
        profilePhoto: "",
        email: "",
        favorite: true,
        phone: "",
    };
    const [contact, setContact] = useState(initialContact);

    //Image
    // const [file, setFile] = useState();
    // function handleChange(e) {
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }

    useEffect(() => {
        isEdit ? setContact(activeContact) : setContact(initialContact);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeContact, isEdit]);

    const [validated, setValidated] = useState(false);

    const handleFormSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            isEdit ? editContact(contact) : addContact(contact);
            setContact(initialContact);
            onHide(false);
            setValidated(false);
        }
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleFormSubmit}
                >
                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustomFirstName"
                        >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                pattern="^\S[A-Za-z\s]{1,32}\S$"
                                placeholder="Enter First Name"
                                value={contact.firstName}
                                onChange={(e) =>
                                    setContact({
                                        ...contact,
                                        firstName: e.target.value,
                                    })
                                }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid first name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustomLastName"
                        >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                pattern="^\S[A-Za-z\s]{1,32}\S$"
                                placeholder="Enter last name"
                                value={contact.lastName}
                                onChange={(e) =>
                                    setContact({
                                        ...contact,
                                        lastName: e.target.value,
                                    })
                                }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid last name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        {/* <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustomPicture"
                        >
                            <Form.Label>Profile Picture</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="file"
                                    placeholder="Upload Profile Photo"
                                    aria-describedby="inputGroupPrepend"
                                    files={contact.profilePhoto}
                                    onChange={handleChange}
                                    // onChange={(e) =>
                                    //     setContact(
                                    //         URL.createObjectURL(
                                    //             e.target.files[0]
                                    //         )
                                    //     )
                                    // }
                                    required
                                />
                                <img src={file} />

                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid picture.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group> */}
                        <Form.Group
                            as={Col}
                            md="12"
                            controlId="validationEmail"
                        >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                placeholder="Enter Email"
                                aria-describedby="inputGroupPrepend"
                                value={contact.email}
                                onChange={(e) =>
                                    setContact({
                                        ...contact,
                                        email: e.target.value,
                                    })
                                }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationFavorite"
                        >
                            <Form.Label>
                                Please select contact as a favorite or not
                            </Form.Label>
                            <Form.Check
                                type="checkbox"
                                checked={contact.favorite}
                                onChange={(e) =>
                                    setContact({
                                        ...contact,
                                        favorite: e.target.checked,
                                    })
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                Please select a favorite or not
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationPhoneNumber"
                        >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
                                placeholder="Enter Phone Number"
                                value={contact.phone}
                                onChange={(e) =>
                                    setContact({
                                        ...contact,
                                        phone: e.target.value,
                                    })
                                }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={onHide}>
                            Cancel
                        </Button>
                        <Button type="submit">Save</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default ContactModel;
