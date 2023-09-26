import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
