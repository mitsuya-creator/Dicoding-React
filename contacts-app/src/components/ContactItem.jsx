import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import DeleteButton from "./DeleteBtn";

function ContactItem({ imgUrl, name, tag, id, onDelete }) {
    return (
        <div className="contact-item">
            <ContactItemImage imgUrl={imgUrl} />
            <ContactItemBody name={name} tag={tag} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    )
}

export default ContactItem;