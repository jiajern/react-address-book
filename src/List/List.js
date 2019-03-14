import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Contact from '../Contact/Contact';
import './List.css';

// get the search and contacts
const list = (props) => {
    let contacts = props.contacts.filter((contact) => (new RegExp(props.search, 'i')).test(contact.FirstName));
    let renderContact = null;
    renderContact = (
        <div>
            {contacts.map((contact, index) => {
                return <Contact
                    FirstName={contact.FirstName}
                    LastName={contact.LastName}
                    Birthday={contact.Birthday}
                    Telephone={contact.Telephone}
                    key={contact.Telephone}
                    delete={() => props.delete(index)} />
            })}
        </div>
    );
    return renderContact;
}

export default list;