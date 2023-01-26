import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
// import { routes } from "./routes";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import SignIn from "./pages/SignIn/SignIn";
import Admin from "./pages/Admin/Admin";
import Screenshots from "./pages/Screenshots/Screenshots"

function App() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <Header type="text" onChange={handleSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/screens/:id" element={<Screenshots/>} />
      </Routes>
      {/* <Routes>
        {routes.map((i) => {
          return <Route path={i.path} element={i.elements} />;
        })}
      </Routes> */}
    </div>
  );
}

export default App;
