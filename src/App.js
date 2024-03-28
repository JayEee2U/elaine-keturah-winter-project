import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/HerLife" element={<HerLife />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/TreasuredStories" element={<TreasuredStories />} />
        <Route path="/*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
