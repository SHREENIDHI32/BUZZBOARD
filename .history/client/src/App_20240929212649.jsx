import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AllNews from "./components/AllNews";
import TopHeadlines from "./components/TopHeadlines";
import SummarizeArticle from "./components/SummarizeArticle"; // Adjust the path as needed
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryNews from "./components/CountryNews";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllNews />} />
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          <Route path="/country/:iso" element={<CountryNews />} />
          <Route path="/summarize" element={<SummarizeArticle />} />
        </Routes>
        {/* You can uncomment and use Footer later if needed */}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;