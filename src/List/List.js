import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Contact from '../Contact/Contact';
import './List.css';

// get the search and contacts
const list = (props) => {
    let regex = new RegExp(props.search, 'i');
    let contacts = props.contacts.filter((contact) => (regex.test(contact.FirstName) ||
                                                        regex.test(contact.LastName) ||
                                                        regex.test(contact.Birthday) ||
                                                        regex.test(contact.Telephone)));
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