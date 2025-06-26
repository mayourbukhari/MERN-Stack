import Signin from "./components/signin";
import Signup from "./components/Signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/productList";

export default function App() {
  return (
    <div className=" bg-danger p-5 text-center ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/productList" element={<ProductList
          />}   />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
