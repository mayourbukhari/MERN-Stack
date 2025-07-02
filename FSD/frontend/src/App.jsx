import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetData from "./components/GetData";
import Weather from "./components/weather";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Welcome to home page</h1>} />
        <Route path="/getdata" element={<GetData />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
