import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import About from './pages/about/About';
import Home from './pages/home/Home';
import E404 from './pages/e404/E404';

// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()

const App = () => {
  // React.useEffect(() => {
  //   let coll = document.querySelectorAll(".collapsible");

  //   for (let i = 0; i < coll.length; i++) {
  //     coll[i].addEventListener("click", () => {
  //       coll[i].classList.add("active");
  //       let content = coll[i].nextElementSibling;
  //       if (content.style.maxHeight) {
  //         content.style.maxHeight = null;
  //       } else {
  //         content.style.maxHeight = content.scrollHeight + "px";
  //       }
  //     });
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;