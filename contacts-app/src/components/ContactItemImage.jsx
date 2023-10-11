import React from "react";

function ContactItemImage({ imgUrl }) {
    return (
        <div className="contact-item__image">
            <img src={imgUrl} alt="contact avatar" />
        </div>
    )
}

export default ContactItemImage;