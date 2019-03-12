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
    ]
  }

  deleteHandler = (index) => {
    // want to delete a
    const contacts = [...this.state.contacts];
    contacts.splice(index, 1);
    this.setState({contacts: contacts});
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
            delete={() => this.deleteHandler(index)}/>
        })}
      </div>
    );

    return (
      <div className="App">
        <h1> Address Book </h1>
        {contacts}

      </div>
    );
  }
}

export default App;
