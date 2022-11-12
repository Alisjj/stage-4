import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
