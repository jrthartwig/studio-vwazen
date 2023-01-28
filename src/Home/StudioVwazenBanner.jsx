import bannerImage from "./Vwazen.png";

export default function StudioVwazenBanner() {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative border-b-2 border-b-[#988558]/50">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-24 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Studio Vwazen</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              “Vwazen” is the Haitian Creole word for neighbor and it is also
              the name of our multi-artist studio, located in the southeast
              quadrant of Fort Wayne, IN. Studio Vwazen is working to bring
              creatives together and support collaborations. Look for In Studio
              artist residencies beginning in 2023!
            </p>
            <br></br>
            <p className="text-xl leading-8 text-gray-500">
              Studio Vwazen aims to have up to three artists working on site at
              any given time. Artists will have their own, personal workspace as
              well as a shared community worktable for larger projects,
              collaborations and conversations. Please send a message to let us
              know if you are interested in being an Artist In Studio!
            </p>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={bannerImage}
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
