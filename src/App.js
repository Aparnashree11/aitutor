import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="character" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
