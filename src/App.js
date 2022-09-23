import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import E404 from './pages/e404/E404';

// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<E404 />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;