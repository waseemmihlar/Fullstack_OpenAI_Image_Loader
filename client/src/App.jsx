import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { logo } from "./assets";
import { CreatePost, Home } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header
        className="w-full 
      flex justify-between bg-white 
      items-center sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]"
      >
        <Link to="/">
          <img src={logo} alt="Logo" className="w-28 object-contain" />
        </Link>

        <Link
          to="/create-post"
          className="font-inter text-white 
          bg-[#6469ff] font-medium px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>

      <main
        className="w-full bg-[#f9fafe] px-4 py-2 sm:p-8 
      min-h-[calc(100vh-70px)]"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
