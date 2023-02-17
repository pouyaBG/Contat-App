import { useState } from "react";

const AddContact = ({ addConatctHandler }) => {
  // state
  const [contact, setContact] = useState({ name: "", email: "" });
  // handler
  const changeHandlert = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const sumbitForm = (e) => {
    if (!contact.name || !contact.email) {
      alert("oh please fill your name and email");
      return;
    }
    e.preventDefault();
    addConatctHandler(contact);
    setContact({ name: "", email: "" });
  };
  return (
    <>
      <form className="w-full flex justify-center" onSubmit={sumbitForm}>
        <div>
          <div className="flex flex-col">
            <label className="label">
              <span className="label-text ml-3 font-bold text-text_color">
                What is your Contact's name?
              </span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={contact.name}
              onChange={changeHandlert}
              placeholder="Enter contact's name"
              className="input input-bordered w-full rounded-md max-w-md p-2 m-2.5 shadow-sm text-font_color"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text ml-3 font-bold text-text_color">
                What is your contact's email?
              </span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={contact.email}
              onChange={changeHandlert}
              placeholder="Enter contact's email"
              className="input input-bordered w-full max-w-md rounded-md p-2 m-2.5 shadow-md  text-font_color"
            />
          </div>
          <button
            type="submit"
            className="mb-5 inline-flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 ml-2 border-b-4 border-blue-700 hover:border-white rounded "
          >
            <span className="mr-2">Add</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 14 14"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};

export default AddContact;
