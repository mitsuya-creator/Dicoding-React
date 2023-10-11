import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";

class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: getData()
        }
        this.onDeleteButton = this.onDeleteButton.bind(this)
    }
    onDeleteButton(id) {
        const contacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({ contacts })
    }
    render() {
        return (
            <div className="contact-app" >
                <h1>Daftar Kontak</h1>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteButton} />
            </div>
        )
    }
}

export default ContactApp;