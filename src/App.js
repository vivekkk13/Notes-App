import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import { AddList } from "./components/AddList";
import { AllNotes } from "./components/allNotes";
import { Header } from "./components/Header";
import { NotesList } from "./components/NotesList";
import { Search } from "./components/Search";

function App() {
  return (
    <>
      <AllNotes>
        <div className="container">
          <Header />
          <Search />
          <NotesList />
        </div>
      </AllNotes>
    </>
  );
}

export default App;
