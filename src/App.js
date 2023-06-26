import Home from "./Home/Home";
import StudioProgram from "./StudioProgram/StudioProgram";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Sponsors from "./Sponsors/Sponsors";
import RentStudioForm from "./RentStudioForm/RentStudioForm";
import ThankYou from "./ThankYou/ThankYou";
import StudioProgramForm from "./StudioProgramForm/StudioProgramForm";

const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="studio-program" element={<StudioProgram />} />
        <Route path="support-us" element={<Sponsors />} />
        <Route path="rent-studio" element={<RentStudioForm />} />
        <Route
          path="apply-to-artist-fellowship"
          element={<StudioProgramForm />}
        />
        <Route path="thank-you" element={<ThankYou />} />

        {/* <Route path="sponsors" element={<Sponsors />} /> */}
      </Route>
    </Routes>
  );
};

function App() {
  return <NavRoutes />;
}

export default App;
