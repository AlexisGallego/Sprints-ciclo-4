import { render } from "react-dom";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Login from "./routes/login"
import Registro from "./routes/registro";
import Recuperar from "./routes/recuperar";
import Navbar from "./components/navbar";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registro" element={<Registro />} />   
    <Route path="/recuperar" element={<Recuperar />} /> 
    <Route path="/navbar" element={<Navbar />} />

    </Routes>
  </BrowserRouter>,
  rootElement
);
