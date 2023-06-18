import StudioVwazenBanner from "./StudioVwazenBanner";
import ArtistInStudio from "./ArtistInStudio";
import ContactLyndy from "./ContactLyndy";
import SupportVwazen from "../SupportVwazen/SupportVwazen";

const Home = () => {
  return (
    <>
      <StudioVwazenBanner />
      <SupportVwazen />
      <ArtistInStudio />
      <ContactLyndy />
    </>
  );
};

export default Home;
