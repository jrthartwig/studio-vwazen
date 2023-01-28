import artistPhoto from "./ArtistsStudio.png";

const StudioProgramBanner = () => {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative border-b-2 border-b-[#988558]/50">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Studio Program</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              The Studio Program at Vwazen launched February 1st, 2023 and is an
              effort to provide individual studio spaces to artists looking to
              take their practice to the next level. Many artists in our city do
              not have access to clean, safe and efficient work spaces and their
              artistic production suffers as a result. Our goal is to help boost
              artists productivity, nourishing the culture of the Arts in
              southeast Fort Wayne.
            </p>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={artistPhoto}
            alt=""
          />
        </div>
      </main>
    </div>
  );
};

export default StudioProgramBanner;
