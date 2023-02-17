import "animate.css";
const ContactList = ({ conatcts, onDelete }) => {
  return (
    <>
      <div className="wrapper animate__backInUp animate__delay-2s ">
        {conatcts.map((conatct) => {
          const { name, email, id } = conatct;
          return (
            <div key={id} className="p-5 flex flex-col justify-center  ">
              <p className="">Name : {name}</p>
              <p>Email : {email}</p>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 rounded"
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
