import "animate.css";
const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <div className="wrapper ">
        {contacts.map((conatct) => {
          const { name, email, id } = conatct;
          return (
            <div key={id} className="p-5 flex flex-col justify-center  ">
              <p className="">Name : {name}</p>
              <p>Email : {email}</p>
              <button
                className="bg-blue-500 text-delete_color font-bold py-2 px-4 border-b-4 rounded"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactList;
