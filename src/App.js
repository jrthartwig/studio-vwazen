import Home from "./Home/Home";
import StudioProgram from "./StudioProgram/StudioProgram";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="studio-program" element={<StudioProgram />} />
      </Route>
    </Routes>
  );
};

function App() {
  return <NavRoutes />;
}

export default App;
