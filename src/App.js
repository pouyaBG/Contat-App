import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/contactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 1000), ...contact },
    ]);
    console.log(contacts);
  };
  const removeContactHandler = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  // use localStorage
  // CDM => get data
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contactList"));
    if (savedContacts && savedContacts.length > 0) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contacts));
    console.log("Saved contacts to local storage:", contacts);
  }, [contacts]);

  return (
    <div className="App rounded-b-3xl">
      {/* components */}
      <main>
        <h1 className="text-[20px] md:text-[30px] text-text_color border-b-2 pb-5 pt-5 mb-3 text-center rounded-b-3xl">
          Welcome you're Contact App
        </h1>
        <section className="w-full border-b-2 rounded-b-3xl">
          <AddContact addContactHandler={addContactHandler} />
        </section>
        <section className="h-[100%] rounded-b-3xl">
          <ContactList contacts={contacts} onDelete={removeContactHandler} />
        </section>
      </main>
    </div>
  );
}

export default App;
