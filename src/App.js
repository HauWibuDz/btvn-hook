import { useState } from "react";
import ContactForm from "./components/ContactFormHook";
import ContactList from "./components/ContactListHook";
import "./App.css";

function App() {
  const [contacts, updateContacts] = useState([]);
  const addContact = (contact) => {
    updateContacts([...contacts, contact]);
  };
  return (
    <div className="App">
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
