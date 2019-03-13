import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './App.css';
import Contact from './Contact/Contact';

class App extends Component {

  state = {
    contacts: [
      {
        FirstName: "Cathy",
        LastName: "Pierce",
        Birthday: "9/14/1996",
        Telephone: "200-910-8132"
      },
      {
        FirstName: "Alfonso",
        LastName: "Cooley",
        Birthday: "8/10/1973",
        Telephone: "200-657-9362"
      },
      {
        FirstName: "Victor",
        LastName: "Gordon",
        Birthday: "8/3/1970",
        Telephone: "200-661-9407"
      },
      {
        FirstName: "Colleen",
        LastName: "Wright",
        Birthday: "10/28/1967",
        Telephone: "200-250-7949"
      },
      {
        FirstName: "James",
        LastName: "Johnston",
        Birthday: "5/11/1972",
        Telephone: "200-645-3176"
      },
      {
        FirstName: "Anna",
        LastName: "Reyes",
        Birthday: "9/10/1975",
        Telephone: "200-707-8670"
      }
    ],
    firstName: '',
    lastName: '',
    birthday: '',
    telephone: ''
  }

  deleteHandler = (index) => {
    // want to delete a
    if (window.confirm("Are you sure you want to delete the contact")) {
      const contacts = [...this.state.contacts];
      contacts.splice(index, 1);
      this.setState({ contacts: contacts });
    }
  }
  firstNameHandler = (event) => {
    this.setState({
      firstName: event.target.value
    });
  }
  lastNameHandler = (event) => {
    this.setState({
      lastName: event.target.value
    });
  }
  birthdayNameHandler = (event) => {
    this.setState({
      birthday: event.target.value
    });
  }
  telephoneHandler = (event) => {
    this.setState({
      telephone: event.target.value
    });
  }
  addHandler = () => {
    // copy the old contacts
    let oldContacts = this.state.contacts;
    const newContact = { // create new contact
      FirstName: this.state.firstName,
      LastName: this.state.lastName,
      Birthday: this.state.birthday,
      Telephone: this.state.telephone
    }
    oldContacts.append(newContact); //append it
    this.setState({ // change it
      contacts: oldContacts
    });
  }

  render() {
    let contacts = null;
    contacts = (
      <div>
        {this.state.contacts.map((contact, index) => {
          return <Contact
            FirstName={contact.FirstName}
            LastName={contact.LastName}
            Birthday={Contact.Birthday}
            Telephone={Contact.Telephone}
            key={contact.Telephone}
            delete={() => this.deleteHandler(index)} />
        })}
      </div>
    );

    return (
      <div className="App">
        <h1> Address Book </h1>
        {contacts}
        <div>
          <form>
            <div>
              <label>
                First Name:
              <input type="text" name="firstName" pattern="^[a-zA-Z'-]+$"/>
              </label>
            </div>
            <div>
              <label>
                Last Name:
              <input type="text" name="lastName" pattern="^[a-zA-Z'-]+$"/>
              </label>
            </div>
            <div>
              <label>
                Birthday:
              <input type="date" name="birthday" />
              </label>
            </div>
            <div>
              <label>
                Telephone:
              <input type="tel" name="telephone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
              <div>Format: 123-456-7890</div>
              </label>
            </div>
            <input type="submit" value="Add" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
