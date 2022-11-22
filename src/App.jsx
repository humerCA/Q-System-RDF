import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./layout/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-row">
          <Navbar />
          <Main />
          <Footer />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
