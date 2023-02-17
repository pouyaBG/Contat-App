import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/contactList";


function App() {
  const [contacts, setContacts] = useState([]);

  const addConatctHandler = (contact) => {
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 1000), ...contact },
    ]);
    // ...contact in fact should be this  =>
    // const newAdd = {
    //id:
    // name:conatct.name,
    // email:conatct.email,
    // ...contact
    // }
    // setContacts(...contact,[newAdd]);
  };
  const removeConatctHandler = (id) => {
    const fillterContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(fillterContacts);
  };
  return (
    <div className="App rounded-b-3xl">
      {/* components */}
      <main>
        <h1 className="text-[20px] md:text-[30px] text-text_color border-b-2 pb-5 pt-5 mb-3 text-center rounded-b-3xl">
          Welcome you're Contact App
        </h1>
        <section className="w-full border-b-2 rounded-b-3xl">
          <AddContact addConatctHandler={addConatctHandler} />
        </section>
        <section className="h-[100%] rounded-b-3xl" >
          <ContactList conatcts={contacts} onDelete={removeConatctHandler} />
        </section>
      </main>
    </div>
  );
}

export default App;
