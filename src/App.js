import "./App.css";
import AddContact from "./components/AddContact";

function App() {
  return (
    <div className="App">
      {/* components */}
      <main>
        <h1 className="text-[20px] md:text-[30px] text-text_color border-b-2 pb-5 pt-5 mb-3 text-center ">
          Welcome you're Contact App
        </h1>
        <section className="w-full border-b-2">
          <AddContact />
        </section>
        {/* <section>Contact List</section> */}
      </main>
    </div>
  );
}

export default App;
