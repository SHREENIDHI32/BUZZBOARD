// App.js
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AllNews from "./components/AllNews";
import TopHeadlines from "./components/TopHeadlines";
import SummarizeComponent from "./components/SummarizeComponent"; // Import the new component
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
          <Route path="/summarize" element={<SummarizeComponent />} /> {/* Use the new component */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;