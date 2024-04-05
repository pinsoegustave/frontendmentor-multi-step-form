import Home from "./Components/Home";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PickAddons from "./Components/PickAddons";
import Summary from "./Components/Summary";
import Test from "./Components/Test";
import SelectPlan from "./Components/SelectPlan";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/add-ons' element={<PickAddons />} />
      <Route path='/summary' element={<Summary />} />
      <Route path="/select" element={<SelectPlan/>} />
      <Route path='/test' element={<Test />} />
    </Routes>
    </BrowserRouter>

  )
}