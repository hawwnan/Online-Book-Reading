import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Cards from "./components/Cards";
import AddBook from "./components/AddBook";
import Books from "./components/Books";
import EditBook from "./components/EditBook";
import Contact from "./components/Contact";
import OnlineReads from "./components/OnlineReads";
import Read from "./components/Read";
import UsersFile from "./components/UsersFile";
import Downloads from "./components/Downloads";
import DownOption from "./components/DownOption";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Header />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books" element={<Books />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reads" element={<OnlineReads />} />
          <Route path="/reading" element={<Read />} />
          <Route path="/users" element={<UsersFile />} />
          <Route path="/download" element={<Downloads />} />
          <Route path="/down" element={<DownOption />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
