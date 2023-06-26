import StudioVwazenBanner from "./StudioVwazenBanner";
import ArtistInStudio from "./ArtistInStudio";
import SupportVwazen from "../SupportVwazen/SupportVwazen";
import FellowshipCallToAction from "../FellowshipCallToAction/FellowshipCallToAction";

const Home = () => {
  return (
    <>
      <StudioVwazenBanner />
      <SupportVwazen />
      <ArtistInStudio />
      <FellowshipCallToAction />
    </>
  );
};

export default Home;
