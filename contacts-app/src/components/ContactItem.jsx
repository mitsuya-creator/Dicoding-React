import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

function ContactItem({ imgUrl, name, tag }) {
    return (
        <div className="contact-item">
            <ContactItemImage imgUrl={imgUrl} />
            <ContactItemBody name={name} tag={tag} />
        </div>
    )
}

export default ContactItem;