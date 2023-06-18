import bannerImage from "./Studio.png";

export default function StudioRentBanner() {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative border-b-2 border-b-[#988558]/50">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-24 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">
                Interested in Creating at Studio Vwazen?
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              We have two ways to accommodate artists at Studio Vwazen, the
              first option is to rent space in the studio for short-term art
              projects for $200/month.
            </p>
            <br></br>
            <p className="text-xl leading-8 text-gray-500">
              The second option is our studio program. This program entails use
              of the space free-of-charge, for members of the Renaissance Point
              Neighborhood, students, and more.
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
